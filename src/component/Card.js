import React, { useRef } from "react";
import "./css/card.css";

export default function Card5(props) {
  return (
    <>
      <div className="cardContent">
        <div className="card-img">
          <img src={require('../asset/img/img/' + props.cardInfor.src)} alt="" />
          <div className="card-content">
            <div className="card-header">
            <p className="card-title">{props.cardInfor.title}</p>
            <p className="card-rating">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9627 6.20694L11.4996 5.55831L9.50448 1.51358C9.44999 1.40284 9.36034 1.31319 9.2496 1.2587C8.97186 1.12159 8.63436 1.23585 8.49549 1.51358L6.50038 5.55831L2.03729 6.20694C1.91425 6.22452 1.80174 6.28253 1.71561 6.37042C1.61148 6.47744 1.5541 6.62143 1.55608 6.77074C1.55806 6.92006 1.61923 7.06247 1.72616 7.16671L4.95526 10.3149L4.19237 14.7605C4.17448 14.8639 4.18592 14.9702 4.2254 15.0675C4.26488 15.1647 4.33082 15.2489 4.41573 15.3106C4.50065 15.3723 4.60114 15.4089 4.70583 15.4164C4.81051 15.4239 4.91519 15.4018 5.00799 15.3528L8.99999 13.254L12.992 15.3528C13.101 15.4108 13.2275 15.4302 13.3488 15.4091C13.6547 15.3564 13.8603 15.0663 13.8076 14.7605L13.0447 10.3149L16.2738 7.16671C16.3617 7.08057 16.4197 6.96807 16.4373 6.84503C16.4848 6.53741 16.2703 6.25264 15.9627 6.20694ZM11.6859 9.87198L12.3205 13.5687L8.99999 11.8249L5.67948 13.5704L6.31405 9.87374L3.62811 7.2546L7.34061 6.71495L8.99999 3.35225L10.6594 6.71495L14.3719 7.2546L11.6859 9.87198Z"
                  fill="#09B451"
                />
              </svg> 
              4.5
            </p>
            </div>
          </div>
          <div className="card-footer">
            <div className="footer-left">
              <p>6 weeks</p>
              <p>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.00004 2C5.11599 2 4.26814 2.35119 3.64302 2.97631C3.0179 3.60143 2.66671 4.44928 2.66671 5.33333C2.66671 6.21739 3.0179 7.06523 3.64302 7.69036C4.26814 8.31548 5.11599 8.66667 6.00004 8.66667C6.8841 8.66667 7.73194 8.31548 8.35706 7.69036C8.98218 7.06523 9.33337 6.21739 9.33337 5.33333C9.33337 4.44928 8.98218 3.60143 8.35706 2.97631C7.73194 2.35119 6.8841 2 6.00004 2ZM4.00004 5.33333C4.00004 4.8029 4.21075 4.29419 4.58583 3.91912C4.9609 3.54405 5.46961 3.33333 6.00004 3.33333C6.53047 3.33333 7.03918 3.54405 7.41425 3.91912C7.78933 4.29419 8.00004 4.8029 8.00004 5.33333C8.00004 5.86377 7.78933 6.37247 7.41425 6.74755C7.03918 7.12262 6.53047 7.33333 6.00004 7.33333C5.46961 7.33333 4.9609 7.12262 4.58583 6.74755C4.21075 6.37247 4.00004 5.86377 4.00004 5.33333ZM11.272 5.47867C11.0846 5.38314 10.8771 5.33333 10.6667 5.33333V4C11.0877 4.00003 11.5027 4.09974 11.8778 4.29098C12.2529 4.48222 12.5774 4.75955 12.8247 5.10028C13.072 5.44101 13.2351 5.83545 13.3006 6.25133C13.3662 6.6672 13.3324 7.0927 13.2019 7.49299C13.0715 7.89328 12.8481 8.25699 12.5501 8.55437C12.252 8.85174 11.8878 9.07432 11.4872 9.2039C11.0867 9.33347 10.6611 9.36636 10.2454 9.29987C9.82963 9.23337 9.43555 9.06939 9.09537 8.82133L9.88071 7.744C10.0294 7.85221 10.1988 7.92849 10.3784 7.96806C10.558 8.00762 10.7438 8.00961 10.9242 7.9739C11.1046 7.93819 11.2757 7.86555 11.4266 7.76055C11.5776 7.65555 11.7052 7.52046 11.8015 7.36376C11.8977 7.20707 11.9605 7.03216 11.9859 6.85003C12.0113 6.6679 11.9987 6.48248 11.949 6.30544C11.8993 6.1284 11.8134 5.96356 11.697 5.82128C11.5805 5.67899 11.4358 5.56235 11.272 5.47867ZM13.332 14C13.3319 13.2932 13.051 12.6153 12.5512 12.1155C12.0514 11.6157 11.3735 11.3348 10.6667 11.3347V10C11.7275 10.0002 12.7448 10.4217 13.4949 11.1718C14.245 11.9219 14.6665 12.9392 14.6667 14H13.332ZM10.6667 14H9.33337C9.33337 13.1159 8.98218 12.2681 8.35706 11.643C7.73194 11.0179 6.8841 10.6667 6.00004 10.6667C5.11599 10.6667 4.26814 11.0179 3.64302 11.643C3.0179 12.2681 2.66671 13.1159 2.66671 14H1.33337C1.33337 12.7623 1.82504 11.5753 2.70021 10.7002C3.57538 9.825 4.76236 9.33333 6.00004 9.33333C7.23772 9.33333 8.4247 9.825 9.29987 10.7002C10.175 11.5753 10.6667 12.7623 10.6667 14Z"
                    fill="#09B451"
                  />
                </svg>
                1.5k Students
              </p>
            </div>
            <div className="footer-right">
              <div className="money">30.5$</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
