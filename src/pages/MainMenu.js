import React from 'react'
import ThrowButton from '../components/mainMenu/throwButton';
import ThrowHistory from '../components/mainMenu/throwHistory';
import logo from '../img/tarot_logo.png'
import './MainMenu.css'

export default function MainMenu() {
    return (
        <div className="MainMenu">
            <img className="MainMenu__Logo" src={logo} alt="Logo"></img>
            <ThrowButton className="MainMenu__BeginButton"></ThrowButton>
            <ThrowHistory></ThrowHistory>
        </div>
    )
}
