import React from 'react';
import Navbar from '../components/Navbar';
import MatchCard from '../components/MatchCard';
import Countdown from '../components/Countdown';
import StadiumComponent from '../components/StadiumComponent';
import Goals from '../components/Goals';
import { useLocation } from 'react-router-dom';
import './MatchPageStyle.css';
const SpecificMatchPage = () => {
  const location = useLocation();
  const matchProps = location.state.matchProps;

  React.useEffect(function(){
    let baseUrl = 'https://api.football-data.org/v4/competitions/2000';

    fetch(
      
      `${baseUrl}/matches`,
      {
          headers: {
              "X-Auth-Token": "418737ec05fd43bc9a0add42b8df40f2"
          }
      }
  ).then((res)=>{
      return res.json();
  }).then((jsonOb)=>{
      let videoId = 1;
      for(let i=0; i<jsonOb.matches.length; i++){ 
        console.log(matchProps.homeTeam.name, matchProps.awayTeam.name)
        if(jsonOb.matches[i].homeTeam.name==matchProps.homeTeam && jsonOb.matches[i].awayTeam.name==matchProps.awayTeam ){
          videoId =i+1;
          break;
        }else{
          console.log("NA")
        }
      }
      
      console.log(videoId)
      let sampleUrl = `https://www.youtube.com/watch?v=FtHKVlNFvX8&list=PLczz3UIGL1XrItEVeri8ZBEyroLdNkjZh&index=${videoId}`;
      let iframeMarkup = '<iframe width="100%" height="260" src="//www.youtube.com/embed/' + sampleUrl + '" frameborder="0" allowfullscreen></iframe>';
  
      document.getElementById("oo").innerHTML=iframeMarkup;
  });
  }, []);

  return (
    <div>
      <Navbar />
      <div className='space'></div>
      <MatchCard matchProps={matchProps} />
      <div className='space'></div>
      {matchProps.status == 'FINISHED' && <Goals />}
      <div className='space'></div>
      {matchProps.status != 'FINISHED' && <Countdown date={matchProps.date} />}
      <div className='space'></div>
      <StadiumComponent />
      <div className='space'></div>

      <div id='oo' className=''></div>
    </div>
  );
};

export default SpecificMatchPage;
