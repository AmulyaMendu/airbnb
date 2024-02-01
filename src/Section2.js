import React, { useState } from 'react'

import 'react-datepicker/dist/react-datepicker.css';
import Calendar from "react-calendar"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-calendar/dist/Calendar.css';
export default function Section2() {
    const array = [
        {
            name: "Great for Groups"
        }, {
            name: "Family-friendly"
        }, {
            name: "Animals"
        }, {
            name: "Art&writing"
        }, {
            name: "Baking"
        }, {
            name: "Cooking"
        }, {
            name: "Dance"
        }, {
            name: "Drinks"
        }, {
            name: "History & culture"
        }, {
            name: "Magic"
        }, {
            name: "Music"
        }, {
            name: "Social impact"
        }, {
            name: "Wellness"
        }, {
            name: "Olympians & Paralympians"
        }, {
            name: "Designed for Accessibility"
        },
    ]

    const [date, setDate] = useState(new Date())
    const [showCalendar, setShowCalendar] = useState(false);
    const handleButtonClick = () => {
        setShowCalendar(!showCalendar);
    };
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 6,
        draggable: true,
        arrow:true

    }
    return (
        <div style={{ display: "flex", marginLeft: "20px", marginTop: "-10px", gap: "5px" }}>
            <div>
                <button onClick={handleButtonClick}>Dates</button>
                {showCalendar && (
                    <Calendar onChange={setDate} value={date} />
                )}
            </div>
            <div>
                <button style={{ width: "90px" }} >Group size</button>
            </div>
            <div>
                <button style={{ width: "90px" }} >More filters</button>
            </div>
            <div style={{ marginTop:"-10px", width: "77%", height: "50px",gap:"10px" }}>
            <Slider {...settings}>
                {array.map((d)=>(
                      <div style={{height:"100px",width:"130px",gap:"6px",display:"flex",flexWrap:"wrap"}}>
                    <div style={{width:"130px",marginLeft:"10px",alignItems:"center",marginTop:"-8px",height:"48px",display:"flex"}}>
                         <p style={{backgroundColor:"#F2EFEE",borderRadius:"5px"}}>{d.name}</p>
                    </div>
                    </div>
                   
                ))}
                </Slider>
            </div>
        </div>
    )
}
