import { useState } from 'react';
import Navbar from '../components/Navbar';
import './uniformBackground.css';
import './homepageStyle.css';
import MatchCard from '../components/MatchCard';
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  let todayDate = new Date();
<<<<<<< HEAD
  let dayNumber = todayDate.getDay();
  todayDate =
    dayNumber.toString().length == 2
      ? '2022-' + (todayDate.getMonth() + 1) + '-' + todayDate.getDate()
      : '2022-' + (todayDate.getMonth() + 1) + '-0' + todayDate.getDate();
=======
  let dayNumber = todayDate.getDate();
  todayDate = dayNumber.toString().length==2 ? "2022-"+(todayDate.getMonth()+1)+"-"+todayDate.getDate() : "2022-"+(todayDate.getMonth()+1)+"-0"+todayDate.getDate();
>>>>>>> d1e50af28888651c7fb503a4ec082165f9c333ef

  React.useEffect(function () {
    document.getElementById('matches-date').setAttribute('value', todayDate);
    document.getElementById('matches-date').onchange = function () {
      getMatches();
    };
  }, []);

  let baseUrl = 'https://api.football-data.org/v4/competitions/2000';

  const [todayMatchesArray, setTodayMatchesArray] = React.useState([]);
<<<<<<< HEAD

  function getMatches() {
    let dateValue = document.getElementById('matches-date').value;
    fetch(`${baseUrl}/matches?dateFrom=${dateValue}&dateTo=${dateValue}`, {
      headers: {
        'X-Auth-Token': '418737ec05fd43bc9a0add42b8df40f2',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((jsonOb) => {
        setTodayMatchesArray(jsonOb.matches);
      });
  }

  React.useEffect(function () {
    getMatches();
  }, []);

  let matchCards = todayMatchesArray.map((match) => {
    let matchProps = {
      date: match.utcDate,
      status: match.status,
      stage: match.stage,
      homeTeam: match.homeTeam.name,
      awayTeam: match.awayTeam.name,
      homeScore: match.score.fullTime.home,
      awayScore: match.score.fullTime.away,
      group: match.group,
      id: match.id,
    };
    console.log(matchProps);
    return (
      <Link
        to={`/SpecificMatchPage/${matchProps.id}`}
        state={{ matchProps: matchProps }}
      >
        <MatchCard key={matchProps.id} matchProps={matchProps} />
      </Link>
    );
  });

  console.log(matchCards);

  return (
    <div className='homepage-container'>
=======
        
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

      //LEAVE THIS PLEASE DON'T DELETE IT 
    //   fetch(
    //     `${baseUrl}/matches`,
    //     {
    //         headers: {
    //             "X-Auth-Token": "418737ec05fd43bc9a0add42b8df40f2"
    //         }
    //     }
    // ).then((res)=>{
    //     return res.json();
    // }).then((jsonOb)=>{
    //     let videoId = 1;
    //     for(let i=0; i<jsonOb.matches.length; i++){ 
    //       if(jsonOb.matches[i].homeTeam.name=="Morocco" && jsonOb.matches[i].awayTeam.name=="Portugal"){
    //         videoId =i+1;
    //         break;
    //       }else{
    //         console.log("NA")
    //       }
    //     }
        
    //     let sampleUrl = `https://www.youtube.com/watch?v=FtHKVlNFvX8&list=PLczz3UIGL1XrItEVeri8ZBEyroLdNkjZh&index=${videoId}`;
    //     let iframeMarkup = '<iframe width="100%" height="260" src="//www.youtube.com/embed/' + sampleUrl + '" frameborder="0" allowfullscreen></iframe>';

    //     document.getElementById("oo").innerHTML=iframeMarkup;
    // });
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
          id: match.id,
          youtubeIframeUrl: ""
        }

        return <MatchCard key={matchProps.id} matchProps={matchProps} />
      })

      //Demo match
      // let demoMatchProps = {
      //   date: "2022-12-12",
      //   status: "IN_PLAY",
      //   stage: "GROUP_STAGE",
      //   homeTeam: "Tunisia",
      //   awayTeam: "France",
      //   homeScore: 7,
      //   awayScore: 0,
      //   id: 4
      // }
      // matchCards.push(<MatchCard key={demoMatchProps.id} matchProps={demoMatchProps} />);


  return (
    <div className="homepage-container">
      <div id='oo'></div>
>>>>>>> d1e50af28888651c7fb503a4ec082165f9c333ef
      <head>
        <meta
          http-equiv='Content-Security-Policy'
          content='upgrade-insecure-requests'
        />
      </head>
<<<<<<< HEAD
      <Navbar />
      <div className='homepage-header'>
        <h2>Matches Schedule</h2>
        <input type='date' name='matches-date' id='matches-date' />
      </div>
      <div className='horizontal-flex'>
        <img src='src\assets\divider.png' alt='' width='90%' />
      </div>
      <div className='homepage-match-cards'>
        <img src='src\assets\matchCardLine.png' alt='' />
        {matchCards}
      </div>
=======
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
          {matchCards.length==0 && <div className='no-matches-badge'><h1>There are no matches today!</h1><img src='src/assets/_Laeeb.png' width="40%" /></div>}
        </div>
>>>>>>> d1e50af28888651c7fb503a4ec082165f9c333ef
    </div>
  );
}

export default HomePage;
