import React, { useEffect, useRef } from "react";
import style from "./admin.module.css";
import NavBar from "../../component/navBar/NavBar";
import { useNavigate } from "react-router-dom";
import Layout from "../../component/Layout/Layout";
import ManageUser from "./adminComponent/manageUser/ManageUser";
import { useLocation } from "react-router-dom";
import ManageClass from "./adminComponent/manageClass/ManageClass";
import ManageRespond from "./adminComponent/manageRespond/ManageRespond";

export default function Admin(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const current = location.state;
  const opt = ["Manage User", "Manage Class", "Manage Request, Feedback"];
  useEffect(() => {
    if (localStorage.length === 0) {
      alert("please login first!");
      navigate("/login");
    }else{
        if (!localStorage.getItem('ADMIN')) {
            alert("please login as ADMIN!");
            navigate("/login");
        }
    }
  }, []);
  return (
    <>
      <Layout select={opt} curr={current} currRole = 'ADMIN'>
        {current === "Manage User" ? (
          <ManageUser />
        ) : current === "Manage Class" ? (
          <ManageClass />
        ) : (
          <ManageRespond />
        )}
      </Layout>
    </>
  );
}
