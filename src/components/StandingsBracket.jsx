import Navbar from './Navbar'
import { useEffect } from 'react'
import { useState } from 'react'
import ScheduleTable from './ScheduleTable'
import CollapseListStandings from './CollapseListStandings'
import StandingsTitleAndButtons from './StandingsTitleAndButtons'
import "../components/components.css"
import MatchCardBracket from './MatchCardBracket'
const StandingsBracket = () => {

    const[matches,setMatches] =useState([]);

    function getMatches(){
        
        fetch(
            `http://api.football-data.org/v4/competitions/2000/matches
            `,
            {
                headers: {
                    "X-Auth-Token": "418737ec05fd43bc9a0add42b8df40f2"
                }
            }
        ).then((res)=>{
            return res.json();
        }).then((data) => {
            setMatches(data.matches)
        }).catch((error) => {
            console.error('Error:', error);
          });
    }

    let matchCards = matches.map((match,index)=>{

        let matchProps = {
          date: match.utcDate,
          stage: match.stage,
          status: match.status,
          homeTLA: match.homeTeam.tla,
          awayTLA: match.awayTeam.tla,
          homeTeam: match.homeTeam.name,
          awayTeam: match.awayTeam.name,
          homeScore: match.score.fullTime.home,
          awayScore: match.score.fullTime.away,
          id: match.id
        }
        //console.log(match);
        if(matchProps.homeTLA==null ||matchProps.awayTLA==null){
            console.log(matchProps)
        matchProps.homeTLA="null"
        matchProps.awayTLA="null"
        return <MatchCardBracket key={matchProps.id} matchProps={matchProps} />

        }
        

        return <MatchCardBracket key={matchProps.id} matchProps={matchProps} />
      })
    useEffect(function(){
        getMatches();
      },[]);

      {console.log(matchCards.length)}


    return (
        <div >
            <div className='bracket--container'>
                <div className='bracket-line'>
                    {matchCards[matchCards.length-16]}
                    {matchCards[matchCards.length-15]}
                    Last 16
                    {matchCards[matchCards.length-12]}
                    {matchCards[matchCards.length-11]}
                    
                    </div>
                    <div className='bracket-line quarter'>
                    {matchCards[matchCards.length-7]}
                    Quarter Finals
                    {matchCards[matchCards.length-8]}
                    </div>
                    <div className='bracket-line semi'>
                        {/* Semi-Finals */}
                    {matchCards[matchCards.length-4]}
                    </div>
                    <img className='bracketer' src="src\assets\verticalLine.png" alt="" />
                    {/* <div className='bracket-line third-place'>
                        
                    {matchCards[matchCards.length-2]}
                    Third Place
                    </div> */}
                    
                    <div className='bracket-line finale'>
                        {/* Finals */}
                    {matchCards[matchCards.length-1]}
                    </div>
                    <img className='bracketer' src="src\assets\verticalLine.png" alt="" />
                    <div className='bracket-line semi'>
                        {/* Semi-Finals */}
                    {matchCards[matchCards.length-3]}
                    </div>
                    <div className='bracket-line quarter'>
                    {matchCards[matchCards.length-5]}
                    Quarter Finals
                    {matchCards[matchCards.length-6]}
                </div>
                <div className='bracket-line'>
                    {matchCards[matchCards.length-14]}
                    {matchCards[matchCards.length-13]}
                    Last 16
                    {matchCards[matchCards.length-10]}
                    {matchCards[matchCards.length-9]}
                    
                    </div>
                </div>
        </div>
      )

}

export default StandingsBracket
