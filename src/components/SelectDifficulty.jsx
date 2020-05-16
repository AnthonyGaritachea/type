import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import { gsap } from 'gsap';

import DisplayWord from './DisplayWord.jsx';
import CountDown from './CountDown.jsx';

const SelectDifficulty = () => {
    const [difficulty, setDifficulty] = useState(null);
    const [showComponent, setShowComponent] = useState(true);
    const [testWords, setTestWords] = useState(null);
    const [showSpinner, setShowSpinner] = useState(false);
    const [timerCallback, setTimerCallback] = useState(null);
    const [correctCallback, setCorrectCallback] = useState(0);

    // GSAP
    useEffect(() => {
        let tl = gsap.timeline();
        tl.from('.select-header', { opacity: 0, x: 30, duration: 1.2})
          .from('.button-container', { opacity: 0, y: 50, duration: 1, stagger: 0.5});
    }, []);

    const timeCallback = count => {
       setTimerCallback(count);
    };

    const scoreCallback = count => {
        setCorrectCallback(count);
    };

    const handleClick = event => {
        setDifficulty(event.currentTarget.value);
        switch (event.currentTarget.value) {
            case 'easy':
                axios.get(`/words/${3}/${5}`)
                    .then(res => {
                        let data = res.data.map(({ word }) => [word].join(' '));
                        setTestWords(data)
                    })
                    .catch(err => console.log(err));
                    break;
            case 'normal':
               axios.get(`/words/${6}/${9}`)
                    .then(res => {
                        let data = res.data.map(({ word }) => [word].join(' '));
                        setTestWords(data)
                    })
                    .catch(err => console.log(err));
                    break;
            case 'hard':
               axios.get(`/words/${10}/${15}`)
                    .then(res => {
                        let data = res.data.map(({ word }) => [word].join(' '));
                        setTestWords(data)
                    })
                    .catch(err => console.log(err));
                    break;
        };
        setShowSpinner(true);
    };

    return(
        <div>
            {showComponent && 
                <div className='select-difficulty'>
                    <h1 className='select-header'>Select a difficulty</h1>
                    <div className='flex-container'>
                        <div className='button-container'>
                            <button value='easy' className='difficulty-button'  onClick={handleClick}><span className='difficulty'>Easy</span><p className='difficulty-info'>retuns words with 3-5 characters</p></button>
                        </div>

                        <div className='button-container'>
                            <button className='difficulty-button' value='normal' onClick={handleClick}><span className='difficulty'>Normal</span><p className='difficulty-info'>retuns words with 6-9 characters</p></button>
                        </div>

                        <div className='button-container'>
                            <button className='difficulty-button' value='hard' onClick={handleClick}><span className='difficulty'>Hard</span><p className='difficulty-info'>retuns words with 10-15 characters</p></button>
                        </div>
                    </div>
                </div>
            }

            {showSpinner && <div className='loading-spinner'>
                                <Loader
                                    type="ThreeDots"
                                    color="#00BFFF"
                                    height={300}
                                    width={300} 
                                />
                             </div>
            }
      
        {(testWords != null) &&
            <div>
                <CountDown 
                    timeCallback={timeCallback}
                    correctCallback={correctCallback}
                    setCorrectCallback={setCorrectCallback}
                    setDifficulty={setDifficulty}
                    setShowComponent={setShowComponent}
                    setTestWords={setTestWords}
                 /> 
                <DisplayWord 
                    difficulty={difficulty} 
                    setShowComponent={setShowComponent}
                    setShowSpinner={setShowSpinner}     
                    testWords={testWords}
                    timerCallback={timerCallback}
                    scoreCallback={scoreCallback}
                    correctCallback={correctCallback}
                />
            </div>}
        </div>
    );

};

export default SelectDifficulty;