import { useRef, useState } from 'react'
import Button from '../components/button/Button'
import './calculator.css'
export default function Calculator() {
    const [value, setValue] = useState(0);
    //const [action, setAction] = useState();
    let buffer;
    let operator;
    const handleNumber = (e) => {
        // console.log(e.target.textContent)
        if (value === 0 || typeof value === "string") setValue(parseInt(e.target.textContent));
        else if (operator === undefined) setValue(parseInt(value + e.target.textContent));
    };
    const handleOperator = (e) => {
        if (typeof value === "number" && operator === undefined) {
            buffer = value;
            operator = e.target.textContent;
            setValue(operator);
        }


    }
    // console.log(value)
    // console.log(action)
    return (
        <div className="container calculator-wraper">
            <div className="row justify-content-center align-items-center calculator-wraper">
                <div className='calculator rounded col-3 p-3 '>
                    <div className="display-container p-1">
                        <div className='output text-end'>{value}</div>
                    </div>
                    <div className='d-flex align-items-center justify-content-center'>
                        <div className='button-group'>
                            <div className='d-flex gap-2 pt-2 pb-2'>
                                <Button onClick={(e) => handleNumber(e)} text={"+"} />
                                <Button onClick={(e) => handleNumber(e)} text={"-"} />
                                <Button onClick={(e) => handleNumber(e)} text={"*"} />
                                <Button onClick={(e) => handleOperator(e)} text={"/"} />
                            </div>
                            <div className='d-flex gap-2 pb-2'>
                                <Button onClick={(e) => handleNumber(e)} text={1} />
                                <Button onClick={(e) => handleNumber(e)} text={2} />
                                <Button onClick={(e) => handleNumber(e)} text={3} />
                                <Button onClick={(e) => handleOperator(e)} text={"%"} />
                            </div>
                            <div className='d-flex gap-2 pb-2'>
                                <Button onClick={(e) => handleNumber(e)} text={4} />
                                <Button onClick={(e) => handleNumber(e)} text={5} />
                                <Button onClick={(e) => handleNumber(e)} text={6} />
                                <Button onClick={(e) => handleOperator(e)} text={"C"} />
                            </div>
                            <div className='d-flex gap-2 pb-2'>
                                <Button onClick={(e) => handleNumber(e)} text={7} />
                                <Button onClick={(e) => handleNumber(e)} text={8} />
                                <Button onClick={(e) => handleNumber(e)} text={9} />
                                <Button onClick={(e) => handleOperator(e)} text={"D"} />
                            </div>
                            <div className='d-flex gap-2 pb-2'>
                                <Button onClick={(e) => handleOperator(e)} text={"±"} />
                                <Button onClick={(e) => handleNumber(e)} text={0} />
                                <Button onClick={(e) => handleOperator(e)} text={"."} />
                                <Button onClick={(e) => handleOperator(e)} text={"="} />
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
