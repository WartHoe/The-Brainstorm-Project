import TimerField from '../components/TimerField'
import React from 'react'


function Main(props){
    return(
        <div style={props.isStarted ? {display : 'none'} : {display : ''}} className="content d-block">
            <h2>Choose the amount of time here:</h2>
            <TimerField/>
            <div className="contentStart">
                <h3>And press this button when you'll be ready :)</h3>
                {/* <button onClick={props.onClickStartButton} className="buttonStart d-flex justify-center align-center cu-p">
                    <div><p>Start</p></div>
                </button> */}
            </div>
        </div>
    )
}

export default Main