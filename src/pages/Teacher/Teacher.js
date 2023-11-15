import React, { useEffect, useRef, useState } from "react";
import style from "./layout.module.css";
import { useNavigate } from "react-router-dom";
import LayoutTeacher from "../../component/Layout/LayoutTeacher";
import { Input, Modal } from "antd";

export default function Teacher(props) {
    const [use, setUser] = useState({})
    const [foundUser, setFoundUser] = useState(null); 
    const [orderModalDetail, setModalOrderDetail] = useState(false);
    const [useEdit, setUserEdit] = useState({})

    const navigate = useNavigate();
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
    const getData = () =>{
        fetch("http://localhost:8080/user")
            .then(res => res.json())
            .then(res => {
                if (res) {
                    res.forEach(e => {
                        if (e.id === use.id) {
                            setFoundUser(e)
                            return
                        }
                    });
                }
            })
    }
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('TEACHER')))
    }, [])
    useEffect(() => {
        getData()
    }, [use])
    const handleEdit = async () => {
        try {
            const response = await fetch(`http://localhost:8080/user/${foundUser.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(useEdit),
            });
            if (response.ok) {
                console.log('User information updated successfully!');
                getData()
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
        setModalOrderDetail(false) 
    };
    const handleInputChange = (e, fieldName) => {
        const value = e.target.value;
        setUserEdit(prevState => ({
            ...prevState,
            [fieldName]: value, 
        }));
    };
    return (
        <>
            <LayoutTeacher>
                <div className={style.titleBar}>
                    <div className={style.info}>
                        <h2>ID:{use.id}</h2>
                        <h2>Name:{foundUser?.name}</h2>
                        <h2>Mail:{foundUser?.mail}</h2>
                        <h2>Birth:{foundUser?.birth}</h2>
                        <h2>Phone:{foundUser?.phone}</h2>
                        <h2>Address:{foundUser?.address}</h2>
                        <button onClick={() => { setModalOrderDetail(true) }} className={style.button} >Edit Profile</button>
                    </div>
                </div>
                <Modal title="Edit"
                    okType="primary text-black border-gray-700"
                    open={orderModalDetail}
                    onOk={handleEdit}
                    width={500}
                    onCancel={() => { setModalOrderDetail(false) }}>
                    Name
                    <Input onChange={(e) => handleInputChange(e, 'name')} placeholder="Name" defaultValue={foundUser?.name} />
                    Mail
                    <Input onChange={(e) => handleInputChange(e, 'name')} placeholder="Mail" defaultValue={foundUser?.mail} />
                    Birth
                    <Input  onChange={(e) => handleInputChange(e, 'birth')} placeholder="Birth" defaultValue={foundUser?.birth} />
                    Phone
                    <Input onChange={(e) => handleInputChange(e, 'phone')}  placeholder="Phone" defaultValue={foundUser?.phone} />
                    Address
                    <Input onChange={(e) => handleInputChange(e, 'address')}  placeholder="Address" defaultValue={foundUser?.address} />

                </Modal>
            </LayoutTeacher>
        </>
    )
}