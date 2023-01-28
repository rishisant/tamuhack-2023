/*
author: @rishisant @matthewjunt
*/

import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import smallLogo from '../img/mmlogo_1.png';
import largeLogo from '../img/mmlogo_2.png';

import '../BaseStyle.css';

// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/auth';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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


function handleGoogleSignIn() {

    console.log("Google sign in button clicked");
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then(result => {
        // The signed-in user info.
        const user = result.user;
        // navigate to the home page or show a success message
        })
        .catch(error => {
        console.error(error.message);
        // show an error message
        });
}


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
    return (
        <div>
            <body>
                <div className="topMenuBar" style={tpBarStyle}>
                    <div className="logoContainer">
                        <img src={largeLogo} alt="large logo" className="largeLogo" />
                    </div>
                    <div id="login" className="menuButton" onClick={handleGoogleSignIn}>
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
                        Hello worlds.
                    </div>
                </div>
            </body>
        </div>
    );
}


export default Home;