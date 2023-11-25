import React from "react";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home} from "./Home/home";
import { Footer } from "./Footer/footer";
import { Login } from "./Login/login";
import { Whatsapp } from "./Whatsapp/whatsapp-link";
import { Caps } from "./Caps/caps";
import { Detail } from "./Caps/productdetail";

function Codes(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/footer" element={<Footer/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/whatsapp" element={<Whatsapp/>}/>
      <Route path="/caps" element={<Caps/>}/>
      <Route path="/detail/:ProductId" element={<Detail/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export{Codes}