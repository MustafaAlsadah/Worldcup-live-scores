import React from "react";

export default function TeamCard(props){
    let teamName = props.teamName;
    let teamTLA = props.teamTLA;
    let teamScore = props.teamScore;
    
    return(
        <div className="team-card">
            <p className="team-cards--team-name">{teamTLA}</p>
            <img src={"Flags/"+teamName+".png"} width="20%" alt="" />
            <div className="bracket-match-score">
                
            </div>

        </div>
    )
}

