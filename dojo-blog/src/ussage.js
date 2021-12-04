import { useEffect, useState } from "react";


function Ussage () {
   const [value,setValue] = useState(0);
   const [color,setColor] = useState(0);

   useEffect(() => {
    console.log("inside effect is" + value);
    return () => {
        console.log("clean up" + value);
    }
   },[value])

   return (
    <div className="Ussage">
        <div className="ussage-item" style={{display:"flex"},{justifyContent:"center"},{background:color}}>
        <button onClick ={() =>{
        // setValue (value +1)
           setValue((state) => {
            return state +1;
        })}}>Incremnet</button>
        <label>{value}</label>  
        <button onClick ={() => {
            setValue (value-1)
        }}>decrement</button>
        <button onClick ={() =>{
            setColor('green');
        }}>Green</button>
        <button onClick = {() =>{
            setColor("blue");
        }}>Blue</button>
        </div>
    </div>

);
};
export default Ussage;