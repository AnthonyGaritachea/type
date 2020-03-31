import React, { useState, useEffect } from 'react'

const DisplayWord = () => {
    
    const [currentWord, setCurrentWord] = useState([]);
    const [userInput, setUserInput] = useState('');

    
    useEffect(() => {
        const mockData = ['cat', 'sat', 'mat'];
        console.log('setting state with text');
        setCurrentWord(mockData);
    }, []);
    
    const handleUserInput = event => {
        setUserInput(event.target.value);
    };
    
    const randomWord = currentWord[Math.floor(Math.random() * currentWord.length)]; 
    console.log(randomWord)

    return( 
        <div>
            <div>
                {randomWord && randomWord.split('').map(character => {
                    return (
                        <span key={character}>{character}</span>
                    )
                })}
            </div>
            <input type='text' onChange={handleUserInput} value={userInput}/>
        </div>
    )
};

export default DisplayWord;