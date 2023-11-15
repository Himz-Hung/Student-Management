import React, { useRef } from "react";
import style from "./layout.module.css";
import NavBar from "../navBar/NavBar";

export default function Layout(props) {
  return (
    <>
      <div className={style.layout}>
          <NavBar select = {props.select} current = {props.curr} role = {props.currRole}/>
        <div className={style.content}>
        <div className={style.titleBar}>
          <h2>{props.curr ? props.curr : props.select[0]}</h2>
        </div>
         <div>
            {props.children}
         </div>
         </div>
      </div>
    </>
  );
}
