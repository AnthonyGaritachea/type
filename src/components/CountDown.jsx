import React, { useState, useEffect } from 'react';
import { Line } from 'rc-progress';

import ResultsModal from './ResultsModal.jsx';

const CountDown = ({ timeCallback, correctCallback, setCorrectCallback, setDifficulty, setShowComponent, setTestWords }) => {
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
        <div className='count-down-container'>
            <h1 className='timer'>Timer: {timer}</h1>
            {(timer === 30 && <div className='dark-overlay'></div>)}
            {(timer === 30) && <button className='start-button' onClick={start}>Start</button>}
            <div className='progress-bar-container'>
                    <Line className='progress-bar' percent={timer} strokeWidth={(document.body.clientWidth <= 400) ? '4' : '1'} strokeColor='#00FF92' trailWidth='0' /> 
            </div>
            {(timer <= 0) &&
                 <ResultsModal 
                    setTimer={setTimer} 
                    correctCallback={correctCallback} 
                    setCorrectCallback={setCorrectCallback}
                    setDifficulty={setDifficulty}
                    setShowComponent={setShowComponent}
                    setTestWords={setTestWords}
                 />
            }
         </div>
    );
};

export default CountDown;