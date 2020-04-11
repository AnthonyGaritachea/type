import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayWord = () => {    
    const [currentWord, setCurrentWord] = useState(null);

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
        </div>
    )
};

export default DisplayWord;