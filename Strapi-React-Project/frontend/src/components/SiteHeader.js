import React from "react";
import { Link } from "react-router-dom";

function SiteHeader() {
  return (
    <div className="site-header hidden">
      <Link to="/">Data Dashboard</Link>
    </div>
  );
}

export default SiteHeader;
