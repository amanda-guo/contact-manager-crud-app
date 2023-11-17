import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import AddContact from './components/AddContact';

function App() {

  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/addcontact" element={<AddContact />} />
      </Routes>
    </BrowserRouter>
   </>
  ) 
}

export default App;
