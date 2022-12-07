import React from 'react'
import ScheduleTable from './ScheduleTable'
import './collapseListStandings.css'
import { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';

// import { Accordion } from "react-bootstrap";


const CollapseListStandings = ({probs}) => {

    // const [open, setOpen] = useState('0');
    // const toggle = (id) => {
    //   if (open === id) {
    //     setOpen();
    //   } else {
    //     setOpen(id);
    //   }
    // };
    

    const[selected,setSelected]=useState(null)

    const toggle=(index) =>{
        if(selected === index){
            return setSelected(null)
        }
        setSelected(index)
    }


  return (
    <div className='main'>
        <div className='warpper'>
            <div className='accordion' >
                {probs.map((item,index) =>(
                    <div className='item'>
                        <div className='title' onClick={()=>{ toggle(index)}}> 
                            <h2 className='h2'> 
                                <span>{item.group.replace("_"," ")}</span>
                                <span >{ selected===index? "︾":"︽"} </span>
                            </h2>
                            <div className={ selected===index ? 'content show':"content "}> 
                                <ScheduleTable probs={item.teams} /> 
                            </div>
                        </div>
                    </div>
                    ))} 
                    
                
                
            </div>    
        </div>
    </div>
  )
// return (
//     <Accordion className='bg-dark'>
//       <Accordion.Item className='bg-dark' eventKey="0">
//         <Accordion.Header className='bg-dark'>Accordion Item #1</Accordion.Header>
//         <Accordion.Body className='bg-dark'>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Accordion.Body>
//       </Accordion.Item>
//       <Accordion.Item eventKey="1">
//         <Accordion.Header>Accordion Item #2</Accordion.Header>
//         <Accordion.Body>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Accordion.Body>
//       </Accordion.Item>
//     </Accordion>
//   )
}

export default CollapseListStandings
