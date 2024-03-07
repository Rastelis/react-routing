
import { useState, useEffect } from 'react'
import './password-generator.css'

function App() {

  const [password, setPassword] = useState('')

  const [passwordList, setPassword_list] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let data = localStorage.getItem('pswrdgen');
    if (!data) return;
    data = JSON.parse(data)
    setPassword_list(data)
  }, [loading])

  function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function handleGenerate(e) {
    e.preventDefault()
    // console.log(e.data);
    const form = new FormData(e.target)
    // console.log(form.entries())
    const data = {}


    for (const input of form.entries()) {
      data[input[0]] = input[1];
    }

    const letterArray = 'abcdefghijklmnopqrstuvwxyz'
    const symbolarray = '~`!@#$%^&*()_-+={[}]|\\:;"\'<,>.?/'

    const passwordArray = [];
    for (let i = 0; i < data.passwordLength; i++) {
      const temp = [];
      data.numbers === 'on' && temp.push(rand(0, 9));
      data.symbols === 'on' && temp.push(symbolarray[rand(0, 31)]);
      if (rand(0, 1) === 0) temp.push(letterArray[rand(0, 25)]);
      else temp.push(letterArray[rand(0, 25)].toUpperCase());
      passwordArray.push(temp[rand(0, temp.length - 1)]);
    }
    setPassword(passwordArray.join(""));
    const localData = localStorage.getItem('pswrdgen');

    if (localData) {
      // Papildymas
      let convertedData = JSON.parse(localData);
      if (convertedData.length === 10) convertedData.pop();
      convertedData.unshift(passwordArray.join(""));
      convertedData = JSON.stringify(convertedData);
      localStorage.setItem('pswrdgen', convertedData);
    } else {
      // Sukūrimas
      localStorage.setItem('pswrdgen', JSON.stringify([passwordArray.join("")]));
    }
    setLoading(!loading);
  }

  return (
    <>
      <div className="container">
        <div className="row form-container">
          <h1 className='text-center'>Password Generator</h1>
          <form className='generator-form' onSubmit={handleGenerate}>
            <div className='password'>
              <input
                type="text"
                name='generator'
                className='form-control'
                readOnly
                value={password}
              />
            </div>
            <div>
              <div className='d-flex gap-3 justify-content-center align-items-center'>
                <label className='d-flex align-items-center gap-1' htmlFor="length">Password lengt:<input
                  type="number"
                  defaultValue={10}
                  id='length'
                  className='form-control'
                  name='passwordLength'
                />
                </label>
                <label htmlFor="numbers"><input name='numbers' id="numbers" type="checkbox" /> Use Numbers</label>
                <label htmlFor="symbols"><input name='symbols' id="symbols" type="checkbox" /> Use Symbols</label>
                <button className='btn btn-primary'>Generate</button>
              </div>
            </div>
            <table className='table'>
              <tbody>
                {passwordList.length === 0 && <tr><td>No Data</td></tr> }
                {passwordList.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td className='col'>{index + 1}</td>
                      <td className='col'>{data}</td>
                    </tr>
                  )
                })
                }
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
