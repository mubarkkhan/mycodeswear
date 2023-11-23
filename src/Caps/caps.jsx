import React from "react";
import { Filter } from "./filter";
import { Header } from "../Header/header";
import { Footer } from "../Footer/footer";
import { Capscollection } from "./caps-collection";

function Caps(){
    return(
        <>
        <Header/>
        <div className="flex">
        <Filter/>
        <Capscollection/>
        </div>
        <Footer/>
        </>
    )
}
export{Caps}