import React, { useState, useEffect } from 'react';

import DisplayWord from './DisplayWord.jsx';

const SelectDifficulty = () => {
    const [difficulty, setDifficulty] = useState(null);
    const [showComponent, setShowComponent] = useState(true);

    const handleClick = (event) => {
        setDifficulty(event.target.value);
    };

    return(
        <div>
            {showComponent && 
                <div className='select-difficulty'>
                    <h1>Select a difficulty</h1>
                        <div>
                            <button value='easy' onClick={handleClick}>Easy</button>
                            <label style={{display: 'block'}}>returns words with 3-5 characters in length</label>
                        </div>

                        <div>
                            <button value='normal' onClick={handleClick}>Normal</button>
                            <label style={{display: 'block'}}>returns words with 6-9 characters in length</label>
                        </div>

                        <div>
                            <button value='hard' onClick={handleClick}>Hard</button>
                            <label style={{display: 'block'}}>returns words with 10-15 characters in length</label>
                        </div>
                </div>
            }
      
            <DisplayWord difficulty={difficulty} setShowComponent={setShowComponent}/>
        </div>
    );

};

export default SelectDifficulty;