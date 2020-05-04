import React, { useState, useEffect } from 'react';
import { Line } from 'rc-progress';

import ResultsModal from './ResultsModal.jsx';

const CountDown = ({ timeCallback, correctCallback, setCorrectCallback }) => {
    const [timer, setTimer] = useState(30);
    const [startTimer, setStartTimer] = useState(false)

   useEffect(() => {
    timeCallback(timer)
   }, [timer]);

    // countdown to start
    const start = () => {
        let count = 3;
        let start = setInterval(() => {
            document.querySelector('button').innerText = count;
            count = count - 1;
            if(count <= 0){
                clearInterval(start)
                setStartTimer(true);
            }
        }, 1000);
    };

    // countdown for game
    useEffect(() => {
        let interval = null;
        if(startTimer){
            interval = setInterval(() => {
                setTimer(timer => timer - 1);
                if(timer <= 0){
                    setTimer(0);
                    setStartTimer(false);
                };
            }, 1000);
        }else {
            clearInterval(interval)
        }
        return () => clearInterval(interval);
    }, [timer, startTimer]);

    return(
        <div>
            <h1>Timer: {timer}</h1>
            {(timer === 30) && <button onClick={start}>Start</button>}
            <Line percent={timer} strokeWidth='1' strokeColor='#6da4fc' trailColor='#FFFFFF' /> 
            {(timer <= 0) &&
                 <ResultsModal 
                    setTimer={setTimer} 
                    correctCallback={correctCallback} 
                    setCorrectCallback={setCorrectCallback}
                 />
            }
         </div>
    );
};

export default CountDown;