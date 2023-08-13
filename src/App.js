import React from "react";
import "./Css/style.css";
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Menu from "./Components/Menu"
import Product from "./Components/Product";
import Contact from "./Components/Contact";




function App() {
  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Menu/>
     <Product/>
     <Contact/>

    </>
  );
}

export default App;
