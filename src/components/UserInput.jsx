import React, { useState, useEffect, useRef } from 'react';

const UserInput = ({ reRender, setReRender, timerCallback, scoreCallback, correctCallback}) => {
    const [text, setText] = useState('');
    const [correct, setCorrect] = useState(0);
    const inputRef = useRef(null);

    // focuses on input field and clear's text when games over 
    useEffect(() => {
        if(timerCallback < 30){
            inputRef.current.focus();
        }
        if (timerCallback === 0 || timerCallback === -1){
            setText('');
        };
    }, [timerCallback]);

    // updates parent state with child state
    useEffect(() => {
        scoreCallback(correct);
    }, [correct]);

    // keeps child state in sync whith parent state
    useEffect(() => {
        if(correctCallback === 0){
            setCorrect(0);
        };
    }, [correctCallback]);

    // clears test word of any classNames before game starts
    useEffect(() => {
        if(timerCallback === 30){
            Array.from(document.querySelectorAll('span'))
                 .forEach(e => e.removeAttribute('class'));
        }
    }, [timerCallback]);

    // compares userinput to test word
    const compareText = event => {
        let characterSpanArray = document.querySelectorAll('span'); 
        let testWord = document.querySelector('.test-word-container').innerText;
        let userInputArray = event.target.value.split('');         
        
        characterSpanArray.forEach((characterElement, index) => {
            const userInput = userInputArray[index]        
            if(testWord === event.target.value){
               setCorrect(correct + 1);
               setReRender(!reRender);
               event.target.value = '';
            }
            else if(event.target.value == ''){
                Array.from(document.querySelectorAll('span'))
                    .forEach(e => e.removeAttribute('class'));
            }
            else if(userInput == null){
                characterElement.removeAttribute('class');
            }
            else if(userInput === characterElement.innerText){
                characterElement.classList.add('correct');
            } else {
                characterElement.classList.add('incorrect');
            }
        })
    };

    return(
        <div className='user-input-container'>
            <input 
                className='user-input'
                ref={inputRef}
                value={text} 
                onChange={e => setText(e.target.value)} 
                onInput={compareText} 
                disabled={(timerCallback < 30) ? false : true}
            />
        </div>

    )
};

export default UserInput;