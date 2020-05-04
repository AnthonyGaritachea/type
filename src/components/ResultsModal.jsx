import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ResultsModal = ( { setTimer, correctCallback, setCorrectCallback }) => {
    const [isOpen, setIsOpen] = useState(true);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setTimer(30);
        setCorrectCallback(0);
    };

    return(
        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
            >
            <h1>Game Over!!!</h1>
            <h1>Your Score: {correctCallback}</h1>
            </Modal>
        </div>
    )
};

export default ResultsModal;