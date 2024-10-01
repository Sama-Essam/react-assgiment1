import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portofilio from "./components/Portofilio/Portofilio";
import Contact from "./components/Contact/Contact";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <Home />
      <About />
      <Portofilio />
      <Contact />
    </>
  );
}

export default App;
