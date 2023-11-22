import React from "react";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home} from "./Home/home";
import { Footer } from "./Footer/footer";
import { Login } from "./Login/login";
import { Whatsapp } from "./Whatsapp/whatsapp-link";

function Codes(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/footer" element={<Footer/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/whatsapp" element={<Whatsapp/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export{Codes}