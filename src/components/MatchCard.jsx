import React from 'react';
import TeamCard from './TeamCard';
import ScheduledStatus from './ScheduledStatus';
import PlayingStatus from './PlayingStatus';

<<<<<<< HEAD
export default function MatchCard(props) {
  const { date, status, stage, homeTeam, awayTeam, homeScore, awayScore } =
    props.matchProps;
  const homeTeamFlag = `src/assets/Flags/${homeTeam}.png`;
=======
export default function MatchCard(props){
    const {date, status, stage, homeTeam, awayTeam, homeScore, awayScore} = props.matchProps;
    const homeTeamFlag = `src/assets/Flags/${homeTeam}.png`;

    return(
        <div>
            <div className="match-card--container">
>>>>>>> d1e50af28888651c7fb503a4ec082165f9c333ef

  return (
    <div>
      <div className='match-card--container'>
        <div className='home-team'>
          <TeamCard teamName={homeTeam} />
        </div>

        {status == 'TIMED' && <ScheduledStatus time={date} />}
        {status != 'TIMED' && (
          <PlayingStatus
            status={status}
            homeScore={homeScore}
            awayScore={awayScore}
          />
        )}

        <div className='away-team'>
          <TeamCard teamName={awayTeam} />
        </div>
      </div>
      <img src='..\src\assets\matchCardLine.png' alt='' />
    </div>
  );
}
