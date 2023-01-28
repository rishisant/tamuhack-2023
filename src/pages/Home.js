/*
author: @rishisant @matthewjunt
*/

import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import smallLogo from '../img/mmlogo_1.png';
import largeLogo from '../img/mmlogo_2.png';

import '../BaseStyle.css';

// display as flex row with values "login", "signup", "about", "profile", with logo in the side
const tpBarStyle = {
    display: 'flex',
    flexDirection: 'row',

}

const menuItemStyle = {
    fontSize: '2em',
    padding: '1em',
    margin: '1em',
}

const Home = () => {
    return (
        <div>
            <body>
                <div className="topmenuBar" style={tpBarStyle}>
                    <div className="logoContainer">
                        <img src={largeLogo} alt="large logo" className="largeLogo" />
                    </div>
                    <div className="menuButton">
                        Login
                    </div>
                    <div className="menuButton">
                        Sign Up
                    </div>
                    <div className="menuButton">
                        About
                    </div>
                </div>
                
            </body>
        </div>
    );
}

export default Home;