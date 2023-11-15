import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import LayoutTeacher from "../../component/Layout/LayoutTeacher";
import { Badge, Button, Calendar } from "antd";


export default function TeacherSchedules(props) {
    const [schedule, setSchedule] = useState([]);
    const [use, setUser] = useState({})
    const [foundUser, setFoundUser] = useState(null);
    const navigate = useNavigate();
    console.log(schedule);
    console.log(foundUser?.id);
    useEffect(() => {
        if (localStorage.length === 0) {
            alert('please login first!')
            navigate('/login')
        }else{
            if (!localStorage.getItem('TEACHER')) {
                alert("please login as TEACHER!");
                navigate("/login");
            }
        }
    }, [])
    useEffect(() => {
        const fetchSchedule = async () => {
            try {
                const response = await fetch('http://localhost:8080/schedule');
                const data = await response.json();
                setSchedule(data.filter((e)=>e.teacherId === use.id));
            } catch (error) {
                console.error('Error fetching schedule:', error);
            }
        };
        fetchSchedule();
    }, [use]);

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('TEACHER')))
    }, [])



    const getListData = (value) => {
        const dateString = value.format('YYYY-MM-DD');
        const event = schedule?.find(item => item.date === dateString);
        return event ? event.events : [];
    };

    const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map((item, index) => (
                    <li key={index}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    };



    return (
        <>
            <LayoutTeacher>
               <div style={{padding:30}}> <Calendar  mode="month" dateCellRender={dateCellRender} /></div>
            </LayoutTeacher>
        </>
    )
}