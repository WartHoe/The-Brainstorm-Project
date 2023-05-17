import React, { useState, useEffect, useRef } from 'react';

function Timer(props) {
    const [seconds, setSeconds] = useState(props.duration);
    const intervalRef = useRef(null);
  
    useEffect(() => {
      return () => clearInterval(intervalRef.current);
    }, []);
  
    function startTimer() {
      intervalRef.current = setInterval(() => {
        props.onClickStartButton()
        setSeconds(seconds => {
          if (seconds > 0) {
            return seconds - 1;
          } else {
            props.onClickStopButton();
            clearInterval(intervalRef.current);
            return 0;
          }
        });
      }, 1000);
    }

  return (
    <div>
      {seconds > 0 ? (<h1>Timer: {seconds}</h1>) : (<div></div>)}
        <button style={props.isStarted ? {display : 'none'} : {display : ''}} onClick={startTimer} className="buttonStart d-flex justify-center align-center cu-p">
            <div><p>Start</p></div>
        </button>
    </div>
  );
}

export default Timer;
