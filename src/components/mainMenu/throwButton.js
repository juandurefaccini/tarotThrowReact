import React, { useState } from 'react';
import Modal from './Modal'

function ThrowButton() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <button onClick={() => setIsOpen(true)}>Begin!</button>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <span>Player 1</span>
                <input type="text" />
                <span>Player 2</span>
                <input type="text" />
                <button>I feel lucky!</button>
            </Modal>
        </>
    );
}

export default ThrowButton;
