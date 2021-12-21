import React from "react";

function Explore ({names=[]}) {
    console.log("names", names);
    
    
    return(
    <div className="dropdown-blok">
     <button className="dropdown">
         <h2>Explore Azure</h2>
    
    <ul className="drop-down-expand">
    {names.map(name => {
       return (
       <li>
       <p className="drop-header-title">{name.title}</p>
       <p>{name.body}</p>
       </li>
       );
    })}
    </ul>
    </button>
   </div>
    )
}
export default  Explore;;