import React from "react";
import Button from "./button";
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
function Header() {
  return (
    <div className="header">
      <ul className="nav-list">
        {array.map((item, index) => {
          return (
            <li class="nav-list-item" key={index}>
              <button class="nav-button" type="button">
                {item}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="account-button">
        <Button />
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
    </div>
  );
}
export default Header;
