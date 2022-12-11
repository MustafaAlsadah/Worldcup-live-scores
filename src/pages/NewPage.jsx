import React from "react";
import Navbar from "../components/Navbar";
import data from "../components/News.json"
import { Link } from "react-router-dom";
import reactStringReplace from 'react-string-replace';

import "../components/NewPage.css"
function NewsPage(id){
    return(<>  
            <Navbar/>
            {id = 1}
            


        <div className="subject">
         {data[id].title}
         </div>
         <hr className="hr" />
         <div >
      <img className="photo" src={data[id].photo} alt="" />
         </div>
         <hr className="hr" />
         <div className="readmore">
          <span>
        {reactStringReplace(data[id].ReadMore, '<br>', (match, i) => (
          <div className="spacer"> <br /></div>
        ))}
      </span>
         </div>


    
    </>
    )
}
export default NewsPage;
