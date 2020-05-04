import React, { useState, useEffect, useMemo} from 'react';

import UserInput from './UserInput.jsx';

const DisplayWord = ({ difficulty, setShowComponent, setShowSpinner, testWords, timerCallback, scoreCallback, correctCallback }) => {    
    const [reRender, setReRender] = useState(false);

    useEffect(() => {
        if(difficulty != null){  
            setShowComponent(false) 
        }
    }, [difficulty]);

    useEffect(() => {
        if(testWords != null){
            setShowSpinner(false);
        }
    }, [testWords]);

    const randomWords = () => {
        return testWords[Math.floor(Math.random() * testWords.length)].split('').map((character, index) => {
            return (
                <span key={index}>{character}</span>
            )
        });
    };

    const randomWordsMemo = useMemo(() => randomWords(), [reRender]);

    return( 
        <div>
           <div className='test-word'>
              {randomWordsMemo}
            </div>
            <UserInput 
                reRender={reRender} 
                setReRender={setReRender} 
                timerCallback={timerCallback} 
                scoreCallback={scoreCallback}
                correctCallback={correctCallback}
             />
        </div>
    )
};

export default DisplayWord;