import React from "react";
import "./css/content1.css";
import mainPic from "../asset/img/mainPic.png";

export default function Content1(props) {
  return (
    <>
      <div className="content1-left col-lg-7 col-md-12 col-xs-12 col-sm-12 col-12">
        <div className="content1-left-content">
          <h1>
            Quality <span>Education</span> By Any Means Necessary.
          </h1>
          <button>Get Started</button>
        </div>
      </div>
      <div className="content1-right col-xs-12 col-md-12 col-lg-5 col-sm-12 col-12">

          <div className="content1-right-main">
          <div className="content1-right-mainPic">
          <div className="curved"></div>
            <img src={mainPic} alt="" className="img-fluid" />
            <div className="content1-right-content">
                  <div className="content1-right-img-content">
                    <p>Learn from best <span>instructors</span> around the globe</p>
                  </div>
                  <div className="content1-right-img-avt">
                  <div className="duplicate"></div>
                  <div className="duplicate"></div>
                  <div className="duplicate"></div>
                  <div className="duplicate"></div>
                  <div className="duplicate"></div>
                  </div>
                </div>
          <div className="content1-right-content2">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="30" height="30" rx="15" fill="#E1FFEE" />
              <path
                d="M15 15C15.7956 15 16.5587 14.6839 17.1213 14.1213C17.6839 13.5587 18 12.7956 18 12C18 11.2044 17.6839 10.4413 17.1213 9.87868C16.5587 9.31607 15.7956 9 15 9C14.2044 9 13.4413 9.31607 12.8787 9.87868C12.3161 10.4413 12 11.2044 12 12C12 12.7956 12.3161 13.5587 12.8787 14.1213C13.4413 14.6839 14.2044 15 15 15ZM17 12C17 12.5304 16.7893 13.0391 16.4142 13.4142C16.0391 13.7893 15.5304 14 15 14C14.4696 14 13.9609 13.7893 13.5858 13.4142C13.2107 13.0391 13 12.5304 13 12C13 11.4696 13.2107 10.9609 13.5858 10.5858C13.9609 10.2107 14.4696 10 15 10C15.5304 10 16.0391 10.2107 16.4142 10.5858C16.7893 10.9609 17 11.4696 17 12ZM21 20C21 21 20 21 20 21H10C10 21 9 21 9 20C9 19 10 16 15 16C20 16 21 19 21 20ZM20 19.996C19.999 19.75 19.846 19.01 19.168 18.332C18.516 17.68 17.289 17 15 17C12.71 17 11.484 17.68 10.832 18.332C10.154 19.01 10.002 19.75 10 19.996H20Z"
                fill="#09B451"
              />
            </svg>
            <p>15K</p>
            <div className="content1-right-content2-text">
              <p>Amazing students around the globe</p>
            </div>
          </div>
          </div>
          </div>
      </div>
    </>
  );
}
