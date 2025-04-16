import {  } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

import Navbar from "./components/Navbar";

function App() {

  return (
    <div>
      <h1>context</h1>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App
