import logo from './logo.svg';
import './index.css';

const title="Azure";
const link1="https://microsoft.com/"
const link2="https://azure.microsoft.com/en-gb/";
function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <div className="logo-section">
            <a href={link1}>
            <img src={logo} className="App-logo" alt="logo" /></a>
            <a className="logo-text" href={link2}>{title}</a>
            
        </div>
        
      </header>
    </div>
  );
}

export default App;
