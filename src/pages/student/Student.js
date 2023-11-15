import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../../component/Layout/Layout";
import Profile from "./Profile";
import Class from "./Class";
import Feedback from "./Feedback";
export default function Student(props) {
  const navigate = useNavigate();
  const location = useLocation();
//   const curr = location.state;
//   const [current,setCurrent] = useState(curr)
  var current = location.state;
  const opt = ["Profile", "Class", "Feedback"];
  useEffect(() => {
    if (localStorage.length === 0) {
      alert("please login first!");
      navigate("/login");
    }else{
        if (!localStorage.getItem('STUDENT')) {
            alert("please login as STUDENT!");
            navigate("/login");
        }
    }
  }, []);

  return (
    <>
      <Layout select={opt} curr={current} currRole = 'STUDENT'>
        {current === "Profile" ? (
          <Profile />
        ) : current === "Class" ? (
          <Class />
        ) : (
          <Feedback />
        )}
      </Layout>
    </>
  );
}
