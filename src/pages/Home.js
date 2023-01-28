/*
author: @rishisant @matthewjunt
*/

import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import smallLogo from '../img/mmlogo_1.png';
import largeLogo from '../img/mmlogo_2.png';

import '../BaseStyle.css';


const Home = () => {
    return (
        <div>
            <body>
                <div className="logoContainer">
                    <img id="sLogo" src={smallLogo} alt="small logo" className="smallLogo" />
                </div>
            </body>
        </div>
    );
}

export default Home;