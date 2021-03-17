import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css';

export default function Modal({ open, children, onClose }) {
    if (!open) return null
    return ReactDOM.createPortal(
        <>
            <div className='Modal__background' onClick={onClose} />
            <div className='Modal'>
                <button className='Modal__closeButton' onClick={onClose}>X</button>
                <div>
                    {children}
                </div>

            </div>
        </>,
        document.getElementById('portal')
    )
}
