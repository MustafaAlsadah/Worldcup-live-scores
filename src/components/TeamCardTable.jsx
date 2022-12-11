import React from "react";

export default function TeamCardTable(props){
    let teamName = props.teamName;
    return(
        <div className="team-card-table">
            <img src={"Flags/"+teamName+".png"} width="50px" alt="" />
            <p className="team-cards-table--team-name">{teamName}</p>
        </div>
    )
}

