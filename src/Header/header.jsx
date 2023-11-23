import React, { useState } from "react";
import logoimg from "../Image/logo (1).png"
import { CiSearch } from "react-icons/ci";
import { navbardata } from "../Data/data";
import { IoCartOutline } from "react-icons/io5";
import { BsMoonStars } from "react-icons/bs";
import { GiCrossMark } from "react-icons/gi";
import { IoMenuOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Header(){

    const [moon,setmoon]=useState(false)
    const [toggle,settoggle]=useState(false)
    const click1=()=>{
        settoggle(true)
    }
    const click2=()=>{
        settoggle(false)
    }
    const Moon1=()=>{
        setmoon(true)
    }
    const Moon2=()=>{
        setmoon(false)
    }
    return(
        <>
        <div className="Header">
            <div className="t1">
                        <button onClick={click1} className={`${(toggle === true) ? "op1" : "cl1"}`}><IoMenuOutline /></button>
                    </div>
            <div className="first">
            <div className="img">
            <NavLink excat activeClassName="active" to="/"><img src={logoimg} alt="logo" /></NavLink>
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
                            <li><NavLink excat activeClassName="active" to={data.path}>{data.name}</NavLink></li>
                            </div>
                            </>
                        )
                    })
                }
            </div>
            </div>
            <div className="icon-list">
                <span><IoCartOutline /></span>
                <button><NavLink excat activeClassName="active" to="/login">Login</NavLink></button>
                <div className={`${(moon === true) ? "mopen" : "mclose"}`}>
                <button onClick={Moon1} className={`${(moon === true) ? "on1" : "off1"}`}><BsMoonStars /></button>
                </div>
                <button onClick={Moon2} className={`${(moon === false) ? "on2" : "off2"}`}><BsMoonStars /></button>
            </div>
            </div>
        </div>
        </>
    )
}
export{Header}