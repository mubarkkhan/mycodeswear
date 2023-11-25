import React from "react";
import bestimg1 from "../Image/0 (1).webp"
import bestimg2 from "../Image/0 (2).webp"
import bestimg3 from "../Image/0 (3).webp"
import bestimg4 from "../Image/0 (4).webp"
import { FaRupeeSign } from "react-icons/fa";
import bestimg5 from "../Image/0 (5).webp"
import bestimg11 from "../Image/1 (1).webp"
import bestimg12 from "../Image/1 (1) (1).webp"
import bestimg13 from "../Image/1 (2).webp"
import bestimg14 from "../Image/1 (3).webp"
import bestimg15 from "../Image/1 (4).webp"

function Bestselling(){
    const bestdata =[
        {
            id:1,
            img:`${bestimg1}`,
            name:"TSHIRT",
            detail:"Marvel Tshirt",
            ricon:<FaRupeeSign />,
            Number:"699",
            number2:"549",
            img1:`${bestimg11}`
        },
        {
            id:2,
            img:`${bestimg2}`,
            name:"TSHIRT",
            detail:"Naruto Tshirt",
            ricon:<FaRupeeSign />,
            Number:"699",
            number2:"549",
            img1:`${bestimg12}`
        },
        {
            id:3,
            img:`${bestimg3}`,
            name:"TSHIRT",
            detail:"Wings of freedom...",
            ricon:<FaRupeeSign />,
            Number:"699",
            number2:"549",
            img1:`${bestimg13}`
        },
        {
            id:4,
            img:`${bestimg4}`,
            name:"HOODIE",
            detail:"Pack of three pl",
            ricon:<FaRupeeSign />,
            Number:"949",
            number2:"799",
            img1:`${bestimg14}`
        },
        {
            id:5,
            img:`${bestimg5}`,
            name:"TSHIRT",
            detail:"The Boys Tshirt",
            ricon:<FaRupeeSign />,
            Number:"699",
            number2:"549",
            img1:`${bestimg15}`
        }
    ]
    return(
        <>
        <div className="best">
            <h2>Bestselling Products</h2>
            <div className="best-t-card">
            {
                bestdata.map((data)=>{
                    return(
                        <>
                        <div id={data.id} className="best-card">
                            <div className="img1">
                                <img src={data.img1} alt="" />
                            </div>
                            <div className="img2">
                            <img src={data.img} alt="" />
                            </div>
                            <h4>{data.name}</h4>
                            <p>{data.detail}</p>
                            <div className="rupee">
                                <div className="one">
                                <li>{data.ricon}</li>
                                <span>{data.Number}</span>
                                </div>
                                <div className="two">
                                <li>{data.ricon}</li>
                                <span>{data.number2}</span>
                                </div>
                            </div>
                        </div>
                        </>
                    )
                })
            }
            </div>
        </div>
        </>
    )
}
export{Bestselling}