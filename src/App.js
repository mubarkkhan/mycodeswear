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
import { Filterdata } from "./Caps/filterdata";
import { Cart } from "./Cart/cart";
import { User } from "./Login/useraccount";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from "react-use-cart";
import { Paymentmethod } from "./Payment/payment-method";

function Codes(){
  return(
    <>
    <CartProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/footer" element={<Footer/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/whatsapp" element={<Whatsapp/>}/>
      <Route path="/caps" element={<Caps/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/user" element={<User/>}/>
      <Route path="/payment-method" element={<Paymentmethod/>}/>
      <Route path="caps/Detail/:ProductId" element={<Detail/>}/>
      <Route path="/filterdata" element={<Filterdata/>}/>
    </Routes>
    </BrowserRouter>
    </CartProvider>
    <ToastContainer style={{top:"10px"}}/>
    </>
  )
}
export{Codes}