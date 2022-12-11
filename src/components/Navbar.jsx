import React from "react";
import { useState } from "react";
import "./components.css";
import { Link } from "react-router-dom";

import { SidebarData } from "./SidebarData";
import './Navbar.css'
export default function Navbar(){
    const [sidebar , setSidebar]= useState(false);
    const showSiderbar = ()=> setSidebar(!sidebar);
    return(
        <>        
        <nav className="navbar">
            <img src="src\assets\world-cup-2022-logo.svg" alt="" />
            <Link to="#" classname= "menu-bar">
            <img classname="class" src="src\assets\hamburger_menu.svg" alt="" onClick={showSiderbar} />
            </Link>
           

        </nav>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}> 
   <ul className='nav-menu-items' onClick={showSiderbar}>
     <li className='navbar-toggle'></li>
     {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
  </ul>
</nav>
        </>
    )
}
