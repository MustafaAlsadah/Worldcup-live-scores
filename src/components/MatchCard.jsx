import React from "react";
import TeamCard from "./TeamCard";

export default function MatchCard(props){
    return(
        <div>
            <div className="container">
                <div className="home-team">
                    <MatchCard/>
                </div>
                <div className="status-card">

                </div>
                <div className="away-team">
                    <MatchCard/>
                </div>
            </div>
            <img src="src\assets\matchCardLine.png" alt="" />
        </div>
    )
}