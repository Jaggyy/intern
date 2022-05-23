import React, { useState } from 'react'
import subscribelogo from '../image/undraw_subscriber_re_om92.svg'
import { IoMdSend } from 'react-icons/io'
import logo from '../image/JS-logos_white.png'
import axios from 'axios'
import { useDispatch } from 'react-redux'

function Footer() {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")

    async function subscribe() {
        const data = await axios.post("https://interpro.herokuapp.com/user/subscribe", { email: email, }).then(result => {
            setEmail("")
            dispatch({
                type:"success",
                data: `${result.data.data || "none"}`
            })
            setTimeout(() => {
                dispatch({
                    type: "success",
                    data: "",

                })
            }, 3000);
        }).catch(err => {
            dispatch({
                type: "error",
                data: `${err.response.data.data.errors?.email?.message || "Already Subscribed"}`
            })
            console.log(err.response.data.data?.errors?.email?.message)
            setTimeout(() => {
                dispatch({
                    type: "error",
                    data: "",

                })
            }, 3000);
        })
        return data
    }
    const submitcontact = (e) => {
        e.preventDefault()
        if (!email) {
            dispatch({
                type: "error",
                data: "Email not provided",
            })
            setTimeout(() => {
                dispatch({
                    type: "error",
                    data: "",

                })
            }, 8000);
        } else {
            subscribe()
        }
    }

    return (
        <div className='Footer'
            style={{
                minHeight: "50vh",
                maxWidth: "100vw",
                backgroundColor: "black",
                padding: "40px 70px",

            }}>
            <div className="footertopsectio"
                style={{
                    height: "50%",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                }}>
                <div className="topleft">
                    <p style={{
                        fontSize: "25px",
                        color: "#229954"
                    }}>Subscribe to get latest update</p>
                    <div className="footerinput"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            margin: "20px 0px"
                        }}>
                        <input type="text" placeholder='Email address'
                            style={{
                                width: "300px",
                                height: "40px",
                                border: "none",
                                padding: "0px 0px",
                                background: "transparent",
                                borderBottom: "1px solid #229954",
                                color: "rgb(255,255,255,0.5)",
                                fontSize: "17px",
                                outline: "none"
                            }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <div className="iconsconatiner" style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100px",
                            height: "41px",
                            backgroundColor: "#229954",
                            cursor: "pointer"
                        }}
                            onClick={submitcontact}>
                            <IoMdSend color='white' backgroundColor="white"
                                fontSize={28} />
                        </div>
                    </div>

                </div>
                <div className="topright">
                    <img src={subscribelogo} alt=""
                        style={{
                            width: "300px"
                        }} />
                </div>
            </div>
            <div className="footerbottomsection"
                style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    padding: "30px 0px"
                }}>
                <div className="bottomsection"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column"
                    }}>
                    <div className="infosextion"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            margin: "10px 0px",
                            color: "rgb(255,255,255,0.6)"
                        }}>
                        <img src={logo} alt="" width="40px" />
                        <h1 style={{
                            fontSize: "19px",
                            margin: "0px 10px"
                        }}>Lorem Ipsum</h1>
                    </div>
                    <p style={{
                        fontSize: "15px",
                        color: "rgb(255,255,255,0.4)"
                    }}>Rights Reserved &copy; 2022</p>
                </div>
                <div className="bottomsection"
                    style={{
                        height: "80px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        color: "rgb(255,255,255,0.4)"
                    }}>
                    <p>About</p>
                    <p>Contact Us</p>
                </div>
                <div className="bottomsection"
                    style={{
                        height: "80px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        color: "rgb(255,255,255,0.5)"
                    }}>
                    <p style={{
                        textAlign: "center",
                        margin: "10px 0px",
                        color: "#229954"

                    }}>Follow us on Social media</p>
                    <div className="bottomsocialmedia"
                        style={{
                            display: "flex",
                            width: "300px",
                            justifyContent: "space-evenly",

                        }}>
                        <a href="#" class="fa fa-facebook"
                            style={{
                                color: "rgb(255,255,255,0.7)",
                                textDecoration: "none",
                                fontSize: "24px"
                            }}></a>
                        <a href="#" class="fa fa-twitter"
                            style={{
                                color: "rgb(255,255,255,0.7)",
                                textDecoration: "none",
                                fontSize: "24px"
                            }}></a>
                        <a href="#" class="fa fa-google"
                            style={{
                                color: "rgb(255,255,255,0.7)",
                                textDecoration: "none",
                                fontSize: "24px"
                            }}></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer