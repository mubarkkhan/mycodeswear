import React from "react";
import { useParams } from "react-router-dom";
import { capscollectioncarddata } from "../Data/data";
import { Header } from "../Header/header";

function Detail(){
    
    const { ProductId } = useParams()
    const detaildata = capscollectioncarddata.find(item => item.id === ProductId)
    return(
        <>
        <Header/>
        </>
    )
}
export{Detail}