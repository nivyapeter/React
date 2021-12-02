// import logo from './logo.svg';
// import './App.css';
import Navbar from './navbar';
import Home from './home';

function App() {
  // let title = 'Welcome to the blog';
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/* <h1>{title}</h1> */}
        <Home />
      </div>
    </div>
  );
}

export default App;