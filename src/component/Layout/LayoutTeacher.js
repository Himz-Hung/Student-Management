import React, { useRef } from "react";
import style from "./layout.module.css";
import NavBar from "../navBar/NavBar";
import NavBarTeacher from "../navBar/NavBarTeacher";

export default function LayoutTeacher(props) {
  return (
    <>
      <div className={style.layout}>
        <div>
          <NavBarTeacher />
        </div>
        <div className={style.content}>
        <div className={style.titleBar}>
          <h2>Teacher</h2>
        </div>
         <div>
            {props.children}
         </div>
         </div>
      </div>
    </>
  );
}
