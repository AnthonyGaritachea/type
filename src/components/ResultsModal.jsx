import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ResultsModal = ( { setTimer, correctCallback, setCorrectCallback, setDifficulty, setShowComponent, setTestWords }) => {
    const [isOpen, setIsOpen] = useState(true);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setTimer(30);
        setCorrectCallback(0);
    };

    const changeDifficulty = () => {
        setDifficulty(null);
        setShowComponent(true);
        setTestWords(null);
    };

    return(
        <div>
            <Modal
                className='modal'
                overlayClassName='overlay'
                isOpen={isOpen}
                onRequestClose={closeModal}
            >
            <div className='results-container'>
                <h1>Game Over!!!</h1>
                <h1 className='game-score'>Score: {correctCallback}</h1>
                <div className='results-button-container'>
                    <div className='modal-button-container'>
                        <button className='modal-button' onClick={closeModal}>retry</button>
                    </div>
                    <div className='modal-button-container'>
                        <button className='modal-button'onClick={changeDifficulty}>change difficulty</button>
                    </div>
                </div>
            </div>
            </Modal>
        </div>
    )
};

export default ResultsModal;