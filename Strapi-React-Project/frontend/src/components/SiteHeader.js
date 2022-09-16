import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRestCategory } from "../api/api";

function SiteHeader() {
  const [data, setData] = useState([]);
  useEffect(() => { 
    getRestCategory(setData);
  }, []);
  console.log(data.data);
  return (
    <div className="site-header">
      {/* <Link to="/">Data Dashboard</Link> */}
      <nav className="categories">
        <span>Filter restaurants by category:</span>
        {/* {data?.map(category => {
          return (
          <Link  className="teaxt-black text-3xl"key={category.id} to={`/category/${category.id}`}>
            {category.name}
          </Link>
       ) })} */}
      </nav>
    </div>
  );
}

export default SiteHeader;
