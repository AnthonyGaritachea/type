import React, { useState } from 'react';

const UserInput = () => {
    const [text, setText] = useState('');

    const compareText = event => {
        let characterSpanArray = document.querySelectorAll('span'); 
        let testWord = document.querySelector('.test-word').innerText;
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
        <input value={text} onChange={e => setText(e.target.value)} onInput={compareText}/>
    )
};

export default UserInput;