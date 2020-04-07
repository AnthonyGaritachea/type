import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayWord = () => {    
    const [currentWord, setCurrentWord] = useState(null);
    const [userInput, setUserInput] = useState('');

   useEffect(() => {
       axios.get('/words')
            .then(res => {
                let data = res.data.map(({ word }) => [word].join(' '));
                setCurrentWord(data);
            })
            .catch(err => console.log(err));
   }, []);
    
    const handleUserInput = event => {
        setUserInput(event.target.value);
    };
            
    const compareText = event => {
        let characterSpanArray = document.querySelectorAll('span'); 
        const testWord = document.querySelector('.test-word').innerText;
        let userInputArray = event.target.value.split('');         
        characterSpanArray.forEach((characterElement, index) => {
            const userInput = userInputArray[index]        
            if(userInput == null){
                characterElement.style.backgroundColor = '';
            }
            else if(userInput === characterElement.innerText){
                characterElement.style.backgroundColor = 'yellow'
            } else {
                characterElement.style.backgroundColor = 'red'
            }
        })
    };
    
    return( 
        <div>
            <div className='test-word'>
                {(currentWord != null) && currentWord[Math.floor(Math.random() * currentWord.length)].split('').map((character, index) => {
                    return (
                        <span key={index}>{character}</span>
                    )
                })}
            </div>
            <input type='text' onChange={handleUserInput} onInput={compareText} value={userInput}/>
        </div>
    )
};

export default DisplayWord;