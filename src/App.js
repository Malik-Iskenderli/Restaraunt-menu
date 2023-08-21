import React, { useEffect, useState } from "react";
import { Route, Routes } from 'react-router';
import "./Css/style.css";
import Home from "./pages/homre"
import Morning from "./Router/Morning";
import Businesslunch from "./Router/Businesslunch";
import Lunch from "./Router/Lunch";
import Evening from "./Router/Evening";
import Night from "./Router/Night";
import Sorba from "./Router/OurMenu/Sorba";
import Salat from "./Router/OurMenu/Salat";
import Lahmacun from "./Router/OurMenu/Lahmacun";
import Pide from "./Router/OurMenu/Pide";
import IstiYemekler from "./Router/OurMenu/IstiYemekler";
import Qarnirler from "./Router/OurMenu/Qarnirler";
import Ickiler from "./Router/OurMenu/Ickiler";

function App() {

  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/morning" element={<Morning/>} />
        <Route path="/businesslunch" element={<Businesslunch />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/evening" element={<Evening />} />
        <Route path="/night" element={<Night />} />

        {/* our menu Routes */}


        <Route path="/sorba" element={<Sorba/>}/>
        <Route path="/salat" element={<Salat/>}/>
        <Route path="/lahmacun" element={<Lahmacun/>}/>
        <Route path="/pide" element={<Pide/>}/>
        <Route path="/isti-yemekler" element={<IstiYemekler/>}/>
        <Route path="/qarnir" element={<Qarnirler/>}/>
        <Route path="/icki" element={<Ickiler/>}/>
      </Routes>
    
  );
}

export default App;
