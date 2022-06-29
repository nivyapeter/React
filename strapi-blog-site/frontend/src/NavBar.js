import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaBars}from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai"
import './Navbar.css'; 
import {SidebarData} from "./constants";


function Navbar() {
    const[sideNav,setSideNav] = useState(false)
    const showSideSection =()=> {
        setSideNav(true)
    }
  return (
   <>
   <div className="navbar">
       <div className="m-auto w-full  flex fex-row justify-between">
       <Link to="#" className="menu-bars  text-white bg-black">
        <FaBars onClick={showSideSection}/>
       </Link>
       <div className="text-white text-xl font-bold">Nivya K Peter</div>
       </div>
   </div>
   
   <nav className={sideNav ? "nav-menu active" :'nav-menu'}>
     <ul className="nav-menu-items">
       <li className="navbar-toggle">
         <Link to="#" className="menu-bars">
           <AiOutlineClose onClick={()=>setSideNav(false)} />
         </Link>
       </li>
       {SidebarData.map((item,index) => {
         return (
           <li key={index} className={item.cName}>
             <Link to={item.path}>
               {item.icon}
               <span className="flex items-center text-white">{item.title}</span>
             </Link>
           </li>
           
         )
       })}
     </ul>
   </nav>
   </>
  )
}

export default Navbar