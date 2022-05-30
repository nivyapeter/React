import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaBars}from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai"
import './Navbar.css'; 
import {SidebarData} from "./SidebarData";
import SiteHeader from './SiteHeader';

function Navbar() {
  const[sidebar,setsidebar] = useState(false);
  const showSidebar =()=> {
    setsidebar(!sidebar);
  }

  const[subNav,setSubNav] = useState(false);
  const showSubnav =() => setSubNav(!subNav);

  return (
   <>
   <div className="navbar">
      
       <Link to="#" className="menu-bars  text-white bg-black">
        <FaBars onClick={showSidebar}/>
       </Link>
   </div>
   <nav className={sidebar? 'nav-menu active' : 'nav-menu'}>
     <ul className="nav-menu-items">
       <li className="navbar-toggle">
         <Link to="#" className="menu-bars">
           <AiOutlineClose onClick={()=>setsidebar(false)}/>
         </Link>
       </li>
       {SidebarData.map((item,index) => {
         return (
           <li key={index} className={item.cName}>
             <Link to={item.path} onclick={item.subNav && showSubnav} >
               {item.icon}
               <span className="flex items-center">{item.title}</span>
               <div>
                 {item.subNav && subNav ? item.iconOpened : item.subNav ? item.iconClosed : null}
               </div>
             </Link>
             {/* {subNav && item.subNav.map((item,index) => {
             return (
               <DropdownLink to={item.path} key={index}>
                 {item.icon}
                 <span className="flex items-center">{item.title}</span>
                 </DropdownLink>
             )
            })} */}
           </li>
           
         )
       })}
     </ul>
   </nav>
   </>
  )
}

export default Navbar