import React from 'react';

export default function TeamCard(props){
    let teamName = props.teamName;
    return(
        <div className="team-card">
            <img src={"Flags/"+teamName+".png"} width="30%" alt="" />
            <p className="team-cards--team-name">{teamName}</p>
        </div>
    )
}
