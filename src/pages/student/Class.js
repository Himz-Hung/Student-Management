import { useEffect, useState } from "react";
import React from "react";
import style from "./Class.module.css"

export default function Class() {
    const [listClass, setListClass] = useState([])
    const [flag, setFlag] = useState();
    const [classID, setClassID] = useState()
    const data = localStorage.getItem('STUDENT')
    const [student, setStudent] = useState()
    const [listStudent, setListStudent] = useState([]);
    const [flag2, setFlag2] = useState()
    const [flag3, setFlag3] = useState()
    const [filtered, setFiltered] = useState([])
    const [listSubject, setListSubject] = useState([])
    const [subject, setSubject] = useState()
    useEffect(() => {
        setFlag(true)
        fetch("http://localhost:8080/class")
            .then(res => res.json())
            .then(res => {
                if (res) {
                    setListClass(res)
                }
            })
        fetch("http://localhost:8080/user")
            .then(res => res.json())
            .then(res => {
                const s = JSON.parse(data)
                res.forEach(st => {
                    if (st.id === s.id) {
                        setStudent(st)
                    }
                })
            })
        fetch("http://localhost:8080/user")
            .then(res => res.json())
            .then(res => {
                setListStudent(res)
            })
        fetch("http://localhost:8080/subject")
            .then(res => res.json())
            .then(res => {
                setListSubject(res)
                console.log(listSubject)
            })

    }, [])
    const handleClass = (id) => {
        setClassID(id)
        setFlag(false)
        setFlag2(false)
        setFlag3(false)
    }
    const handleViewSchedule = () => {
        setFlag3(false)
        const classs = listClass.find(c => c.id === classID)
        const subjectID = classs.subjectID
        listSubject.forEach(s => {
            if (s.subjectID === subjectID) {
                setSubject(s)
            }
        })
        const index = classs.studentID.indexOf(student.id)
        console.log(index)
        if (index !== -1) {
            setFlag2(false)
            setFlag3(true)
        } else {
            setFlag3(false)
            alert('You must join class to view schedule')
            return
        }
    }

    const ShowSchedule = () => {
        if (flag3 === false) { return }
        return (
            <table className={style.fix}>
                <thead>
                    <tr>
                        <th> Class </th>
                        <th> Schedule </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> {subject.name} </td>
                        <td> {subject.dateTime}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
    const handleRegister = () => {
        let flag1 = true
        const classs = listClass.find(c => c.id === classID)
        classs.studentID.forEach(s => {
            if (s === student.id) {
                flag1 = false

            }
        });
        student.classID.forEach(s => {
            if (s === classID) {
                flag1 = false

            }
        })

        if (flag1 === true) {
            classs.studentID.push(student.id)
            student.classID.push(classs.id)
            fetch("http://localhost:8080/class/" + classs.id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(classs)
            }).then(res => {
                alert("added")
            }

            )
            fetch("http://localhost:8080/user/" + student.id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(student)
            }).then(res => {

            }

            )
            window.location.reload();

        } else { alert('You are already in class' + classs.id) }

    }
    const handleUnRegister = () => {
        const classs = listClass.find(c => c.id === classID)
        if (classs) {
            const index = classs.studentID.indexOf(student.id);
            if (index !== -1) {

                classs.studentID.splice(index, 1);
                fetch("http://localhost:8080/class/" + classs.id, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(classs)
                }).then(res => {
                    alert('Unregister Successful')
                    setFlag2(false)
                }

                )

            } else {
                alert('You are not in class  ' + classID);
            }
            const index2 = student.classID.indexOf(classs.id)
            if (index2 !== -1) {
                student.classID.splice(index2, 1)
                fetch("http://localhost:8080/user/" + student.id, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(student)
                }).then()
                window.location.reload();
            }

        } else {
            console.log('Class not found');
        }


    }
    const back = () => {
        setFlag(true);
        setClassID(null)
        setFlag2(false)
        setFlag3(false)
    }
    const handleViewListStudent = () => {
        setFlag3(false)
        const classs = listClass.find(c => c.id === classID);
        setFlag2(false)
        const index = classs.studentID.indexOf(student.id);
        if (index !== -1) {
            try {
                filtered.splice(0, filtered.length)
                console.log(filtered)
                listStudent.forEach(s => {
                    s.classID.forEach(c => {
                        if (c === classs.id) {
                            filtered.push(s)
                            console.log(filtered)
                            console.log("fff")
                        }
                    })
                })
                setFlag2(true)
            } catch (error) {
                console.log("Error fetching or processing data:", error);
            }
        } else {
            alert('You must in class to see list students')
        }
    };


    const ShowListStudent = () => {
        { if (flag2 === false) { return } }
        { if (filtered.length === 0) return }
        return (
            <div className= {style.containTable} >
                <table className={style.table}>
                <thead>
                    <tr>
                        <th scope="col">StudentID</th>
                        <th scope="col">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filtered.map(s => (
                            <tr key={s.id}>
                                <td>{s.id}</td>
                                <td> {s.name} </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
           
        )
    }

    const Show = () => {
        return (
            <div className={style.listClass}>
                {listClass.map(classs => (
                    <div key={classs.id} >
                        <button className={style.button} onClick={() => handleClass(classs.id)} >
                            {classs.id}
                        </button>
                    </div>))
                }
            </div>


        )

    }
    const ClassDetail = () => {

        return (
            <div className={style.over}>
                <div className={style.listClass}>
                <button className={style.button} onClick={handleRegister}> Register </button>
                <button className={style.button} onClick={handleUnRegister}> Unregister </button>
                <button className={style.button} onClick={handleViewListStudent}> View Students </button>
                <button className={style.button} onClick={handleViewSchedule} > View Schedule </button>
                <button className={style.button} onClick={back}> Back </button>
                    
                </div>
               
                {
                    flag2 ?  <ShowListStudent /> : null
                }
                {
                    flag3 ?  <ShowSchedule /> : null
                }

            </div>
        )
    }

    return (
        <div className={style.container}>
            <h4> List Class </h4>
            {
                flag ? <Show /> : <ClassDetail />
            }
        </div>
    )
}