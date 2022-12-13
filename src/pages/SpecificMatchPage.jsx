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
  console.log(matchProps);

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
    </div>
  );
};

export default SpecificMatchPage;
