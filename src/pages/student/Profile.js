import React, { useEffect, useState, useRef } from "react";
import style from "./Profile.module.css"
export default function Profile() {
    const data = localStorage.getItem('STUDENT')
    const student = JSON.parse(data)
    const [studentInfo, setStudentInfo] = useState([])
    const [button, setButton] = useState('')
    const [editing, setEditing] = useState(true);
    const nameRef = useRef();
    const birthRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();
    const [cancel, setCancel] = useState();
    const [border, setBorder] = useState();

    useEffect(() => {
        setButton('Edit Profile')
        setBorder('none')
        fetch("http://localhost:8080/user")
            .then(res => res.json())
            .then(res => {
                console.log(student);
                if (res) {
                    res.forEach(e => {
                        if (e.id === student.id) {
                            setStudentInfo(e)
                            console.log('asdfasd');
                            return
                        }
                    });
                }
            })
    }, [])
    const handleForm = (e) => {
        e.preventDefault();
        switch (button) {
            case 'Edit Profile':
                {
                    setEditing(!editing);
                    setBorder('1px solid white')
                    setButton('Save')
                    setCancel('Cancel')
                    break
                }
            case 'Save':
                {
                    updateForm();
                    setEditing(!editing)
                    setButton('Edit Profile')
                    setBorder('none')
                    setCancel(null)
                    window.location.reload();
                    break
                }
            default:
                break;
        }

    }
    const handleCancel = () => {
        setEditing(!editing)
        setButton('Edit Profile')
        setBorder('none')
        setCancel(null)
        window.location.reload();
    }
    const updateForm = () => {
        const updateData = {}
        updateData.classID = studentInfo.classID
        updateData.username = studentInfo.username
        updateData.mail = studentInfo.mail
        nameRef.current.value === "" ? updateData.name = studentInfo.name : updateData.name = nameRef.current.value
        birthRef.current.value === "" ? updateData.birth = studentInfo.birth : updateData.birth = birthRef.current.value
        phoneRef.current.value === "" ? updateData.phone = studentInfo.phone : updateData.phone = phoneRef.current.value
        addressRef.current.value === '' ? updateData.address = studentInfo.address : updateData.address = addressRef.current.value

        fetch("http://localhost:8080/user/" + studentInfo.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateData)
        }).then(alert('Update Successful'))
    }
    return (
        <div className={style.container}>
            <div className={style.profile} >
                <h2> ID: {studentInfo.id} </h2>
                <form>
                    <div className={style.profileDetail}>
                        <label htmlFor="name">Name:  </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder={studentInfo.name}
                            disabled={editing}
                            ref={nameRef}
                            className={editing ? '' : style.animation}
                            style={{ border: border }}
                        />
                    </div>
                    <div className={style.profileDetail}>
                        <div htmlFor="class"> Mail:   {studentInfo.mail}</div>
                    </div>
                    <div className={style.profileDetail}>
                        <div htmlFor="class"> Class:   {studentInfo.classID}</div>
                    </div>
                    <div className={style.profileDetail}>
                        <label htmlFor="birth">Birth:  </label>
                        <input
                            type="text"
                            name="birth"
                            id="birth"
                            placeholder={studentInfo.birth}
                            disabled={editing}
                            ref={birthRef}
                            className={editing ? '' : style.animation}
                            style={{ border: border }} />
                    </div>
                    <div className={style.profileDetail}>
                        <label htmlFor="phone">Phone:  </label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder={studentInfo.phone}
                            disabled={editing}
                            ref={phoneRef}
                            className={editing ? '' : style.animation}
                            style={{ border: border }} />
                    </div>
                    <div className={style.profileDetail}>
                        <label htmlFor="address">Address:  </label>
                        <input
                            type="text"
                            name="address"
                            id="address"
                            placeholder={studentInfo.address}
                            disabled={editing}
                            ref={addressRef}
                            className={editing ? '' : style.animation}
                            style={{ border: border }} />
                    </div>
                    <button className={style.button} onClick={handleForm}> {button} </button>
                    {cancel && <button className={style.button} onClick={handleCancel} > {cancel} </button>}
                </form>



            </div>


        </ div>
    )
}