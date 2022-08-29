import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar";

import About from "./pages/about";
import Contact from "./pages/contact";
import Gallery from "./pages/gallery";

import { useState } from "react";


const App = () => {
  return (

    <div className="App">
      <div>
      <BrowserRouter>
      <Navbar />
        <h1>My React Project</h1>
        <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
        </BrowserRouter>
      </div>
    </div>
    );

};
export default App;