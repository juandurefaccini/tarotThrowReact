import React, { useState } from 'react';
import Modal from './Modal'
import { Link } from 'react-router-dom'

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
                <Link to='/results'>
                    <button>I feel lucky!</button>
                </Link>
            </Modal>
        </>
    );
}

export default ThrowButton;
