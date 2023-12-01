import React, { useEffect, useRef, useState } from "react";

function Pin(){
    const [search,setsearch]=useState("")
    const remove = useRef("")
    const del=()=>{
        setsearch(remove.current.focus())
    }
    const[pinn,setpinn]=useState("")
    const [pincode,setpincode]=useState([])

   async function pinapi(){
    const pindata = await fetch(`https://api.postalpincode.in/pincode/${pinn}`)
    const updateapi = await pindata.json()
    setpincode(updateapi)
    }

    useEffect(()=>{
        pinapi()
    },[pincode])

    const changepin=(e)=>{
        setpinn(e.target.value)
    }
    
    return(
        <>
        <div className="pin">
        <input  onChange={changepin} type="text"/>
        <br />
        <label>Enter your pincode</label>
        </div>
        <input onClick={del} type="text" ref={remove} placeholder="search" value={search}/>
        <div className="pin">
            {
              pincode.map((data)=>{
                    return(
                        <>
                        {data.Status == "Success" ? 
                        <>
                        <h1>{data.Message}</h1>
                        <input type="text" value={data.PostOffice[0].State}/> 
                        <input type="text" placeholder="district" value={data.PostOffice[0].District}/>
                        <select>
                        {
                          data.PostOffice
                            .map((newdata)=>{
                                return(
                                    <>
                                            <optgroup>
                                            <option>{newdata.Name}</option>                    
                                            </optgroup>
                                    </>
                                )
                            })
                        }
                        </select>
                        </>
                        :<> sorry</>
                        }
                        
                 
                        </>
                    )
                })
            }
        </div>
        </>
    )
}
export{Pin}