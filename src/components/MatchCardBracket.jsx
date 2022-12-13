import React from "react";
import TeamCard from "./TeamCard";
import ScheduledStatus from "./ScheduledStatus";
import PlayingStatus from "./PlayingStatus";
import TeamCardBracket from "./TeamCardBracket";
import StandingsBracketStage from "./StandingBtacketStage";
export default function MatchCard(props){
    const {date, status, stage, homeTeam, awayTeam, homeScore, awayScore,homeTLA,awayTLA} = props.matchProps;
    const homeTeamFlag = `src/assets/Flags/${homeTeam}.png`;
    
    return(
        <div className="bracket-match">
            <div className="bracket-match-card--container">

                <div className="home-team">
                    <TeamCardBracket teamName={homeTeam} teamTLA={homeTLA} teamScore={homeScore} />
                </div>

                <div className="away-team">
                    <TeamCardBracket teamName={awayTeam} teamTLA={awayTLA} teamScore={awayScore}/>
                </div>
                
            </div>
            <div className="bracket-match-score">
                {homeScore}:{awayScore}
            </div>
            
        </div>
    )
}