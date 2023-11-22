import React, { useState } from "react";
import logoimg from "../Image/logo (1).png"
import { CiSearch } from "react-icons/ci";
import { navbardata } from "../Data/data";
import { IoCartOutline } from "react-icons/io5";
import { BsMoonStars } from "react-icons/bs";
import { GiCrossMark } from "react-icons/gi";
import { IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Header(){

    const [toggle,settoggle]=useState(false)
    const click1=()=>{
        settoggle(true)
    }
    const click2=()=>{
        settoggle(false)
    }
    return(
        <>
        <div className="Header">
            <div className="t1">
                        <button onClick={click1} className={`${(toggle === true) ? "op1" : "cl1"}`}><IoMenuOutline /></button>
                    </div>
            <div className="first">
            <div className="img">
            <Link to="/"><img src={logoimg} alt="logo" /></Link>
            </div>
            <div className="search-sys">
            <div className="input">
                <input type="text" placeholder="Search From Our 1000+ Deals"/>
            </div>
            <div className="searchbu">
                <button><CiSearch /></button>
            </div>
            </div>
            </div>
            <div className="second">
                <div className={`${(toggle === true) ? "open" : "close"}`}>
                    <div className="t2">
                        <button onClick={click2} className={`${(toggle === false) ? "op2" : "cl2"}`}><GiCrossMark /></button>
                    </div>
            <div className="dropdown-list">
                <select>
                    <optgroup>
                    <option>
                    T-Shirts
                    </option>
                    <option>
                        Polo Tshirts
                    </option>
                    <option>
                       Oversized Tshirts
                    </option>
                    </optgroup>
                </select>
            </div>
            <div className="navbar">
                {
                    navbardata.map((data)=>{
                        return(
                            <>
                            <div className="menu" id={data.id}>
                            <li><Link to={data.path}>{data.name}</Link></li>
                            </div>
                            </>
                        )
                    })
                }
            </div>
            </div>
            <div className="icon-list">
                <span><IoCartOutline /></span>
                <button><Link to="/login">Login</Link></button>
                <span><BsMoonStars /></span>
            </div>
            </div>
        </div>
        </>
    )
}
export{Header}