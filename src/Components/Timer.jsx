import { useState, useRef, useEffect } from 'react';
import './Timer.css'
import React from 'react'

function Timer() {
    const [timer, setTimer] = useState(0);
    let timerId=useRef(null);
    // useEffect(()=>{
    //     var h2Ref = document.getElementById('timerid');
    //     if (timer ===0){
    //         h2Ref.innerText = `Timer value is $(timer)`;
    //     } else {
    //         h2Ref.innerText = `Timer started and value is $(timer)`;
    //     }
    // });

    const startTimer = ()=>{
       
        timerId.current = setInterval(()=>{
            setTimer((prevTimer)=>prevTimer + 1);
        }, 1000)
    }

    const stopTimer = ()=>{
        clearInterval(timerId.current)

    }


  return (
    <div className='mainDiv'>
        <h2 id="timer">Timer value is {timer}</h2>
        <button onClick={startTimer} >Start</button>
        <button onClick={stopTimer} >Stop</button>
    </div>
  )
}

export default Timer;