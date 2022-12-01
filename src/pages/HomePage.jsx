import { useState } from 'react'
import Navbar from '../components/Navbar'
import "./uniformBackground.css";
import "./homepageStyle.css";
import MatchCard from '../components/MatchCard';

function HomePage() {
  return (
    <div className="homepage-container">
      <Navbar/>
        <div className='homepage-header'>
          <h2>Matches Schedule</h2>
          <input type="date" />
        </div>
        <div className='horizontal-flex'>
          <img src="src\assets\divider.png" alt="" width="90%" />
        </div>
        <div className='homepage-match-cards'>
          <img src="src\assets\matchCardLine.png" alt="" />
          <MatchCard/>
        </div>
    </div>
  )
}

export default HomePage
