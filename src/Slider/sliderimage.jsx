import React from "react";

function Sliderimage(props){
    return(
        <>
        <div className="sliderimg">
            <img src={props.img} alt="" />
            <button>{props.button}</button>
        </div>
        </>
    )
}
export{Sliderimage}