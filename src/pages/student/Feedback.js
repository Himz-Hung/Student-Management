import style from "./Feedback.module.css"
import React, { useEffect, useRef, useState } from "react"
export default function Feedback() {
    const titleRef = useRef()
    const contentRef = useRef()
    const feedback = {}
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/feedback")
            .then(res => res.json())
            .then(res => {
                setdata(res)
            })
    }, [])
    const handleFeedback = () => {
        let loop = true
        do {
            feedback.id = "FB" + Math.floor(Math.random() * 1000);
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                if (element.id === feedback.id) {
                    loop = false
                } else {
                    feedback.subtitle = titleRef.current.value
                    feedback.content = contentRef.current.value
                    feedback.sender = JSON.stringify(localStorage.getItem('STUDENT'))
                }

            }
        } while (!loop)
        fetch("http://localhost:8080/feedback", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(feedback)
        }).then(() => alert("Send Feedback Successfully"))

    }
    return (
        <div className={style.container}>
            <form className={style.form}>
                <div className={`${style.formgroup} "form-group"`}>
                    <label htmlFor="title" > Title</label>
                    <input
                        placeholder="Title"
                        ref={titleRef}
                        name="title"
                        id="title"
                        className="form-control"
                    />
                </div>
                <div className={`${style.formgroup} "form-group"`}>
                    <label htmlFor="content" >Content </label>
                    <textarea
                        placeholder="Write your feedback here"
                        ref={contentRef}
                        name="content"
                        id="content"
                        className="form-control"
                        rows= '5'
                    />

                </div>


                <button onClick={handleFeedback} className={style.button} > Send Feedback </button>

            </form>
        </div>
    )
}