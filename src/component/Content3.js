import React, { useEffect, useState } from "react";
import "./css/content3.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card2 from "./Card2";
import data from "../asset/data3";

export default function Card5(props) {
  const [list,setList] = useState([])
  useEffect(()=>{
    fetch("http://localhost:8000/data3")
    .then(res => res.json())
    .then(res => {
      setList(res)
    })
  },[])
  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    Infinity:false
  };

  console.log(list)
  return (
    <>
      <div className="content3">
        
      <Slider {...settings}>
          {
              list.map((infor, index) => (
                <div className=" col-5 card2Content">
                  <Card2 key={index} cardInfor={infor}/>
                  </div>
              ))
          }
    </Slider>
      </div>
    </>
  );
}
