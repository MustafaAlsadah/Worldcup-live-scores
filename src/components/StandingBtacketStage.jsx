import React from "react";

export default function StandingsBracketStage(props){
    let stage = new Date(props.stage);
    

    return(
        <div className="status-card">        
            <div className="status-card--score">
                {stage}
            </div>
        </div>
    )
}