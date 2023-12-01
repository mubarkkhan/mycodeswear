import React, { useState } from "react";
import loginimg from "../Image/codeswearcircle.png"
import { Header } from "../Header/header";
import { Pin } from "../.pin";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
  import 'react-toastify/dist/ReactToastify.css';

function Login(){
    const usenavi = useNavigate()
    const [lengthh,setlength]=useState()
    const lengthchange=(e)=>{
        setlength(e.target.value)
    }
    const clickchange=(e)=>{
        e.preventDefault()
        if(lengthh.length >= 10){
            setTimeout(()=>{
                toast.success("Otp sent successfully")
                usenavi("/user",{state:{lengthh:lengthh}})
            })
        }
        else{
        toast.error("user not found")
        }
    }
    return(
        <>
        <Header/>
        <div className="login">
            <div className="img">
                <img src={loginimg} alt="logo" />
                <h2>Enter your phone number to continue</h2>
            </div>
            <div className="number">
                <input value={lengthh} onChange={lengthchange} type="number" id="phone" maxLength={lengthh} pattern="[0-9]{10}" required autoComplete="phone" placeholder="Enter your 10 digit phone number"/>
            </div>
            <div className="button">
                <button onClick={clickchange}>Sign in</button>
            </div>
        </div>
        <Pin/>
        </>
    )
}
export{Login}