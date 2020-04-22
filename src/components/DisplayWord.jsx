import React, { useState, useEffect} from 'react';

import UserInput from './UserInput.jsx'

const DisplayWord = ({ difficulty, setShowComponent, setShowSpinner, testWords }) => {    
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

    return( 
        <div>
           <div className='test-word'>
                {(testWords != null) && testWords[Math.floor(Math.random() * testWords.length)].split('').map((character, index) => {
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