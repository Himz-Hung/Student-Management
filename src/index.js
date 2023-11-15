import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import "./index.css";
import Home from './pages/home/Home';
import Login from "./pages/login/Login";
import Admin from "./pages/admin/admin";
import Student from "./pages/student/Student";
import Teacher from "./pages/Teacher/Teacher";
import TeacherClass from "./pages/Teacher/TeacherClass";
import TeacherSchedules from "./pages/Teacher/TeacherSchedules";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/student",
    element: <Student />,
  },
  {
    path: "/teacher",
    element: <Teacher />,
  },
  {
    path: "/teacher/class",
    element: <TeacherClass />,
  },
  {
    path: "/teacher/schedules",
    element: <TeacherSchedules />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
