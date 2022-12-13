import React from "react";
import Navbar from "../components/Navbar";
import data from "../components/News.json"
import { Link, useLocation } from "react-router-dom";
import reactStringReplace from 'react-string-replace';

import "../components/NewPage.css"
function NewsPage(props){
  // React.useEffect(()=>{
    console.log(useLocation(), 44)
  // }, [])
    return(<>  

            <Navbar/>
            {/* {id = 1} */}
            
 

        <div className="subject">
         {/* {data[props.id].title} */}
         </div>
         <hr className="hr" />
         <div >
      {/* <img className="photo" src={data[props.id].photo} alt="" /> */}
         </div>
         <hr className="hr" />
         <div className="readmore">
          <span>
        {/* {reactStringReplace(data[props.id].ReadMore, '<br>', (match, i) => (
          <div className="spacer"> <br /></div>
        ))} */}
      </span>
         </div>


    
    </>
    )
}
export default NewsPage;
