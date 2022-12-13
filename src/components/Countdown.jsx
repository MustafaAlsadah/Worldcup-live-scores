import React from 'react';
import './Countdown.css';
import Timer from 'react-countdown';

const Countdown = ({ date }) => {
  const dayRenderer = ({ days }) => {
    return <span>{days}</span>;
  };
  const hourRenderer = ({ hours }) => {
    return <span>{hours}</span>;
  };

  const minuteRenderer = ({ minutes }) => {
    return <span>{minutes}</span>;
  };
  const secondRenderer = ({ seconds }) => {
    return <span>{seconds}</span>;
  };
  return (
    <div className='container'>
      <div className='countDownBox'>
        <div className='countDownBox__number'>
          <Timer date={date} renderer={dayRenderer} />
        </div>
        <div className='countDownBox__text'>Days</div>
      </div>
      <div className='countDownBox'>
        <div className='countDownBox__number'>
          <Timer date={date} renderer={hourRenderer} />
        </div>
        <div className='countDownBox__text'>Hrs</div>
      </div>
      <div className='countDownBox'>
        <div className='countDownBox__number'>
          <Timer date={date} renderer={minuteRenderer} daysInHours={true} />
        </div>
        <div className='countDownBox__text'>Min</div>
      </div>
      <div className='countDownBox'>
        <div className='countDownBox__number'>
          <Timer date={date} renderer={secondRenderer} daysInHours={true} />
        </div>
        <div className='countDownBox__text'>Sec</div>
      </div>
    </div>
  );
};

export default Countdown;
