import React from "react";
import Navbar from "../components/Navbar";
import data from "../components/News.json"
import { Link } from "react-router-dom";
import "../components/News.css"
import NewPage from './NewsPage'
import reactStringReplace from 'react-string-replace';
import StandingsTitleAndButtons from '../components/StandingsTitleAndButtons'

import NewsPage from '../pages/NewsPage'
function News(){
    return(<>  
            <Navbar/>
            <h1 className="news-header">News</h1>
            <div className='horizontal-flex'>
          <img src="src\assets\divider.png" alt="" width="90%" />
        </div>
   <ul >

     {data.map((item, index) => {
        
              return (
                
                               <div className="Box" >
                    {/* <span className="item1"> Hello</span> */}
                    <img src={item.photo} className="item1 img" alt="" />
                    <span className="item2">{item.title} <a href= {item.link}  target="_blank" >read more</a> </span>
                    </div> 

              );
            })}
  </ul> 
    
    </>
    )
}

export default News;
