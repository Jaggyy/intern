import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../image/JS-logos_white.png'

function Header() {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [userinfo, setUserinfo] = useState([])

    useEffect(() => {
        if (user.user) {
            setUserinfo(user.data)
        }
    }, [user])

    return (
        <div className="headerconatiner"
            style={{
                maxWidth: "100vw",
                height: "80px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "white",
                padding: "0px 30px 0px 60px"
            }}>
            <div className="headerlogo">
                <img src={logo} alt=""
                    style={{
                        width: "50px",
                        height: "50px"
                    }} />
            </div>
            <div className="headermiddlelist"
                style={{
                    display: "flex",
                    alignItems: "center",
                    color: "black",
                    width: "30%",
                    justifyContent: "space-between"
                }}>
                <p>Home</p>
                <p>Services</p>
                <p>About Us</p>
            </div>
            <div className="rightoptions"
                style={{
                    display: "flex",
                    alignItems: "center",
                    color: "black",

                    justifyContent: "space-between"
                }}>
                {userinfo.length
                    ?
                    <div style={{
                        display:"flex",
                        minWidth: "230px",
                        alignItems:"center"

                    }}>Hi, {user.data[0].name}  <button onClick={()=>{
                        localStorage.removeItem("token")
                        window.location.reload()
                    }}
                    style={{
                        width:"130px",
                        height:"40px",
                        background:"white",
                        margin:"0px 20px",
                        color:"rgb(22,88,54)",
                        border:"none",
                        fontSize:"19px",
                        border:"1px solid rgb(22,88,56)",
                        borderRadius:"10px"
                    }}>Logout</button></div>

                    :
                    <button style={{
                        width: "130px",
                        height: "40px",
                        backgroundColor: "transparent",
                        border: "none",
                        outline: 'none',
                        color: "black",
                        fontSize: "16px",
                        margin: "0px 20px",
                        cursor: "pointer"
                    }}
                        onClick={() => {
                            dispatch({
                                type: "form",
                                data: true
                            })
                        }}>LogIn</button>
                }
                <button
                    style={{
                        width: "130px",
                        height: "40px",
                        backgroundColor: "black",
                        border: "none",
                        outline: 'none',
                        color: "white",
                        fontSize: "16px",
                        cursor: "pointer"
                    }}>Contact Us</button>
            </div>
        </div>
    )
}

export default Header