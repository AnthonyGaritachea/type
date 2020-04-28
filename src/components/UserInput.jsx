import React, { useState, useEffect } from 'react';

const UserInput = ({ reRender, setReRender, timerCallback}) => {
    const [text, setText] = useState('');
    const [correct, setCorrect] = useState(0);

    const compareText = event => {
        let characterSpanArray = document.querySelectorAll('span'); 
        let testWord = document.querySelector('.test-word').innerText;
        let userInputArray = event.target.value.split('');         
        
        characterSpanArray.forEach((characterElement, index) => {
            const userInput = userInputArray[index]        
            if(testWord === event.target.value){
               setCorrect(correct + 1); 
               setReRender(!reRender);
               event.target.value = '';
            }
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
            <input value={text} onChange={e => setText(e.target.value)} onInput={compareText} />
        </div>
    )
};

export default UserInput;