import React, { useRef } from "react";
import "./css/card2.css";
import pic from "../asset/img/img/content3/pic 1.png";
export default function Card2(props) {
  return (
    <>
      <div className="card2">
        <div className="card2Img">
          <img src={require('../asset/img/img/' + props.cardInfor.src)} alt="" />
        </div>
        <div className="card2Text">
          <p className="card2Content-header">{props.cardInfor.title}
          <p className="card2Content-main">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nibh
            netus auctor consect massa. Maecen vivamus sed nibh enim sed. Hac
            ridiculus tellus urna quam odio quis montes, diam. Malesuada ut urna
            eu faucibus faucibus faucibus u
          </p></p>
        </div>
      </div>
    </>
  );
}
