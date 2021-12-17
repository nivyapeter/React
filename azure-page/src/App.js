import logo from "./logo.svg";
import "./index.css";
import Dropdown from "./components/dropdown/dropdown";
import Header from "./components/header";

const title = "Azure";
const link1 = "https://microsoft.com/";
const link2 = "https://azure.microsoft.com/en-gb/";

// let names = [
//   {
//     title: "Get Azure",
//     body: "iscover secure, future-ready cloud solutions – on-premises, hybrid, multicloud or at the edge",
//   },
//   {
//     title: "Get Azure",
//     body: "iscover secure, future-ready cloud solutions – on-premises, hybrid, multicloud or at the edge",
//   },
//   {
//     title: "Get Azure",
//     body: "iscover secure, future-ready cloud solutions – on-premises, hybrid, multicloud or at the edge",
//   },
// ];

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <div className="logo-section">
          <a href={link1}>
            <img src={logo} className="App-logo" alt="logo" />
          </a>
          <a className="logo-text" href={link2}>
            {title}
          </a>

          {/* </div> */}
          <div className="dropdown-block">
            {/* <Dropdown bg="red" title="hai" names={names}/>
         <Dropdown bg="green" title="nivya"/>
         <Dropdown bg="blue" title="hello"/> */}
            <Header />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
