import React, { useState, useEffect } from 'react';
import axios from 'axios';

import DisplayWord from './DisplayWord.jsx';

const SelectDifficulty = () => {
    const [difficulty, setDifficulty] = useState(null);
    const [showComponent, setShowComponent] = useState(true);
    const [testWords, setTestWords] = useState(null);

    useEffect(() => {
        console.log(difficulty);
    }, [difficulty])

    const handleClick = event => {
        setDifficulty(event.target.value);
        switch (event.target.value) {
            case 'easy':
               return axios.get(`/words/${3}/${5}`)
                    .then(res => {
                        let data = res.data.map(({ word }) => [word].join(' '));
                        setTestWords(data)
                    })
                    .catch(err => console.log(err));
            case 'normal':
               return axios.get(`/words/${6}/${9}`)
                    .then(res => {
                        let data = res.data.map(({ word }) => [word].join(' '));
                        setTestWords(data)
                    })
                    .catch(err => console.log(err));
            case 'hard':
               return axios.get(`/words/${10}/${15}`)
                    .then(res => {
                        let data = res.data.map(({ word }) => [word].join(' '));
                        setTestWords(data)
                    })
                    .catch(err => console.log(err));
        }
    };

    return(
        <div>
            {showComponent && 
                <div className='select-difficulty'>
                    <h1>Select a difficulty</h1>
                        <div>
                            <button value='easy' onClick={handleClick}>Easy</button>
                            <label style={{display: 'block'}}>returns words with 3-5 characters in length</label>
                        </div>

                        <div>
                            <button value='normal' onClick={handleClick}>Normal</button>
                            <label style={{display: 'block'}}>returns words with 6-9 characters in length</label>
                        </div>

                        <div>
                            <button value='hard' onClick={handleClick}>Hard</button>
                            <label style={{display: 'block'}}>returns words with 10-15 characters in length</label>
                        </div>
                </div>
            }
      
        {(testWords != null) && 
            <DisplayWord 
                difficulty={difficulty} 
                setShowComponent={setShowComponent}     
                testWords={testWords}
            />}
        </div>
    );

};

export default SelectDifficulty;