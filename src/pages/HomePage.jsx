import { useState } from 'react'
import Navbar from '../components/Navbar'
import "./uniformBackground.css";
import "./homepageStyle.css";
import MatchCard from '../components/MatchCard';
import React from 'react';

function HomePage() {

  let todayDate = new Date();
  let dayNumber = todayDate.getDay();
  todayDate = dayNumber.toString().length==2 ? "2022-"+(todayDate.getMonth()+1)+"-"+todayDate.getDate() : "2022-"+(todayDate.getMonth()+1)+"-0"+todayDate.getDate();

  React.useEffect(function(){
    document.getElementById("matches-date").setAttribute("value", todayDate);
    document.getElementById("matches-date").onchange = function(){
      getMatches();
    }
  }, []);  

  let baseUrl = "http://api.football-data.org/v4/competitions/2000";
  
  const [todayMatchesArray, setTodayMatchesArray] = React.useState([]);
  
  function getMatches(){
      let dateValue = document.getElementById("matches-date").value;
      fetch(
          `${baseUrl}/matches?dateFrom=${dateValue}&dateTo=${dateValue}`,
          {
              headers: {
                  "X-Auth-Token": "418737ec05fd43bc9a0add42b8df40f2"
              }
          }
      ).then((res)=>{
          return res.json();
      }).then((jsonOb)=>{
          setTodayMatchesArray(jsonOb.matches);
      });
  }

  React.useEffect(function(){
      getMatches();
    }, []);

      let matchCards = todayMatchesArray.map((match)=>{
        let matchProps = {
          date: match.utcDate,
          status: match.status,
          stage: match.stage,
          homeTeam: match.homeTeam.name,
          awayTeam: match.awayTeam.name,
          homeScore: match.score.fullTime.home,
          awayScore: match.score.fullTime.away,
          id: match.id
        }
        console.log(matchProps);
        return <MatchCard key={matchProps.id} matchProps={matchProps} />
      })

      console.log(matchCards);

  return (
    <div className="homepage-container">
      <Navbar/>
        <div className='homepage-header'>
          <h2>Matches Schedule</h2>
          <input type="date" name='matches-date' id="matches-date" />
        </div>
        <div className='horizontal-flex'>
          <img src="src\assets\divider.png" alt="" width="90%" />
        </div>
        <div className='homepage-match-cards'>
          <img src="src\assets\matchCardLine.png" alt="" />
          {matchCards}
        </div>
    </div>
  )
}

export default HomePage
