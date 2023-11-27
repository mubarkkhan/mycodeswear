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
    const dropdowndata=[
        {
            id:1,
            name:"T-Shirts",
            path:"/tshirt"
        },
        {
            id:2,
            name:"Polo Tshirts",
            path:"/tshirt"
        },
        {
            id:3,
            name:"Oversized Tshirts",
            path:"/tshirt"
        }
    ]
    const [select,setselect]=useState([])
    const [search,setsearch]=useState("")
    const [moon,setmoon]=useState(false)
    const [toggle,settoggle]=useState(false)
    const selectchange=(e)=>{
        setsearch(e.target.value)
    }
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
    
    const searchclick=(search)=>{
        const searchdata = navbardata.find(finddata=>finddata.name.toLowerCase().startsWith(search))
        if(search == search){
            setselect(searchdata)
        }
        else if(search == null){
            return(
                <>
                <h1>no found data here</h1>
                </>
            )
        }
    }
    console.log(search)
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
                <input onChange={(e)=>{setsearch(e.target.value)}} value={search} type="text" placeholder="Search From Our 1000+ Deals"/>
            </div>
            <div className="searchbu">
                <button onClick={()=>{searchclick(search)}}><CiSearch /></button>
            </div>
            </div>
            </div>
            <div className="second">
                <div className={`${(toggle === true) ? "open" : "close"}`}>
                    <div className="t2">
                        <button onClick={click2} className={`${(toggle === false) ? "op2" : "cl2"}`}><GiCrossMark /></button>
                    </div>
            <div className="dropdown-list">
                <select onChange={selectchange}>
                    <optgroup>
                        {
                            dropdowndata.map((data)=>{
                                return(
                                    <>
                                    <option id={data.id}>{data.name}</option>
                                    </>
                                )
                            })
                        }
                    </optgroup>
                </select>
            </div>
            <div className="navbar">
                {
                    navbardata.filter((data)=>{
                        if(data == ""){
                            return data
                        }
                        else if(data.name.toLowerCase().includes(search.toLowerCase()))
                        {
                            return data
                        }
                    })
                    .map((data)=>{
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