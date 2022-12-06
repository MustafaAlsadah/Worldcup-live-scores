import React from 'react'
import ScheduleTable from './ScheduleTable'
import './collapseListStandings.css'
import { useState } from 'react'

const CollapseListStandings = ({probs}) => {
    

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
            <div className='accordion'>
                {probs.map((item,index) =>(
                    <div className='item'>
                        <div className='title' onClick={()=>{ toggle(index)}}> 
                            <h2> 
                                {item.group}
                            </h2>
                            <span >{ selected===index? "-":"+"} </span>

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
}

export default CollapseListStandings
