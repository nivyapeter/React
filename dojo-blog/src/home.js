import {useState} from 'react';
const Home = () =>{
//    let name="mario"; 
 const [name,setName] = useState('mario');  
 const [age,setAge] = useState(25);
 const handClick = () => {
   setName('Anju') ;
   setAge(20);
    }
    
    return (
    <div className="Home">
    <h2>Home page</h2>
    <p>{name} is {age} years old</p>
    <button onClick={handClick}>Click</button>
    </div>
    );
}
export default Home