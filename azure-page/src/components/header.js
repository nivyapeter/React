import React from "react";
import Button from "./button";
import Search from "./search";

const doclink ="https://docs.microsoft.com/en-gb/";
const supportlink = "https://azure.microsoft.com/en-gb/support/options/";
const contactlink = "https://azure.microsoft.com/en-gb/support/options/";
const signlink ="https://azure.microsoft.com/auth/signin/?loginProvider=Microsoft&redirectUri=%2Fen-gb%2F";
function Header() {
  return (
    <div className="header">
      <ul className="nav-list">
        <li class="nav-list-item">
          <button class="nav-button" type="button">
            Explore
          </button>
        </li>
        <li class="nav-list-item">
          <button class="nav-button" type="button">
            Products
          </button>
        </li>
        <li class="nav-list-item">
          <button class="nav-button" type="button">
            Solutions
          </button>
        </li>
        <li class="nav-list-item">
          <button class="nav-button" type="button">
            Pricing
          </button>
        </li>
        <li class="nav-list-item">
          <button class="nav-button" type="button">
            Partners
          </button>
        </li>
        <li class="nav-list-item">
          <button class="nav-button" type="button">
            Resources
          </button>
        </li>
      </ul>
      <div className="account-button">
        <Button />
      </div>
      <div className="search-form">
        <Search />
      </div>
      <div className="nav2-list">
      <ul className="nav-list">
        <li class="nav-list-item">
          <button class="nav-button" type="button">
            <a href={doclink}>Docs</a>
          </button>
        </li>
        <li class="nav-list-item">
          <button class="nav-button" type="button">
            <a href={supportlink}>Support</a>
          </button>
        </li>
        <li class="nav-list-item">
          <button class="nav-button" type="button">
            <a href={contactlink}>Contact Sales</a>
          </button>
        </li>
        <li class="nav-list-item">
          <button class="nav-button" type="button">
            <a href={signlink}>Sign in</a>
          </button>
        </li>
      </ul>
      </div>
    </div>
  );
}
export default Header;
