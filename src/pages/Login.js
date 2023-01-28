// /*
// author: @rishisant @matthewjunt
// */

// import React, { Component } from 'react';
// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
// import smallLogo from '../img/mmlogo_1.png';
// import largeLogo from '../img/mmlogo_2.png';
// import { tpBarStyle } from './Home';
// import { menuItemStyle } from './Home';

// import '../BaseStyle.css';

// // const tpBarStyle = {
// //     display: 'flex',
// //     flexDirection: 'row',
// // }

// // const menuItemStyle = {
// //     fontSize: '2em',
// //     padding: '1em',
// //     margin: '1em',
// // }

// const Login = () => {
//     const navigate = useNavigate();

//     return (
//         <div>

//             <body>
//                 <div className="topMenuBar" style={tpBarStyle}>
//                     <div className="logoContainer">
//                         <img src={largeLogo} alt="large logo" className="largeLogo" />
//                     </div>

//                     <div id="login" className="menuButton" onClick={() => navigate('/Login')}>
//                         Login
//                     </div>

//                     <div id="signup" className="menuButton">
//                         Sign Up
//                     </div>
                    
//                     <div id="about" className="menuButton">
//                         About
//                     </div>
//                 </div>
                
//                 <div className="mainContentContainer">
//                     <div className="mainContent">
//                         Hello world.
//                     </div>
//                 </div>
//             </body>

//         </div>
//     );
// }

// export default Login;
