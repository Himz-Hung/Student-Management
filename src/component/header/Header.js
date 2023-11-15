import React, { useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
export default function Header(props) {
  return (
    <>
      <div className="header">
        <div className="header-logo col-lg-2 col-sm-5 col-md-4 col-6">
          <svg
            id="nav-responsive"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 8.5H26.5M5.5 24.5H26.5H5.5ZM5.5 16.5H26.5H5.5Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            width="132"
            height="41"
            viewBox="0 0 132 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.8544 32L0.5904 10.5488H4.4936L6.3632 21.3728C6.53813 22.5099 6.71307 23.6579 6.888 24.8168C7.0848 25.9539 7.25973 27.0909 7.4128 28.228H7.544C7.78453 27.0909 8.01413 25.9539 8.2328 24.8168C8.47333 23.6579 8.71387 22.5099 8.9544 21.3728L11.5784 10.5488H14.8912L17.5152 21.3728C17.7557 22.488 17.9963 23.6251 18.2368 24.784C18.4773 25.9211 18.7179 27.0691 18.9584 28.228H19.0896C19.2645 27.0691 19.4395 25.9211 19.6144 24.784C19.7893 23.6469 19.9533 22.5099 20.1064 21.3728L21.976 10.5488H25.6168L21.5168 32H16.7936L14.1368 20.7168C13.9619 19.8859 13.7869 19.0549 13.612 18.224C13.4589 17.3931 13.3168 16.5731 13.1856 15.764H13.0544C12.9013 16.5731 12.7373 17.3931 12.5624 18.224C12.4093 19.0549 12.2453 19.8859 12.0704 20.7168L9.4792 32H4.8544ZM28.628 32V15.8952H32.4V32H28.628ZM30.5304 13.0744C29.8525 13.0744 29.3059 12.8776 28.8904 12.484C28.4749 12.0904 28.2672 11.5656 28.2672 10.9096C28.2672 10.2755 28.4749 9.7616 28.8904 9.368C29.3059 8.9744 29.8525 8.7776 30.5304 8.7776C31.2083 8.7776 31.7549 8.9744 32.1704 9.368C32.5859 9.7616 32.7936 10.2755 32.7936 10.9096C32.7936 11.5656 32.5859 12.0904 32.1704 12.484C31.7549 12.8776 31.2083 13.0744 30.5304 13.0744ZM43.8052 32.3936C42.362 32.3936 40.9625 32.1203 39.6068 31.5736C38.2729 31.0269 37.0921 30.2507 36.0644 29.2448L38.2948 26.6536C39.0601 27.3752 39.9348 27.9656 40.9188 28.4248C41.9028 28.8621 42.8868 29.0808 43.8708 29.0808C45.0953 29.0808 46.0246 28.8293 46.6588 28.3264C47.2929 27.8235 47.61 27.1565 47.61 26.3256C47.61 25.4291 47.2929 24.784 46.6588 24.3904C46.0465 23.9968 45.2593 23.5923 44.2972 23.1768L41.3452 21.8976C40.6454 21.5915 39.9566 21.1979 39.2788 20.7168C38.6228 20.2357 38.0761 19.6235 37.6388 18.88C37.2233 18.1365 37.0156 17.24 37.0156 16.1904C37.0156 15.0533 37.3217 14.0365 37.934 13.14C38.5681 12.2216 39.4209 11.5 40.4924 10.9752C41.5857 10.4285 42.8321 10.1552 44.2316 10.1552C45.478 10.1552 46.6806 10.4067 47.8396 10.9096C48.9985 11.3907 49.9934 12.0467 50.8244 12.8776L48.8892 15.3048C48.2113 14.7363 47.4897 14.288 46.7244 13.96C45.9809 13.632 45.15 13.468 44.2316 13.468C43.2257 13.468 42.4057 13.6976 41.7716 14.1568C41.1593 14.5941 40.8532 15.2064 40.8532 15.9936C40.8532 16.5403 41.0062 16.9995 41.3124 17.3712C41.6404 17.7211 42.0668 18.0272 42.5916 18.2896C43.1164 18.5301 43.674 18.7707 44.2644 19.0112L47.1836 20.2248C48.4518 20.7715 49.4905 21.4931 50.2996 22.3896C51.1086 23.2643 51.5132 24.4779 51.5132 26.0304C51.5132 27.1893 51.207 28.2499 50.5948 29.212C49.9825 30.1741 49.0969 30.9504 47.938 31.5408C46.8009 32.1093 45.4233 32.3936 43.8052 32.3936ZM61.8098 32.3936C60.3447 32.3936 59.0218 32.0656 57.841 31.4096C56.6821 30.7317 55.7527 29.7696 55.053 28.5232C54.3751 27.2549 54.0362 25.7352 54.0362 23.964C54.0362 22.1709 54.4079 20.6512 55.1514 19.4048C55.8949 18.1365 56.8789 17.1744 58.1034 16.5184C59.3498 15.8405 60.6837 15.5016 62.105 15.5016C63.1327 15.5016 64.0293 15.6765 64.7946 16.0264C65.5599 16.3763 66.2378 16.8027 66.8282 17.3056L64.9914 19.7656C64.5759 19.3939 64.1495 19.1096 63.7122 18.9128C63.2749 18.6941 62.8047 18.5848 62.3018 18.5848C61.0117 18.5848 59.9511 19.0768 59.1202 20.0608C58.3111 21.0448 57.9066 22.3459 57.9066 23.964C57.9066 25.5603 58.3002 26.8504 59.0874 27.8344C59.8965 28.8184 60.9351 29.3104 62.2034 29.3104C62.8375 29.3104 63.4279 29.1792 63.9746 28.9168C64.5431 28.6325 65.057 28.3045 65.5162 27.9328L67.0578 30.4256C66.3143 31.0816 65.4834 31.5736 64.565 31.9016C63.6466 32.2296 62.7282 32.3936 61.8098 32.3936ZM70.2366 32V8.8432H74.0086V14.8128L73.8774 17.9288C74.5553 17.2947 75.3097 16.7371 76.1406 16.256C76.9715 15.7531 77.9337 15.5016 79.027 15.5016C80.7545 15.5016 82.0118 16.0592 82.799 17.1744C83.5862 18.2896 83.9798 19.864 83.9798 21.8976V32H80.2078V22.3896C80.2078 21.0557 80.011 20.1155 79.6174 19.5688C79.2238 19.0221 78.5787 18.7488 77.6822 18.7488C76.9825 18.7488 76.3593 18.9237 75.8126 19.2736C75.2878 19.6016 74.6865 20.0936 74.0086 20.7496V32H70.2366ZM95.1192 32.3936C93.7854 32.3936 92.539 32.0656 91.38 31.4096C90.2211 30.7317 89.2808 29.7696 88.5592 28.5232C87.8376 27.2549 87.4768 25.7352 87.4768 23.964C87.4768 22.1709 87.8376 20.6512 88.5592 19.4048C89.2808 18.1365 90.2211 17.1744 91.38 16.5184C92.539 15.8405 93.7854 15.5016 95.1192 15.5016C96.475 15.5016 97.7323 15.8405 98.8912 16.5184C100.05 17.1744 100.99 18.1365 101.712 19.4048C102.434 20.6512 102.794 22.1709 102.794 23.964C102.794 25.7352 102.434 27.2549 101.712 28.5232C100.99 29.7696 100.05 30.7317 98.8912 31.4096C97.7323 32.0656 96.475 32.3936 95.1192 32.3936ZM95.1192 29.3104C96.3 29.3104 97.2294 28.8184 97.9072 27.8344C98.5851 26.8504 98.924 25.5603 98.924 23.964C98.924 22.3459 98.5851 21.0448 97.9072 20.0608C97.2294 19.0768 96.3 18.5848 95.1192 18.5848C93.9384 18.5848 93.0091 19.0768 92.3312 20.0608C91.6752 21.0448 91.3472 22.3459 91.3472 23.964C91.3472 25.5603 91.6752 26.8504 92.3312 27.8344C93.0091 28.8184 93.9384 29.3104 95.1192 29.3104ZM113.121 32.3936C111.787 32.3936 110.541 32.0656 109.382 31.4096C108.223 30.7317 107.282 29.7696 106.561 28.5232C105.839 27.2549 105.478 25.7352 105.478 23.964C105.478 22.1709 105.839 20.6512 106.561 19.4048C107.282 18.1365 108.223 17.1744 109.382 16.5184C110.541 15.8405 111.787 15.5016 113.121 15.5016C114.477 15.5016 115.734 15.8405 116.893 16.5184C118.052 17.1744 118.992 18.1365 119.714 19.4048C120.435 20.6512 120.796 22.1709 120.796 23.964C120.796 25.7352 120.435 27.2549 119.714 28.5232C118.992 29.7696 118.052 30.7317 116.893 31.4096C115.734 32.0656 114.477 32.3936 113.121 32.3936ZM113.121 29.3104C114.302 29.3104 115.231 28.8184 115.909 27.8344C116.587 26.8504 116.926 25.5603 116.926 23.964C116.926 22.3459 116.587 21.0448 115.909 20.0608C115.231 19.0768 114.302 18.5848 113.121 18.5848C111.94 18.5848 111.011 19.0768 110.333 20.0608C109.677 21.0448 109.349 22.3459 109.349 23.964C109.349 25.5603 109.677 26.8504 110.333 27.8344C111.011 28.8184 111.94 29.3104 113.121 29.3104ZM128.203 32.3936C126.869 32.3936 125.918 31.9891 125.35 31.18C124.803 30.3709 124.53 29.2667 124.53 27.8672V8.8432H128.302V28.064C128.302 28.5232 128.389 28.8512 128.564 29.048C128.739 29.2229 128.925 29.3104 129.122 29.3104C129.209 29.3104 129.286 29.3104 129.351 29.3104C129.439 29.2885 129.559 29.2667 129.712 29.2448L130.204 32.0656C129.985 32.1531 129.701 32.2296 129.351 32.2952C129.023 32.3608 128.64 32.3936 128.203 32.3936Z"
              fill="black"
            />
            <circle cx="95" cy="10" r="3" fill="#09B451" />
            <circle cx="113" cy="10" r="3" fill="#09B451" />
          </svg>
        </div>
        <div className="header-nav col-lg-6">
          <nav>
            <ul>
              <li className="nav-icon">
                <a href="">Home</a>
              </li>
              <li className="nav-icon">
                <a href="">Courses</a>
              </li>
              <li className="nav-icon">
                <a href="">Instuctors</a>
              </li>
              <li className="nav-icon">
                <a href="">Schedules</a>
              </li>
              <li className="nav-icon">
                <a href="">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="login-responsive" className="col-4">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8C15.0111 8 14.0444 8.29325 13.2222 8.84265C12.3999 9.39206 11.759 10.173 11.3806 11.0866C11.0022 12.0002 10.9031 13.0055 11.0961 13.9755C11.289 14.9454 11.7652 15.8363 12.4645 16.5355C13.1637 17.2348 14.0546 17.711 15.0246 17.9039C15.9945 18.0969 16.9998 17.9978 17.9134 17.6194C18.8271 17.241 19.6079 16.6001 20.1574 15.7779C20.7068 14.9556 21 13.9889 21 13C21 11.6739 20.4732 10.4021 19.5355 9.46447C18.5979 8.52678 17.3261 8 16 8ZM16 16C15.4067 16 14.8266 15.8241 14.3333 15.4944C13.8399 15.1648 13.4554 14.6962 13.2284 14.1481C13.0013 13.5999 12.9419 12.9967 13.0576 12.4147C13.1734 11.8328 13.4591 11.2982 13.8787 10.8787C14.2982 10.4591 14.8328 10.1734 15.4147 10.0576C15.9967 9.94189 16.5999 10.0013 17.1481 10.2284C17.6962 10.4554 18.1648 10.8399 18.4944 11.3333C18.8241 11.8266 19 12.4067 19 13C18.9992 13.7954 18.6829 14.558 18.1204 15.1204C17.558 15.6829 16.7954 15.9992 16 16Z" fill="black"/>
<path d="M16 2C13.2311 2 10.5243 2.82109 8.22202 4.35943C5.91973 5.89777 4.12532 8.08427 3.06569 10.6424C2.00607 13.2006 1.72882 16.0155 2.26901 18.7313C2.80921 21.447 4.14258 23.9416 6.10051 25.8995C8.05845 27.8574 10.553 29.1908 13.2687 29.731C15.9845 30.2712 18.7994 29.9939 21.3576 28.9343C23.9157 27.8747 26.1022 26.0803 27.6406 23.778C29.1789 21.4757 30 18.7689 30 16C29.9958 12.2883 28.5194 8.72977 25.8948 6.10518C23.2702 3.48059 19.7117 2.00423 16 2ZM10 26.377V25C10.0008 24.2046 10.3171 23.442 10.8796 22.8796C11.442 22.3171 12.2046 22.0008 13 22H19C19.7954 22.0008 20.558 22.3171 21.1204 22.8796C21.6829 23.442 21.9992 24.2046 22 25V26.377C20.1792 27.4402 18.1085 28.0005 16 28.0005C13.8915 28.0005 11.8208 27.4402 10 26.377ZM23.992 24.926C23.9721 23.6143 23.4377 22.363 22.5039 21.4416C21.5702 20.5202 20.3118 20.0025 19 20H13C11.6882 20.0025 10.4298 20.5202 9.4961 21.4416C8.56235 22.363 8.02794 23.6143 8.00801 24.926C6.19457 23.3067 4.91574 21.1749 4.34084 18.8127C3.76594 16.4505 3.92211 13.9693 4.78864 11.6979C5.65518 9.42637 7.19123 7.47167 9.19338 6.09257C11.1955 4.71347 13.5693 3.97503 16.0005 3.97503C18.4317 3.97503 20.8055 4.71347 22.8076 6.09257C24.8098 7.47167 26.3458 9.42637 27.2124 11.6979C28.0789 13.9693 28.2351 16.4505 27.6602 18.8127C27.0853 21.1749 25.8064 23.3067 23.993 24.926H23.992Z" fill="black"/>
</svg>

          </div>
        <div className="header-right col-lg-3">
          <div className="search">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z"
                fill="#6A0000"
              />
            </svg>
          </div>
          <div className="login">
            <button className="login-button"><Link to="/Login">Login</Link></button>
            <button className="login-button">Register</button>
          </div>
        </div>
      </div>
    </>
  );
}