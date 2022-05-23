import React, { useState } from 'react'
import {
    BsArrowRightCircle, BsArrowLeftCircle
} from 'react-icons/bs'
import person from '../image/pexels-pixabay-220453.jpg'

let i = 0

function Testimonial() {

    const [slider, setSlider] = useState(0)
    const testimonials = [
        {
            name: "Jonas",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            image: person
        },
        {
            name: "Smith",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            image: person
        },
        {
            name: "Wills",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            image: person
        },
    ]

    const transformleft = () => {
        if (i === 0) {
            setSlider(slider - (testimonials.length - 1) * 100)
            i = testimonials.length - 1
        }
        else {
            setSlider(slider + 100)
            i--
        }
    }
    const transformright = () => {
        if (i < testimonials.length  - 1) {
            setSlider(slider - 100)
            i++
        } else {
            setSlider(0)
            i = 0
        }
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "100vw",
            alignItems: "center",
            minHeight: "70vh",
            margin: "0px 0px 30px 0px"
        }}>
            <h1 style={{
                fontSize: "30px"
            }}>Testimonial</h1>
           <div className="testimonialscontainer"
                style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    // flexDirection:"column",
                    justifyContent: "center",
                    margin: "60px 0px"
                }}>
                <div className="testoption"
                    style={{
                        position: "relative",
                        transform: `translateX(150px)`,
                        // boxShadow: "2px 1px 10px 0px rgb(0, 0, 0, 0.5)",
                        transition: "0.3s all ease-in",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: "1"
                    }}
                    onClick={transformleft}>
                    <BsArrowLeftCircle fontSize={45} />
                </div> 
                <div className="container"
                    style={{
                        width: "60%",
                        height: "400px",
                        display: "flex",
                        overflow: "hidden"
                    }}>
                    {testimonials.map(t => (
                        <div className="testimonial"
                            style={{
                                minWidth: "100%",
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transform: `translateX(${slider}%)`,
                                transition: "0.4s all ease-in"


                            }}>
                            <div className="textinfo"
                                style={{
                                    width: "40%",
                                    minHeight: "60%",
                                    backgroundColor: "white",
                                    padding: "20px 15px",
                                    borderRadius: "10px",
                                    boxShadow: "2px 1px 10px 0px rgb(0, 0, 0, 0.5)",
                                }}>
                                <img src={t.image} alt="" width={"90px"}
                                    style={{
                                        position: "relative",
                                        margin: "-100px",
                                        top: "-90px",
                                        borderRadius: "50%",
                                        left: "65%"
                                    }} />
                                <h1 style={{
                                    color: "#229954",
                                    textAlign: "center",
                                    margin:"20px 0px"
                                }}>{t.name}</h1>
                                <p style={{
                                    textAlign: "justify",
                                    padding: "0px 10px",
                                    fontSize:"18px",
                                    color: "rgb(0,0,0,0.6)"
                                }}>{t.text}</p>
                                <div style={{
                                    width: "100%",
                                    height:"10px",
                                    backgroundColor:"#228854",
                                    position:"relative",
                                    bottom:"-50px",
                                    borderTopRightRadius:"10px",
                                    borderTopLeftRadius: "10px"
                                }}></div>   
                            </div>
                           
                        </div>
                    ))}
                </div>
                <div className="testoption"
                    style={{
                        position: "relative",
                        transform: `translateX(-150px)`,
                        // boxShadow: "2px 1px 10px 0px rgb(0, 0, 0, 0.5)",
                        transition: "0.3s all ease-in",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: "1"
                    }} onClick={transformright}>
                    <BsArrowRightCircle fontSize={45} />
                </div>
            </div>
        </div>
    )
}

export default Testimonial