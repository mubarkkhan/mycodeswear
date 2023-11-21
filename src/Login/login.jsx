import React from "react";
import loginimg from "../Image/codeswearcircle.png"
import { Header } from "../Header/header";

function Login(){
    return(
        <>
        <Header/>
        <div className="login">
            <div className="img">
                <img src={loginimg} alt="logo" />
                <h2>Enter your phone number to continue</h2>
            </div>
            <div className="number">
                <input type="tel" id="phone" minLength="5" maxLength="320" pattern="[0-9]{10}" required autoComplete="phone" placeholder="Enter your 10 digit phone number"/>
            </div>
            <div className="button">
                <button>Sign in</button>
            </div>
        </div>
        </>
    )
}
export{Login}