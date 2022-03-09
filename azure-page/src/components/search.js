import React from "react";
import { VscSearch } from "react-icons/vsc";
const Search = () => {
  return (
    // <div className="search-section">
    <div className="search-block">
      <input type="text" placeholder="Search"  />
      
      <button type="submit">
      <VscSearch />
      </button>
    </div>
    // </div>
  );
};
export default Search;
