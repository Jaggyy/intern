import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

function Register() {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordcon, setPasswordcon] = useState("")
    const [name, setName] = useState("")
    const selected = useSelector(state => state.form)
    const [register, setRegister] = useState(false)

    const login = () => {

        async function login() {
            const loger = await axios.post("https://interpro.herokuapp.com/user/login", {
                email: email,
                password: password
            }).then(result => {
                localStorage.setItem("token", result.data.token)
                window.location.reload()
            }).catch(err => {
                dispatch({
                    type: "error",
                    data: err.response.data.data
                })
                setTimeout(() => {
                    dispatch({
                        type: "error",
                        data: "",

                    })
                }, 3000);
            })
            return loger
        } setTimeout(() => {
            dispatch({
                type: "error",
                data: "",

            })
        }, 3000);
        login()
    }

    const signup = () => {
        if (password.match(/[A-Z]/) && password.match(/[a-z]/) && password.match(/[0-9]/)) {
            async function signup() {
                const loger = await axios.post("https://interpro.herokuapp.com/user/signup", {
                    name: name,
                    email: email,
                    password: password,
                    passwordconfirm: passwordcon
                }).then(result => {
                    localStorage.setItem("token", result.data.token)
                    window.location.reload()
                }).catch(err => {
                    dispatch({
                        type: "error",
                        data: `${err.response.data.data.message || err.response.data.data
                            }`
                    })
                    setTimeout(() => {
                        dispatch({
                            type: "error",
                            data: "",
                        })
                    }, 2000);
                    console.log(err)
                })
                return loger
            }
            signup()
            // }
            // dispatch({
            //     type: "error",
            //     data: "password are not same"
            // })
            // setTimeout(() => {
            //     dispatch({
            //         type: "success",
            //         data: "",
            //     })
            // }, 2000);
        } if (!email || !name) {
            dispatch({
                type: "error",
                data: "Please provide inputs"
            })
            setTimeout(() => {
                dispatch({
                    type: "error",
                    data: "",
                })
            }, 3000);
        }  else {
            dispatch({
                type: "error",
                data: "Please provide password with 1 upper , lower and number"
            })
            setTimeout(() => {
                dispatch({
                    type: "error",
                    data: "",
                })
            }, 3000);
        }
    }
    const passwordshow = () => {
        let show = document.getElementsByClassName("passwordinput")
        console.log(show[0])
        if (show[0].type == "password") {
            show[0].type = "text"
        } else {
            show[0].type = "password"
        }
    }
    return (
        <div className='Login'
            style={{
                maxWidth: "400px",
                maxHeight: "100vh",
                display: "flex",
                padding: "20px 20px",
                flexDirection: "column",
                transform: `${selected ? "translateX(-35vw)" : "translateX(10vw)"}`,
                transition: "0.3s all ease-in"

            }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <h1 style={{
                    color: "#225546"
                }}>{register ? "Register Now" : "Login with Us"}</h1>
                <h1 style={{
                    fontSize: "40px",
                    cursor: "pointer"
                }}
                    onClick={() => {
                        dispatch({
                            type: "form",
                            data: false
                        })
                    }}>x</h1>
            </div>
            <form style={{
                display: "flex",
                height: "100%",
                flexDirection: "column",
                justifyContent: "center",
                margin: "20px 0px",
            }}
                onSubmit={(e) => e.preventDefault()}
                className="register-form">
                {register &&
                    <>
                        <label
                            style={{
                                margin: "5px 0px 5px 0px",
                                transition: "10s all ease-in"
                            }}>Name</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{
                                width: "350px",
                                height: "45px",
                                margin: "5px 0px 10px 0px",
                                padding: "0px 10px",
                                fontSize: "18px"
                            }} required/>
                    </>}

                <label
                    style={{
                        margin: "5px 0px 5px 0px"
                    }}>Email</label>
                <input

                    value={email}

                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                        width: "350px",
                        height: "45px",
                        margin: "5px 0px 10px 0px",
                        padding: "0px 10px",
                        fontSize: "18px",

                    }} required/>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "16px",
                }}>
                    <label
                        style={{
                            margin: "5px 0px 5px 0px"
                        }}>Password</label>
                    <button
                        style={{
                            border: "none",
                            outline: "none",
                            backgroundColor: "transparent",
                            cursor: "pointer"
                        }}
                        onClick={passwordshow}>show password</button>
                </div>

                <input
                    value={password}
                    className='passwordinput'
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                        width: "350px",
                        height: "45px",
                        margin: "5px 0px 10px 0px",
                        padding: "0px 10px",
                        fontSize: "18px"
                    }} required/>
                {register &&
                    <>
                        <label
                            style={{
                                margin: "5px 0px 5px 0px"
                            }}>PasswordConfirm</label>
                        <input
                            type="password"
                            style={{
                                width: "350px",
                                height: "45px",
                                margin: "5px 0px 10px 0px",
                                padding: "0px 10px",
                                fontSize: "18px"
                            }}
                            value={passwordcon}
                            onChange={(e) => setPasswordcon(e.target.value)}
                        required/>
                    </>}
                {register ?
                    <button style={{
                        backgroundColor: " #229954 ",
                        height: "50px",
                        margin: "5px 0px",
                        border: "none",
                        outline: "none",
                        borderRadius: "5px",
                        fontSize: "18px",
                        cursor: "pointer",
                        color: "white"
                    }}
                        onClick={signup}>Sign Up Now</button> :
                    <button style={{
                        backgroundColor: " #229954 ",
                        height: "50px",
                        margin: "5px 0px",
                        border: "none",
                        outline: "none",
                        borderRadius: "5px",
                        fontSize: "18px",
                        cursor: "pointer",
                        color: "white"
                    }}
                        onClick={login}>Login</button>}

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    margin: "10px 0px"
                }}>
                    <a >Forget Password</a>
                    {register ? <p
                        style={{
                            cursor: "pointer"
                        }} onClick={() => {
                            setRegister(false)
                        }}>Login now</p> : <p
                            style={{ cursor: "pointer" }} onClick={() => {
                                setRegister(true)
                            }}>Create one ?</p>}

                </div>
            </form>
        </div>
    )
}

export default Register