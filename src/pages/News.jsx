import React from "react";
import Navbar from "../components/Navbar";
import data from "../components/News.json"
import { Link } from "react-router-dom";
import "../components/News.css"
import NewPage from './NewPage'
import reactStringReplace from 'react-string-replace';

import NewsPage from '../pages/NewPage'
function News(){
    return(<>  
            <Navbar/>
   <ul >

     {data.map((item, index) => {
        
              return (
                               <div className="Box" >
                    {/* <span className="item1"> Hello</span> */}
                    <img src={item.photo} className="item1 img" alt="" />
                    <span className="item2">{item.title} <a href= "/NewPage" >read more</a> </span>
                    </div> 

              );
            })}
  </ul> 
    
    </>
    )
}

export default News;
