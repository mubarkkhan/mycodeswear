import React from "react";
import { capscollectioncarddata } from "../Data/data";
import { Link } from "react-router-dom";

function Capscollection() {

    return (
        <>
            <div className="caps-collection">
                <div className="text">
                    <h1>Explore Our Caps Collection</h1>
                    <p>Stay cool and stylish with the wide selection of caps available at Codeswear.com. Our caps are perfect for every occasion, whether you're looking for a casual everyday cap or something to wear to the gym. We have a variety of styles to choose from, including coding caps, anime caps, and casual caps for everyday wear. All of our caps are made with high-quality materials and are designed to be comfortable and durable. Shop now and find the perfect cap for you!</p>
                </div>
                <div className="caps-collection-card">
                    {
                        capscollectioncarddata.map((data) => {
                            return (
                                <>
                                    <div id={data.id} className="caps-card">
                                        <Link to="/detail">
                                        <div className="image">
                                            <div className="img1">
                                                <img src={data.img} alt="" />
                                            </div>
                                            <div className="img">
                                                <img src={data.img1} alt="" />
                                            </div>
                                        </div>
                                        </Link>
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
                                                    <span>{data.price}</span>
                                                </div>
                                                <div className="two">
                                                    <li>{data.ricon}</li>
                                                    <span>{data.price2}</span>
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