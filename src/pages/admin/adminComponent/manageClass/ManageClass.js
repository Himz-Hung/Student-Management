import React, { useEffect, useRef, useState } from "react";
import style from "./manageClass.module.css";
export default function ManageClass(props) {
  const [data, setData] = useState([]);
  const [dataLogin, setDataLogin] = useState([]);
  const [dataSubject, setDataSubject] = useState([]);
  const [dataUser, setDataUser] = useState([]);
  const [dataTeacher, setDataTeacher] = useState([]);
  const [filter, setFilter] = useState([]);
  const [err, setErr] = useState("");
  const [search, setSearch] = useState("");
  const [edit, setEdit] = useState("");
  const [changeTeacher, setChangeTeacher] = useState('');
  const refClass = useRef("");
  const refTeacher = useRef("");
  const refSubject = useRef("");
  const resetForm = () => {
    setEdit("");
    refClass.current.value = "";
    refClass.current.disabled = "false";
    refSubject.current.value = "";
    refTeacher.current.value = "";
  };
  const editClass = e => {
    console.log(e);
    setChangeTeacher(e.teacherID);
    refTeacher.current.focus();
    refClass.current.value = e.id;
    refClass.current.disabled = "true";
    refTeacher.current.value = e.teacherID;
    refSubject.current.value = e.subjectID;
    setEdit(e.id);
  };
  const handleForm = e => {
    e.preventDefault();
    let flag = true;
    const form = e.target;
    const classID = form.elements.classID.value;
    const teacherID = form.elements.teacherID.value;
    const subjectID = form.elements.subjectID.value;
    data.forEach(e => {
      if (e.id === classID && !edit) {
        flag = false;
        return setErr("Class Existed!");
      }
    });

    if (flag) {
      const classReq = {
        id: classID,
        teacherID: teacherID,
        studentID: [],
        subjectID: subjectID,
      };
      console.log(classReq);
      if (edit) {
        if (teacherID !== changeTeacher) {
          let updateUser;
          dataUser.forEach(i => {
            if (i.id === teacherID) {
              updateUser = {
                ...i,
                classID: [...i.classID, classID],
              };
            }
          });
          fetch(`http://localhost:8080/user/${teacherID}`, {
            method: "PUT",
            body: JSON.stringify(updateUser),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then(response => response.json())
            .then(data => {
              console.log("Updated data:", data);
            })
            .catch(error => {
              console.error("Error:", error);
            });
          dataUser.forEach(i => {
            if (i.id === changeTeacher) {
              let arr = [...i.classID];
              arr.splice(arr.indexOf(e), 1);
              const updateUser = {
                ...i,
                classID: [...arr],
              };
              fetch(`http://localhost:8080/user/${changeTeacher}`, {
                method: "PUT",
                body: JSON.stringify(updateUser),
                headers: {
                  "Content-Type": "application/json",
                },
              })
                .then(response => response.json())
                .then(data => {
                  console.log("Updated data:", data);
                })
                .catch(error => {
                  setEdit("");
                  console.error("Error:", error);
                });
            }
          });
        }
        fetch(`http://localhost:8080/class/${edit}`, {
          method: "PUT",
          body: JSON.stringify(classReq),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(response => response.json())
          .then(data => {
            console.log("Updated data:", data);
            setEdit("");
            refClass.current.value = "";
            refClass.current.disabled = "false";
            refSubject.current.value = "";
            refTeacher.current.value = "";
            getData();
          })
          .catch(error => {
            setEdit("");
            console.error("Error:", error);
          });
      } else {
        let updateUser;
        dataUser.forEach(e => {
          if (e.id === teacherID) {
            updateUser = {
              ...e,
              classID: [...e.classID, classID],
            };
          }
        });
        fetch(`http://localhost:8080/user/${teacherID}`, {
          method: "PUT",
          body: JSON.stringify(updateUser),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(response => response.json())
          .then(data => {
            console.log("Updated data:", data);
          })
          .catch(error => {
            console.error("Error:", error);
          });
        fetch("http://localhost:8080/class", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(classReq),
        })
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error("Failed to post user to the server");
            }
          })
          .then(data => {
            console.log("User posted successfully:", data);
            getData();
          })
          .catch(error => {
            console.error("Error:", error);
          });
      }
    }
  };
  const getData = () => {
    fetch("http://localhost:8080/class")
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.log(err));
    fetch("http://localhost:8000/login")
      .then(res => res.json())
      .then(res => {
        let arr = [...res];
        setDataLogin(arr.filter(e => e.role === "TEACHER"));
        console.log(dataLogin);
      })
      .catch(err => console.log(err));
    fetch("http://localhost:8080/subject")
      .then(res => res.json())
      .then(res => setDataSubject(res))
      .catch(err => console.log(err));
    fetch("http://localhost:8080/user")
      .then(res => res.json())
      .then(res => setDataUser(res))
      .catch(err => console.log(err));
  };
  const removeClass = (e, teacherID) => {
    fetch(`http://localhost:8080/class/${e}`, { method: "DELETE" })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to delete user to the server");
        }
      })
      .then(data => {
        console.log("User deleted successfully:", data);
        getData();
      })
      .catch(error => {
        console.error("Error:", error);
      });
    dataUser.forEach(i => {
      if (i.id === teacherID) {
        let arr = [...i.classID];
        arr.splice(arr.indexOf(e), 1);
        const updateUser = {
          ...i,
          classID: [...arr],
        };
        fetch(`http://localhost:8080/user/${teacherID}`, {
          method: "PUT",
          body: JSON.stringify(updateUser),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(response => response.json())
          .then(data => {
            console.log("Updated data:", data);
          })
          .catch(error => {
            setEdit("");
            console.error("Error:", error);
          });
      }
    });
    return;
  };
  useEffect(() => {
    if (!dataTeacher.length) {
      dataLogin.forEach(e => {
        dataUser.forEach(user => {
          if (e.id === user.id) {
            setDataTeacher(prev => [...prev, user]);
          }
        });
      });
    }
  }, [dataLogin, dataUser]);
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    setFilter(data);
  }, [data]);
  useEffect(() => {
    if (!search.length) {
      setFilter(data);
    } else {
      const searchResults = data.filter(item =>
        item.id.toLowerCase().includes(search.toLowerCase())
      );
      setFilter(searchResults);
    }
  }, [search]);
  return (
    <>
      <div className={style.container}>
        <div className={style.search}>
          <input
            type="text"
            placeholder="ClassID"
            onChange={e => {
              setSearch(e.target.value);
            }}
          />
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
        </div>
        <div className={style.content}>
          <div className={style.header}>
            <h3>Class List</h3>
          </div>
          <div className={style.userList}>
            <table>
              <thead>
                <tr>
                  <th>ClassID</th>
                  <th>TeacherID</th>
                  <th>Number of Students</th>
                  <th>SubjectID</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filter.length ? (
                  filter.map((e, index) => {
                    return (
                      <tr key={index}>
                        <td>{e.id}</td>
                        <td>{e.teacherID}</td>
                        <td>{e.studentID.length}</td>
                        <td>{e.subjectID}</td>
                        <td>
                          <button
                            className={style.bttn}
                            onClick={() => {
                              editClass(e);
                            }}
                          >
                            Edit
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-pencil-square"
                              viewBox="0 0 16 16"
                            >
                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                              <path
                                fill-rule="evenodd"
                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                              />
                            </svg>
                          </button>
                          <button
                            onClick={() => {
                              removeClass(e.id, e.teacherID);
                            }}
                            className={style.bttn}
                          >
                            Delete
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-person-x"
                              viewBox="0 0 16 16"
                            >
                              <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
                              <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.646-4.854.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 .708-.708Z" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td>None</td>
                    <td>None</td>
                    <td>None</td>
                    <td>None</td>
                    <td>None</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className={style.form}>
          <div className={style.header}>
            <h3>Add Class</h3>
          </div>
          <form onSubmit={e => handleForm(e)}>
            <div className={style.field}>
              <label htmlFor="classID">ClassID:</label>
              <input
                ref={refClass}
                required
                type="text"
                name="classID"
                minLength={5}
                id="classID"
                placeholder="ClassID"
                onChange={() => {
                  setErr("");
                }}
              />
            </div>
            <div className={style.field}>
              <label htmlFor="teacherID">TeacherId:</label>
              <select name="teacherID" id="teacherID" ref={refTeacher}>
                {dataTeacher.map((e, key) => {
                  return (
                    <option value={e.id} key={key}>
                      {e.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className={style.field}>
              <label htmlFor="subjectID">Subject:</label>
              <select name="subjectID" id="subjectID" ref={refSubject}>
                {dataSubject.map((e, key) => {
                  return (
                    <option value={e.subjectID} key={key}>
                      {e.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className={style.submit}>
              <button>Submit</button>
              <button type="button" onClick={resetForm}>
                Cancel
              </button>
            </div>
            {err.length ? (
              <div className={style.alert}>
                <h4>{err}</h4>
              </div>
            ) : (
              <></>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
