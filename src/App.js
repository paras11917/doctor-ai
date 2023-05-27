import React, { useState } from "react";
import "./App.css";
// import results from './components/results';
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Diagnose from "./components/DiagnoseHome";
import DiagnoseBody from "./components/DiagnoseBody";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diagnose" element={<Diagnose />} />
          <Route path="/report" element={<DiagnoseBody />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
