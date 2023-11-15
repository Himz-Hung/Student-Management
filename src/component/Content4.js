import React, { useEffect, useState } from "react";
import "./css/content4.css";
import Card from "./Card";
import data from "../asset/data";
import data2 from "../asset/data2";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Content4(props) {
  const [list,setList] = useState([])
  const [list2,setList2] = useState([])
  useEffect(()=>{
    fetch("http://localhost:8000/data1")
    .then(res => res.json())
    .then(res => {
      setList(res)
    })
    fetch("http://localhost:8000/data2")
    .then(res => res.json())
    .then(res => {
      setList2(res)
    })
  },[])
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="content4">
        <div className="content4-header row">
          {props.case ? (
            <p className="col-7 content4-title">
              Learn a new skill in two hours
            </p>
          ) : (
            <p className="col-7 content4-title">Most Popular courses</p>
          )}
          {props.case ? (
            <div></div>
          ) : (
            <div className="select col-3">
              <div className="selectCover">
                <div id="selectColor">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21.25 9.06255L15 18.4376L8.75003 9.06255C8.66795 8.93944 8.56243 8.83369 8.43949 8.75136C8.31654 8.66903 8.17859 8.61171 8.0335 8.5827C7.88841 8.55368 7.73902 8.55352 7.59387 8.58224C7.44872 8.61095 7.31064 8.66798 7.18753 8.75005C7.06441 8.83213 6.95867 8.93765 6.87634 9.06059C6.794 9.18353 6.73669 9.32149 6.70767 9.46658C6.67865 9.61167 6.6785 9.76106 6.70721 9.90621C6.73593 10.0514 6.79295 10.1894 6.87503 10.3126L13.96 20.9401C14.0742 21.1112 14.2288 21.2516 14.4103 21.3487C14.5917 21.4458 14.7943 21.4966 15 21.4966C15.2058 21.4966 15.4084 21.4458 15.5898 21.3487C15.7712 21.2516 15.9259 21.1112 16.04 20.9401L23.125 10.3126C23.2071 10.1894 23.2641 10.0514 23.2928 9.90621C23.3216 9.76106 23.3214 9.61167 23.2924 9.46658C23.2634 9.32149 23.2061 9.18353 23.1237 9.06059C23.0414 8.93765 22.9356 8.83213 22.8125 8.75005C22.6894 8.66798 22.5513 8.61095 22.4062 8.58224C22.261 8.55352 22.1116 8.55368 21.9666 8.5827C21.8215 8.61171 21.6835 8.66903 21.5606 8.75136C21.4376 8.83369 21.3321 8.93944 21.25 9.06255Z"
                      fill="#09b451"
                    />
                  </svg>
                </div>
                <div id="selectColor2">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21.25 9.06255L15 18.4376L8.75003 9.06255C8.66795 8.93944 8.56243 8.83369 8.43949 8.75136C8.31654 8.66903 8.17859 8.61171 8.0335 8.5827C7.88841 8.55368 7.73902 8.55352 7.59387 8.58224C7.44872 8.61095 7.31064 8.66798 7.18753 8.75005C7.06441 8.83213 6.95867 8.93765 6.87634 9.06059C6.794 9.18353 6.73669 9.32149 6.70767 9.46658C6.67865 9.61167 6.6785 9.76106 6.70721 9.90621C6.73593 10.0514 6.79295 10.1894 6.87503 10.3126L13.96 20.9401C14.0742 21.1112 14.2288 21.2516 14.4103 21.3487C14.5917 21.4458 14.7943 21.4966 15 21.4966C15.2058 21.4966 15.4084 21.4458 15.5898 21.3487C15.7712 21.2516 15.9259 21.1112 16.04 20.9401L23.125 10.3126C23.2071 10.1894 23.2641 10.0514 23.2928 9.90621C23.3216 9.76106 23.3214 9.61167 23.2924 9.46658C23.2634 9.32149 23.2061 9.18353 23.1237 9.06059C23.0414 8.93765 22.9356 8.83213 22.8125 8.75005C22.6894 8.66798 22.5513 8.61095 22.4062 8.58224C22.261 8.55352 22.1116 8.55368 21.9666 8.5827C21.8215 8.61171 21.6835 8.66903 21.5606 8.75136C21.4376 8.83369 21.3321 8.93944 21.25 9.06255Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <p>Sort by</p>
            </div>
          )}
        </div>
          {props.case ?
           (        <Slider {...settings}>
            {list2.map((infor, index) => (
              <div className="cardContent4 col-md-6 col-xl-4 col-12">
                <Card key={index} cardInfor={infor} />
              </div>
            ))}
            </Slider>
          ) : (
            <div className="content4-container">
              {list.map((infor, index) => (
                <div className="cardContent4 col-md-6 col-xl-4 col-12">
                  <Card key={index} cardInfor={infor} />
                </div>
              ))}
            </div>
          )}
      </div>
    </>
  );
}
