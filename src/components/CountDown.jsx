import React, { useState, useEffect } from 'react';

const CountDown = () => {
    const [timer, setTimer] = useState(30);
    const [startTimer, setStartTimer] = useState(false)

   useEffect(() => {
       console.log(timer)
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
                    setTimer(30);
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
         </div>
    );
};

export default CountDown;