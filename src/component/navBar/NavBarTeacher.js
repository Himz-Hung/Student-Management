import React, { useRef } from "react";
import style from "./navBar.module.css";
import { Link } from "react-router-dom";

export default function NavBarTeacher(props) {
  return (
    <>
      <div className={style.contain}>
        <div className={style.header}>
          <h2>Teacher</h2>
            <img
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/398503132_1012670206728515_5363710743912104934_n.png?stp=dst-png_s206x206&_nc_cat=101&ccb=1-7&_nc_sid=510075&_nc_eui2=AeGSevlkKT1P4nHq9wp4qYUFBPLiNCpBTm0E8uI0KkFObUcJQu2x3IloZglhJrN6kELW4NWQGD2SWCtqPIQ-tpJ_&_nc_ohc=m8KDTQDkgFMAX8NCo1x&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRoa7t0Q9Xe1bPI45aldQVejGtLeIfAfCo1M0WyKHKQHw&oe=656F14CC"
              alt=""
            />
        </div>
        <div className={style.nav}>
          <ul>
            <li>
              <Link  to={'/teacher'} className={style.navItem}>Home</Link>
            </li>
            <li>
              <Link to={'/teacher/class'}  className={style.navItem}>Class</Link>
            </li>
            <li>
              <Link to={'/teacher/schedules'} className={style.navItem}>Schedules</Link>
            </li>
            <li>
            <Link to="/login" className={style.navItem} onClick={()=>{
                localStorage.clear();
              }}>
                 Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
