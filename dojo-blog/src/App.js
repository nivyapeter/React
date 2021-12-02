// import logo from './logo.svg';
import './App.css';

function App() {
  let title = 'Welcome to the blog';
  let likes = 50;
  // let persons = {name:"anu",age:13}
  let link = "https://www.google.com";
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Like {likes} times</p>
        {/* <p>{persons}</p> */}
        <p>{"hai"}</p>
        <p>{[1,2,3,4]}</p>
        <p>{Math.random () * 20}</p>
        <a href={link}>Google</a>
      </div>
    </div>
  );
}

export default App;