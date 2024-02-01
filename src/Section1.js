import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css"
import { Button } from "@mui/material";
export default function Section1() {
    const value="Show all".toLocaleLowerCase()
    const data = [
        {
            img: "https://a0.muscache.com/im/pictures/e35bb307-05f4-48a4-bdc5-3b2198bb9451.jpg?im_w=1440",
            title:"Collection",
            name: "Most popular around the world"
        }, {
            img: "https://a0.muscache.com/im/pictures/2fe40f4f-5ea3-432f-9fbd-e2ce3c6c3855.jpg?im_w=1440",
            title:"Collection",
            name: "Easy for itinerary planning"
        }, {
            img: "https://a0.muscache.com/im/pictures/58819d01-2a71-441d-b3bc-baae0cd64da1.jpg?im_w=1440",
            title:"Collection",
            name: "Great for team building"
        }, {
            img: "https://a0.muscache.com/im/pictures/bcbd20bb-1654-4ea2-a86c-2cf25666f3b6.jpg?im_w=1440",
            title:"Collection",
            name: "Fun for the family"
        }
    ]

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true
      
    }
    
    return (
        <div style={{ width: "95%",height:"20%", marginTop:"30px",marginLeft:"20px"}}>

           
                <div style={{marginTop:"30px",marginBottom:"50px",width:"100%"}}>
                    <h1>New This Week</h1>
                <Slider {...settings}>
                    {data.map((d) => (
                        <div style={{height:"500px",gap:"6px"}}>
                            <div style={{width:"480px"}}>
                            <img style={{width:"420px",height:"240px",borderRadius:"10px"}} src={d.img} alt="photo"/>

                            </div>
                            <div>
                                <button style={{ border:"none",borderRadius:"5px",marginLeft:"10px",height:"25px",position:"absolute",top:"200px",color:"black",backgroundColor:"white"}}>{value}</button>
                            </div>
                            <div>
                                <h6 style={{marginLeft:"20px",width:"150px",position:"absolute",top:"-10px",color:"white"}}>{d.title}</h6>
                            </div>
                            <div style={{}}>
                                <h3 style={{marginLeft:"20px",width:"170px",position:"absolute",top:"13px",color:"white"}}>{d.name}</h3>


                            </div>
                        </div>
                    ))}
                     </Slider>
                </div>
           
        </div>
    );

}