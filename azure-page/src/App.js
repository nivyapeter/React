import logo from "./logo.svg";
import img from "./manage.png";
import img1 from "./watch.png";
import img2 from "./innovate.png";
import "./index.css";
import Header from "./components/header";
import Banner from "./components/banner";
import Card from "./components/Card";
import {HEADING,TITLE}  from "./Constatns/constats";




function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo-section azure-container">
          <a href={TITLE}>
            <img src={logo} className="app-logo" alt="logo" />
          </a>
          <a className="logo-text" href={TITLE}>
            {TITLE}
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
      <div className="mainBanner">
              <Banner />
            </div>
            <div className="mainCard ">
              <div className="card-main-heading">
                <h1>{HEADING}</h1>
              </div>
              <div className="card-blk azure-container">
               
              <Card img={img} title="Manage satellite data at cloud scale" body="Communicate with, and process data from satellites with Azure Orbital, a fully managed ground station service." link="https://aka.ms/AzureSpace" height="40vh" padding="24px"/>
               <div className="same-card">
                 <Card img={img1} title="Watch Microsoft Ignite on demand" body="See Azure announcements from the event, including new technologies to innovate across all your environments." link="https://myignite.microsoft.com/home" display="flex" height="21vh" />
                 <Card img={img2} title="Watch Microsoft Ignite on demand" body="See Azure announcements from the event, including new technologies to innovate across all your environments." link="https://myignite.microsoft.com/home" display="flex" height="21vh"/>
               </div>
               </div>
            </div>
    </div>
  );
}

export default App;
