import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import SingleServices from "./components/Pages/SingleServices";
import About from "./components/Pages/About";
import Services from "./components/Pages/Services";
import Contact from "./components/Pages/Contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/services" element={<Services/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/services/:id" element={<SingleServices/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
