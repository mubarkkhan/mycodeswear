import React from "react";
import { Header } from "../Header/header";
import { Footer } from "../Footer/footer";
import { Whatsapp } from "../Whatsapp/whatsapp-link";
import UncontrolledExample from "../Slider/bootstrap-slider";
import { Collections } from "../screencomponentes/collections";
import { Theme } from "../screencomponentes/theme";
import { Cards } from "../screencomponentes/cards";
import { Bestselling } from "../screencomponentes/bestselling";

function Home(){
    return(
        <>
        <Header/>
        <Whatsapp/>
        <UncontrolledExample/>
        <Collections/>
        <Theme/>
        <Bestselling/>
        <Cards/>
        <Footer/>
        </>
    )
}
export{Home}