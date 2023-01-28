import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Test from "./pages/Test";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Test" element={<Test />} />
          <Route exact path="/Login" element={<Login />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
