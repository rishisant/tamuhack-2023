/*
author: @rishisant @matthewjunt
*/

import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import smallLogo from '../img/mmlogo_1.png';
import largeLogo from '../img/mmlogo_2.png';
import { useEffect, useState } from 'react';

import '../BaseStyle.css';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKHYrPdMSFZ-o6AfWwpPEUd8NPYDMnn6k",
  authDomain: "musclemates-a7c0b.firebaseapp.com",
  projectId: "musclemates-a7c0b",
  storageBucket: "musclemates-a7c0b.appspot.com",
  messagingSenderId: "481952527135",
  appId: "1:481952527135:web:c1a7ea2c1b4555c853362a",
  measurementId: "G-L3B80R35L1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// display as flex row with values "login", "signup", "about", "profile", with logo in the side
export const tpBarStyle = {
    display: 'flex',
    flexDirection: 'row',
}

export const menuItemStyle = {
    fontSize: '2em',
    padding: '1em',
    margin: '1em',
}


const Home = () => {
    const navigate = useNavigate();

    return (
        <div>

            <body>
                <div className="topMenuBar" style={tpBarStyle}>
                    <div className="logoContainer">
                        <img src={largeLogo} alt="large logo" className="largeLogo" />
                    </div>

                    <div id="login" className="menuButton" onClick={() => navigate('/Login')}>
                        Login
                    </div>

                    <div id="signup" className="menuButton">
                        Sign Up
                    </div>

                    <div id="about" className="menuButton">
                        About
                    </div>
                </div>
                
                <div className="mainContentContainer">
                    <div className="mainContent">
                        Hello world.
                    </div>
                </div>
            </body>

        </div>
    );
}

export default Home;