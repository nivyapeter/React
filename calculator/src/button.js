import { useState } from 'react';
import './button.css';
const Button =() => {
//  const [number,setNumber] = useState("");
 const [result,setResult] = useState("test");

 const handleClick = (e) => {
     setResult(result.concat(e.target.value))
 }
 const clearDisplay = ()=> {
     setResult("");
 }
 const calculateResult =() => {
     setResult(eval(result));
 }
    return (
        <div className="main-button">
            <div className="row">
            <div className="display">
                <input type="text" placeholder="0" id="answer" value={result}></input>
            </div>
            </div>
            <div className="row">
            <button onClick = {clearDisplay}>C</button>
            <button  value="()" onClick={handleClick}>()</button>
            <button value="%" onClick={handleClick}>%</button>
            <button value="/" onClick={handleClick}>/</button>
            </div>
            <div className="row">
            <button value="7" onClick={handleClick}>7</button>
            <button value="8" onClick={handleClick}>8</button>
            <button value="9" onClick={handleClick}>9</button>
            <button value="*" onClick={handleClick}>*</button>
            </div>
            <div className="row">
            <button value="4" onClick={handleClick}>4</button>
            <button value="5" onClick={handleClick}>5</button>
            <button value="6" onClick={handleClick}>6</button>
            <button value="-" onClick={handleClick}>-</button>
            </div>
            <div className="row">
            <button value="1" onClick={handleClick}>1</button>
            <button value="2" onClick={handleClick}>2</button>
            <button  value="3"onClick={handleClick}>3</button>
            <button value="+" onClick={handleClick}>+</button>
            </div>
            <div className="row">
            <button onClick={handleClick}>0</button>
            {/* <button onClick={handleClick}>c</button>
            <button onClick={handleClick}>c</button> */}
            <button onClick={calculateResult} className="result">=</button>
            </div>
            {/* <button className="result"></button> */}
        </div>
    );
}
export default Button;