import { useState } from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Standingsbutton.css'


const StandingsTitleAndButtons = ({showGroups}) => {
  const [changeColor, setChangeColor] =useState(false)
  const [changeColor2, setChangeColor2] =useState(false)


  const handleClick = () => {
    showGroups(true)
      setChangeColor(false)
      setChangeColor2(true)

  }

  const handleClick2 = () => {
    showGroups(false)
    setChangeColor2(false)
    setChangeColor(true)

}



  return (

    <div> 
      
        <div className='homepage-header'>
          <h2 className="Stitle">Standings</h2>
        </div>
          <div className='horizontal-flex'>
          <img src="src\assets\divider.png" alt="" width="90%" />
        </div>
          <div className='homepage-match-cards'>
        </div>

        <div className="container">
          <button
          id="btn1"
          onClick={handleClick}
          className={`${(changeColor === true)? 'red shape' : '  green shape'}`}  >
            Group stage</button>
            <button
            id="bt2"
          onClick={handleClick2}
          className={`${(changeColor === true)? 'green shape' : ' red shape '}`}  >
            Knowckout Stage</button>
        </div>
        
    </div>
  )
}

export default StandingsTitleAndButtons
