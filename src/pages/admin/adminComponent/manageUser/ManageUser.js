import React, { useEffect, useRef, useState } from "react";
import style from "./manageUser.module.css";
export default function ManageUser(props) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [err, setErr] = useState("");
  const [search, setSearch] = useState("");
  const [edit, setEdit] = useState('');
  const [revealPass, setRevealPass] = useState(true);
  const refName = useRef("");
  const refPass = useRef("");
  const refRole = useRef("");
  const resetForm = () =>{
    setEdit('');
    refName.current.value ='';
    refPass.current.value ='';
    refRole.current.value ='';
  }
  const editUser = e => {
    refName.current.focus();
    refName.current.value = e.username;
    refPass.current.value = e.password;
    refRole.current.value = e.role;
    setEdit(e.id)
  };
  const handleForm = e => {
    e.preventDefault();
    let flag = true;
    const form = e.target;
    const userName = form.elements.username.value;
    const password = form.elements.password.value;
    const role = form.elements.role.value;
    let id = "";
    data.forEach(user => {
      if (user.username === userName && !edit) {
        flag = false;
        return setErr("Username Existed!");
      }
    });
    if (flag) {
      let loop = true;
      switch (role) {
        case "STUDENT":
          do {
            id = "QE" + Math.floor(Math.random() * 1000);
            for (let i = 0; i < data.length; i++) {
              const element = data[i];
              if (element.id === id) {
                loop = false;
              }
            }
          } while (!loop);
          break;
        case "ADMIN":
          do {
            id = "AD" + Math.floor(Math.random() * 1000);
            for (let i = 0; i < data.length; i++) {
              const element = data[i];
              if (element.id === id) {
                loop = false;
              }
            }
          } while (!loop);
          break;
        default:
          do {
            id = "FE" + Math.floor(Math.random() * 1000);
            for (let i = 0; i < data.length; i++) {
              const element = data[i];
              if (element.id === id) {
                loop = false;
              }
            }
          } while (!loop);
          break;
      }
      if(edit) id = edit;
      const user = {
        id: id,
        username: userName,
        password: password,
        role: role,
      };
      const addDB2 = {
        id: id,
        name : 'None',
        username: userName,
        mail: 'None',
        address: 'None',
        birth: 'None',
        phone: 'None',
        classID:[]
      }
      if (edit) {
        fetch(`http://localhost:8000/login/${edit}`, {
          method: "PUT",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(response => response.json())
          .then(data => {
            console.log("Updated data:", data);
            setEdit('');
            refName.current.value ='';
            refPass.current.value ='';
            refRole.current.value ='';
            getData()
          })
          .catch(error => {
            setEdit('')
            console.error("Error:", error);
          });


        fetch(`http://localhost:8080/user/${edit}`, {
          method: "PUT",
          body: JSON.stringify(addDB2),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(response => response.json())
          .then(data => {
            console.log("Updated data:", data);
            setEdit('');
            refName.current.value ='';
            refPass.current.value ='';
            refRole.current.value ='';
            getData()
          })
          .catch(error => {
            setEdit('')
            console.error("Error:", error);
          });
      }else{
        fetch("http://localhost:8000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
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
          if (role !== 'ADMIN') {
            fetch("http://localhost:8080/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(addDB2),
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
    }
  };
  const getData = () => {
    fetch("http://localhost:8000/login")
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.log(err));
  };
  const removeUser = e => {
    fetch(`http://localhost:8000/login/${e}`, { method: "DELETE" })
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



      fetch(`http://localhost:8080/user/${e}`, { method: "DELETE" })
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
    return;
  };
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
        item.username.toLowerCase().includes(search.toLowerCase())
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
            placeholder="UserName"
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
            <h3>User List</h3>
          </div>
          <div className={style.userList}>
            <table>
              <thead>
                <tr>
                  <th>UserID</th>
                  <th>Username</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filter.length ? (
                  filter.map((user, index) => {
                    return (
                      <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.role}</td>
                        <td>
                          <button
                            className={style.bttn}
                            onClick={() => {
                              editUser(user);
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
                              removeUser(user.id);
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
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className={style.form}>
          <div className={style.header}>
            <h3>Add User</h3>
          </div>
          <form onSubmit={e => handleForm(e)}>
            <div className={style.field}>
              <label htmlFor="username">Username:</label>
              <input
                ref={refName}
                required
                type="text"
                name="username"
                pattern="[A-Za-z0-9]+@fpt.com"
                minLength={12}
                title="Username must have @fpt.com and only contains number or characters and have Atleast 5 characters before @fpt.com"
                id="username"
                placeholder="Username"
                onChange={() => {
                  setErr("");
                }}
              />
            </div>
            <div className={style.field}>
              <label htmlFor="password">Password:</label>
              <input
                ref={refPass}
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                required
              />
              <div
                onClick={() => {
                  if (refPass.current.type === "password") {
                    refPass.current.type = "text";
                    setRevealPass(false)
                  } else {
                    refPass.current.type = "password";
                    setRevealPass(true)
                  }
                    
                }}
              >
                {revealPass ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-eye-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-eye-slash-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                  </svg>
                )}
              </div>
            </div>
            <div className={style.field}>
              <label htmlFor="role">Role:</label>
              <select name="role" ref={refRole} id="role">
                <option value="ADMIN">ADMIN</option>
                <option value="TEACHER">TEACHER</option>
                <option value="STUDENT">STUDENT</option>
              </select>
            </div>
            <div className={style.submit}>
              <button>Submit</button>
              <button type="button" onClick={resetForm}>Cancel</button>
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
