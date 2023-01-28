/*
author: @rishisant
*/

import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import smallLogo from '../img/mmlogo_1.png';
import largeLogo from '../img/mmlogo_2.png';
import { tpBarStyle } from './Home';
import { menuItemStyle } from './Home';

import '../BaseStyle.css';

// Elements will be vertically displayed
const sideBarStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ececec',
    // height is complete height of screen
    height: '100vh',
    width: '10%',
    border: '1px solid black',
    borderRadius: '20px',
}

const Test = () => {
    const navigate = useNavigate();
    return (
        <div>
            <body>
                <div className="sideBar" style={sideBarStyle}>
                    <img src={largeLogo} alt="large logo" className="largeLogo" />
                    <div id="sidebar1" className="menuButton">
                        Hi
                    </div>
                    <div id="sidebar2" className="menuButton">
                        Hi
                    </div>
                </div>
            </body>
        </div>
    );
}
export default Test;
