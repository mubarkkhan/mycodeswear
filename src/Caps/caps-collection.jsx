import React from "react";
import capscollectionimg1 from "../Image/0 (6).webp"
import { FaRupeeSign } from "react-icons/fa";
import capscollectionimg2 from "../Image/0 (7).webp"
import capscollectionimg3 from "../Image/0 (8).webp"
import capscollectionimg4 from "../Image/0 (9).webp"
import capscollectionimg5 from "../Image/0 (11).webp"
import capscollectionimg6 from "../Image/0 (12).webp"
import capscollectionimg7 from "../Image/0 (13).webp"
import capscollectionimg8 from "../Image/0 (14).webp"
import capscollectionimg9 from "../Image/0 (15).webp"
import capscollectionimg11 from "../Image/1 (5).webp"
import capscollectionimg12 from "../Image/1 (6).webp"
import capscollectionimg13 from "../Image/1 (7).webp"
import capscollectionimg14 from "../Image/1 (8).webp"
import capscollectionimg15 from "../Image/1 (9).webp"
import capscollectionimg16 from "../Image/1 (10).webp"
import capscollectionimg17 from "../Image/1 (11).webp"
import capscollectionimg18 from "../Image/1 (12).webp"
import capscollectionimg19 from "../Image/1 (13).webp"

function Capscollection() {

   const capscollectioncarddata=[
    {
        id:1,
        img:`${capscollectionimg1}`,
        name:"CAP",
        detail:"Pack Of Five Plain C...",
        ricon:<FaRupeeSign />,
        Number:"699",
        number2:"549",
        img1:`${capscollectionimg11}`,
        size:"L"
    },
    {
        id:2,
        img:`${capscollectionimg2}`,
        name:"CAP",
        detail:"Pack Of Three Plain...",
        ricon:<FaRupeeSign />,
        Number:"499",
        number2:"349",
        img1:`${capscollectionimg12}`,
        size:"L"
    },
    {
        id:3,
        img:`${capscollectionimg3}`,
        name:"CAP",
        detail:"Pack Of Five Anonymo...",
        ricon:<FaRupeeSign />,
        Number:"649",
        number2:"499",
        img1:`${capscollectionimg13}`,
        size:"L"
    },
    {
        id:4,
        img:`${capscollectionimg4}`,
        name:"CAP",
        detail:"Pack Of Three Anonymo...",
        ricon:<FaRupeeSign />,
        Number:"469",
        number2:"319",
        img1:`${capscollectionimg14}`,
        size:"L"
    },
    {
        id:5,
        img:`${capscollectionimg5}`,
        name:"CAP",
        detail:"Naruto Cap",
        ricon:<FaRupeeSign />,
        Number:"369",
        number2:"219",
        img1:`${capscollectionimg15}`,
        size:"L"
    },
    {
        id:6,
        img:`${capscollectionimg6}`,
        name:"CAP",
        detail:"Marshmallow Cap",
        ricon:<FaRupeeSign />,
        Number:"369",
        number2:"219",
        img1:`${capscollectionimg16}`,
        size:"L"
    },
    {
        id:7,
        img:`${capscollectionimg7}`,
        name:"CAP",
        detail:"Anonymous Hacker Mas...",
        ricon:<FaRupeeSign />,
        Number:"369",
        number2:"219",
        img1:`${capscollectionimg17}`,
        size:"L"
    },
    {
        id:8,
        img:`${capscollectionimg8}`,
        name:"CAP",
        detail:"Git Cap",
        ricon:<FaRupeeSign />,
        Number:"369",
        number2:"219",
        img1:`${capscollectionimg18}`,
        size:"L"
    },
    {
        id:9,
        img:`${capscollectionimg9}`,
        name:"CAP",
        detail:"Adobe After Effects...",
        ricon:<FaRupeeSign />,
        Number:"369",
        number2:"219",
        img1:`${capscollectionimg19}`,
        size:"L"
    },
   ]

    return (
        <>
            <div className="caps-collection">
                <div className="text">
                    <h1>Explore Our Caps Collection</h1>
                    <p>Stay cool and stylish with the wide selection of caps available at Codeswear.com. Our caps are perfect for every occasion, whether you're looking for a casual everyday cap or something to wear to the gym. We have a variety of styles to choose from, including coding caps, anime caps, and casual caps for everyday wear. All of our caps are made with high-quality materials and are designed to be comfortable and durable. Shop now and find the perfect cap for you!</p>
                </div>
                <div className="caps-collection-card">
                    {
                        capscollectioncarddata.map((data)=>{
                            return(
                                <>
                                <div id={data.id} className="caps-card">
                            <div className="img">
                                <img src={data.img1} alt="" />
                            </div>
                            <img src={data.img} alt="" />
                            <h4>{data.name}</h4>
                            <p>{data.detail}</p>
                            <div className="color-r">
                                <div className="color-b" title="black">
                                </div>
                                <div className="color-n" title="Navyblue"></div>
                                <div className="color-r" title="Red"></div>
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
                            <li className="size">{data.size}</li>                         
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
export { Capscollection }