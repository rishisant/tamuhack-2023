/*
author: @rishisant
*/

import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import smallLogo from '../img/mmlogo_1.png';
import largeLogo from '../img/mmlogo_2.png';
import { tpBarStyle } from './Home';
import { menuItemStyle } from './Home';
import trundlePic from '../img/rendertrundle.png';

import '../BaseStyle.css';

// Elements will be vertically displayed
const sideBarStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ececec',
    height: '100vh',
    width: '10%',
    border: '1px solid black',
    borderRadius: '20px',
}

// row elem display
const mainContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    border: '1px solid black',
    borderRadius: '20px',  

}

const profileContStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    border: '1px solid black',
    borderRadius: '20px',
}

const profileInfoContStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    width: '40%',
    border: '1px solid black',
    borderRadius: '20px',
    backgroundColor: '#ececec',
}

const picContainerStyle = {
    padding: '1em',
    margin: '1em',
    border: '1px solid black',
    borderRadius: '20px',
    backgroundColor: '#ececec',
    minWidth: '200px',
    minHeight: '400px',
}

const imgStyle = {
    height: '100%', 
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
}

const Test = () => {
    const navigate = useNavigate();
    return (
        <div>
            <body>
                <div className="mainContainer" style={mainContainerStyle}>
                    <div className="sideBar" style={sideBarStyle}>
                        <img src={largeLogo} alt="large logo" className="largeLogo" />
                        <div id="sidebar1" className="menuButton">
                            Hi
                        </div>
                        <div id="sidebar2" className="menuButton">
                            Hi
                        </div>
                    </div>

                    <div className="profileContainer" style={profileContStyle}>
                        <div className="profileInfoContainer" style={profileInfoContStyle}>
                            <div className="defaultInfoContainer">
                                Santanamu
                            </div>
                            <div className="defaultInfoContainer">
                                21
                            </div>
                            <div className="picContainer" style={picContainerStyle}>
                                <img src={trundlePic} style={imgStyle}></img>
                            </div>
                        </div>
                    </div>
                </div>
                

            </body>
        </div>
    );
}
export default Test;
