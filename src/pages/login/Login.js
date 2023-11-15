import React, { useEffect, useRef, useState } from "react";
import style from "./login.module.css";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const navigate = useNavigate();
  var flag = true;
  var formType = true;
  const userName = useRef("");
  const password = useRef("");
  const email = useRef("");
  const type = useRef("");
  const checker = useRef("");
  const remember = useRef("");
  const bttn = useRef("");
  const [list, setList] = useState([]);
  const getData = () => {
    fetch("http://localhost:8000/login")
      .then(res => res.json())
      .then(res => {
        let notify = true;
        if (res) {
          res.forEach(e => {
            if (
              e.username === userName.current.value &&
              e.password === password.current.value
            ) {
              notify = false;
              if(localStorage.length){
                localStorage.clear();
              }
              localStorage.setItem(e.role,JSON.stringify(e));
              switch (e.role) {
                case 'ADMIN':
                  return navigate("/admin",{state:'Manage User'});
                  break;
                case 'STUDENT':
                  return navigate("/student",{state:'Profile'});
                  break;
                default:
                  return navigate("/teacher");
                  break;
              }
            }
          });
          if (notify) alert("Wrong information!");
        }
      });
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (formType) {
      if (!userName.current.value || !userName.current.value.trim())
        return alert("Please enter username!");
      if (!password.current.value || !password.current.value.trim())
        return alert("Please enter password!");
      getData();
    } else {
      if (!userName.current.value) return alert("Please enter username!");
      if (!email.current.value) return alert("Please enter Email Address!");
      if (!password.current.value) return alert("Please enter password!");
      alert("Register successfully with username: " + userName.current.value);
    }
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.logo}>
          <p>Your Logo</p>
        </div>
        <div className={style.contentLeft}>
          <div className={style.img}>
            <div className={style.cover}></div>
            <div className={style.contentLeftContent}>
              <h2>Lorem Ipsum is simply </h2>
              <h3>Lorem Ipsum is simply </h3>
            </div>
          </div>
        </div>
        <div className={style.contentRight}>
          <form className={style.form} onSubmit={handleSubmit}>
            <h3>Welcome to lorem..!</h3>
            <div className={style.switch}>
              <div className={style.checkedBox}>
                <input
                  type="radio"
                  name="login"
                  id="loginBox"
                  checked
                  onClick={() => {
                    type.current.style = "display:none";
                    formType = true;
                    bttn.current.innerHTML = "Login";
                  }}
                />
                <label htmlFor="loginBox">Login</label>
              </div>
              <div className={style.checkedBox}>
                <input
                  type="radio"
                  name="login"
                  id="registerBox"
                  ref={checker}
                />
                <label
                  htmlFor="registerBox"
                  onClick={() => {
                    type.current.style = "display:inline";
                    checker.current.checked = "true";
                    formType = false;
                    bttn.current.innerHTML = "Register";
                  }}
                >
                  Register
                </label>
              </div>
            </div>
            <p id={style.formContent}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className={style.field} ref={type} style={{ display: "none" }}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                ref={email}
                id="email"
                placeHolder="Enter your Email Address"
              />
            </div>
            <div className={style.field}>
              <label htmlFor="name">User name</label>
              <input
                type="text"
                ref={userName}
                id="name"
                placeHolder="Enter your User name"
              />
            </div>
            <div className={style.field}>
              <label htmlFor="pass">Password</label>
              <div className={style.passwordBox}>
                <input
                  type="password"
                  id="pass"
                  ref={password}
                  placeHolder="Enter your Password"
                />
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => {
                    flag = !flag;
                    password.current.type = flag ? "password" : "text";
                  }}
                >
                  <g clip-path="url(#clip0_57_429)">
                    <path
                      d="M8.86298 6.14997L11.4397 8.72665L11.4519 8.59168C11.4519 7.23789 10.3517 6.1377 8.99795 6.1377L8.86298 6.14997Z"
                      fill="black"
                    />
                    <path
                      d="M8.99795 4.50103C11.2556 4.50103 13.0879 6.33335 13.0879 8.59102C13.0879 9.11863 12.9816 9.6217 12.7976 10.0839L15.1902 12.4765C16.4254 11.4458 17.3988 10.1125 18 8.59102C16.5808 5.00003 13.092 2.45605 8.99798 2.45605C7.85278 2.45605 6.75669 2.66054 5.73828 3.02864L7.50515 4.79141C7.96727 4.61146 8.47034 4.50103 8.99795 4.50103Z"
                      fill="black"
                    />
                    <path
                      d="M0.817983 2.27244L2.68301 4.13747L3.05521 4.50967C1.70552 5.56488 0.638037 6.96776 0 8.59145C1.41515 12.1824 4.90798 14.7264 8.99797 14.7264C10.2659 14.7264 11.4765 14.481 12.5849 14.0352L12.9326 14.3829L15.317 16.7714L16.36 15.7326L1.86093 1.22949L0.817983 2.27244ZM5.34153 6.79188L6.60533 8.05568C6.56852 8.23156 6.54398 8.40741 6.54398 8.59145C6.54398 9.94525 7.64417 11.0454 8.99797 11.0454C9.18202 11.0454 9.3579 11.0209 9.52968 10.9841L10.7935 12.2479C10.2495 12.5178 9.64421 12.6814 8.99797 12.6814C6.7403 12.6814 4.90798 10.8491 4.90798 8.59145C4.90798 7.94525 5.07159 7.33992 5.34153 6.79188Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_57_429">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className={style.option}>
              <div className={style.rememberBox}>
                <input
                  type="checkbox"
                  name="Remember"
                  ref={remember}
                  id="remember"
                />
                <label htmlFor="remember">Remember me</label>
              </div>
              <a href="">Forgot Password ?</a>
            </div>
            <div className={style.submit}>
              <button ref={bttn}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
