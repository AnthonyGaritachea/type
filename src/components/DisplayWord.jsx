import React, { useState, useEffect} from 'react';
import axios from 'axios';

import UserInput from './UserInput.jsx'

const DisplayWord = ({ difficulty, setShowComponent }) => {    
    const [currentWord, setCurrentWord] = useState(null);
    const [reRender, setReRender] = useState(false);

    useEffect(() => {
        if(difficulty != null){  
            setShowComponent(false) 
        }
    }, [difficulty])

   useEffect(() => {
       axios.get('/words')
            .then(res => {
                let data = res.data.map(({ word }) => [word].join(' '));
                setCurrentWord(data);
            })
            .catch(err => console.log(err));
   }, []);

    return( 
        <div>
           <div className='test-word'>
                {(currentWord != null) && currentWord[Math.floor(Math.random() * currentWord.length)].split('').map((character, index) => {
                    return (
                        <span key={index}>{character}</span>
                    )
                })}
            </div>
            <UserInput reRender={reRender} setReRender={setReRender} />
        </div>
    )
};

export default DisplayWord;