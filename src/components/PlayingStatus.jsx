import React, { useEffect } from "react";
import greenCircle from "/src/assets/green_circle.svg";
import grayCircle from "/src/assets/gray_circle.svg";
import $ from 'jquery'; 

export default function PlayingStatus(props){
    let gameStatus = props.status;
    let matchIsInPlay = gameStatus!="FINISHED" && gameStatus!="TIMED";
    let badgeText = (matchIsInPlay) ? "In Play" : "Finished";

    $("document").ready(() => {
        setInterval(() => {
            $('.green-circle-img').fadeIn(1000);
            $('.green-circle-img').fadeOut(1000);
        }, 1);
    });


    

    return(
        <div className="playing-status-container">
            <div className="playing-status--top">
                 {gameStatus=="FINISHED" && <img id="circle-img" src={grayCircle } alt="" />}
                 <span className="green-circle-img">{matchIsInPlay && <img id="circle-img" src={greenCircle} alt="" />}</span>
                 &nbsp;
                 <span id="status-badge">{badgeText}</span>
                 
            </div>
            <div className="playing-status--bottom">
                {props.homeScore}:{props.awayScore}
            </div>
        </div>
    )
}