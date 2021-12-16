import React from "react";

function Dropdown ({bg,title,names=[]}) {
    console.log("names", names);
    
    
    return(
    <div className="dropdown-blok" style={{background: bg}}>
     <button className="dropdown">
         <h2>Explore</h2>
    </button>
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
    <div className="header-title">
       <p className="drop-header-title">{title}</p>
    </div>
    <ul className="drop-down-expand">
        <li>
            <a href="">Get Azure</a>
            <p>Discover secure, future-ready cloud solutions – on-premises, hybrid, multicloud or at the edge</p>
        </li>
        <li>
            <a href="">Global infrastructure</a>
            <p>Discover secure, future-ready cloud solutions – on-premises, hybrid, multicloud or at the edge</p>
        </li>
        <li>
            <a href="">cloud ecnomics</a>
            <p>Discover secure, future-ready cloud solutions – on-premises, hybrid, multicloud or at the edge</p>
        </li>
        <li>
            <a href="">customer enablement</a>
            <p>Discover secure, future-ready cloud solutions – on-premises, hybrid, multicloud or at the edge</p>
        </li>
        <li>
            <a href="">customer stories</a>
            <p>Discover secure, future-ready cloud solutions – on-premises, hybrid, multicloud or at the edge</p>
        </li>

    </ul>
    </div>
    )
}
export default  Dropdown;