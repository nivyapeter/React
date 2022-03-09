import React, { useState } from "react";
import Button from "./button";
import Explore from "./dropdown/explore/explore";
// import Dropdown from "./dropdown/explore/explore";
import Search from "./search";

const doclink = "https://docs.microsoft.com/en-gb/";
const supportlink = "https://azure.microsoft.com/en-gb/support/options/";
const contactlink = "https://azure.microsoft.com/en-gb/support/options/";
const signlink =
  "https://azure.microsoft.com/auth/signin/?loginProvider=Microsoft&redirectUri=%2Fen-gb%2F";

let array = [
  "Explore",
  "Products",
  "Solutions",
  "Pricing",
  "Partners",
  " Resources",
];
let array2 = ["Docs", "Support", "Contact Sales", "Sign in"];
let names = [
  {
    title: "Get to know Azure",
    body: "Discover secure, future-ready cloud solutions – on-premises, hybrid, multicloud or at the edge",
  },
  {
    title: "Global infrastructure",
    body: "Learn about sustainable, trusted cloud infrastructure with more regions than any other provider",
  },
  {
    title: "Cloud economics",
    body: "Build your business case for the cloud with key financial and technical guidance from Azure",
  },
  {
    title: "Customer enablement",
    body: "Plan a clear path forwards for your cloud journey with proven tools, guidance and resources",
  },
  {
    title: "Customer stories",
    body: "See examples of innovation from successful companies of all sizes and from all industries",
  }
];

function Header() {
   const [selected,setSelected] = useState("")
   let componentRender=<div></div>
  const handleClick = (e) => {
    console.log ("hello" ,e.target)                     

    if (e.target.id===selected){
      setSelected("")
      return
    }
    if(e.target.id==="Explore"){
      setSelected("Explore")
      console.log(e.target.id)
    }
    
  }
  switch (selected) {
    case "Explore":
      componentRender =<Explore names={names} />
      break;
  
    default:
      break;
  }
  
  return (
    <><div className="header">
      <ul className="nav-list">
        {array.map((item, index) => {
          return (
            <li class="nav-list-item" key={index}>
              <button onClick={handleClick} class="nav-button" type="button" id={item}>
                {item}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="account-button">
        <Button bg="green" title="Free account" color="black" link="https://azure.microsoft.com/en-gb/free/" />
      </div>
      <div className="search-form">
        <Search />
      </div>
      <div className="nav2-list">
        <ul className="nav-list">
          {array2.map((item, index) => {
            return (
              <li class="nav-list-item" key={index}>
                <button class="nav-button" type="button">
                  <a href={doclink}>{item}</a>
                </button>
              </li>
            );
          })}
        </ul>
      </div>


    </div><div className="dropdown-section azure-container">
        {/* <Explore names={names}/> */}
        {componentRender}
      </div></>
  );
}
export default Header;
