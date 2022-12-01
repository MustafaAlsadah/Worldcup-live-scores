import React from "react";

export default function ScheduledStatus(props){
    let matchDate = new Date(props.time);
    let timeZoneOffset = 3;
    let matchTime = (matchDate.getUTCHours()+timeZoneOffset)-12;
    return(
        <div className="status-card">        
            <div className="status-card--score">
                {`${matchTime} PM`}
            </div>
        </div>
    )
}