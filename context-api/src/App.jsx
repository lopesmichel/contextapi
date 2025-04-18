import {  } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";

function App() {

  return (
    <div>
      <h1>context</h1>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
