import React from "react";
import greenCircle from "/src/assets/green_circle.svg";
import grayCircle from "/src/assets/gray_circle.svg";

export default function PlayingStatus(props){
    let gameStatus = props.status;
    let matchIsInPlay = gameStatus!="FINISHED" && gameStatus!="TIMED";
    let badgeText = (matchIsInPlay) ? "In Play" : "Finished";
    return(
        <div className="playing-status-container">
            <div className="playing-status--top">
                 {gameStatus=="FINISHED" && <img id="circle-img" src={grayCircle} alt="" />}
                 <span>{matchIsInPlay && <img id="circle-img" src={greenCircle} alt="" />}</span>
                 <span id="status-badge">{badgeText}</span>
                 
            </div>
            <div className="playing-status--bottom">
                {props.homeScore}:{props.awayScore}
            </div>
        </div>
    )
}