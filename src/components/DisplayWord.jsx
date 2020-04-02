import React, { useState, useEffect } from 'react'

const DisplayWord = () => {    
    const [currentWord, setCurrentWord] = useState(null);
    const [userInput, setUserInput] = useState('');

    useEffect(() => {
        console.log('fetching data')
        fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(data => setCurrentWord(data.results[0].gender))
            .catch(err => console.log(err));
    }, []);
    
    const handleUserInput = event => {
        setUserInput(event.target.value);
    };
            
    const compareText = event => {
        let characterSpanArray = document.querySelectorAll('span') 
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
                {currentWord && currentWord.split('').map((character, index) => {
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