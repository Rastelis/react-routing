import { useState, useEffect } from 'react';
import Button from '../components/button/Button';
import './product-list.css'
import Footer from '../components/footer/Footer';

function App() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    let data = localStorage.getItem('products');

    if (!data)
      return;

    data = JSON.parse(data);
    setProducts(data);
  }, [loading]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {};

    for (const input of formData.entries()) {
      data[input[0]] = input[1];
    }



    const localData = localStorage.getItem('products');

    if (localData) {

      let convertedData = JSON.parse(localData);
      convertedData.push(data);
      convertedData = JSON.stringify(convertedData);
      localStorage.setItem('products', convertedData);
    } else {

      localStorage.setItem('products', JSON.stringify([data]));
    }

    setLoading(!loading);
  }

  const handleClick = (index) => {
    console.log(true)
    const localData = localStorage.getItem('products');
    let convertedData = JSON.parse(localData);
    convertedData.splice(index, 1)
    convertedData = JSON.stringify(convertedData)
    localStorage.setItem('products', convertedData)
    setLoading(!loading)
  }

  return (
    <>
      <div className='container'>
        <h1>Products</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Photo</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 && <tr>
              <td></td>
              <td></td>
              <td>No Data</td>
              <td></td>
              <td></td>
              </tr>}
            {products.map((data, index) =>
              <tr key={index}>
                <td>{data.title}</td>
                <td>
                  <img src={data.photo} style={{
                    maxWidth: 100
                  }} />
                </td>
                <td>{data.price}</td>
                <td>{data.qty}</td>
                <td><Button onClick={() => handleClick(index)} text={"X"} /></td>
              </tr>
            )}
          </tbody>
        </table>
        <h2>New Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Produkto pavadinimas</label>
            <input
              type="text"
              className="form-control"
              name="title"
            />
          </div>
          <div className="mb-3">
            <label>Produkto nuotrauka</label>
            <input
              type="text"
              className="form-control"
              name="photo"
            />
          </div>
          <div className="mb-3">
            <label>Produkto kaina</label>
            <input
              type="number"
              className="form-control"
              name="price"
            />
          </div>
          <div className="mb-3">
            <label>Kiekis sandėlyje</label>
            <input
              type="number"
              className="form-control"
              name="qty"
            />
          </div>
          <button className="btn btn-primary">Pridėti</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default App
