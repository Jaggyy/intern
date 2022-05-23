import React, { useState, useEffect } from 'react'
import brand1 from '../image/brands/instag.png'
import brand2 from '../image/brands/puma.png'
import brand3 from '../image/brands/total.png'
import brand4 from '../image/brands/Acdc.png'
import brand5 from '../image/brands/metal.png'
import {
    BsArrowRightCircle, BsArrowLeftCircle
} from 'react-icons/bs'


let i = 0
function Clientslider() {
    const [slider, setSlider] = useState(0)
    const clientimage = [brand2, brand1, brand3, brand4, brand5]


    const transformleft = () => {
        if (i === 0) {
            setSlider(slider - (clientimage.length - 1) * 100)
            i = clientimage.length - 1
        }
        else {
            setSlider(slider + 100)
            i--
        }
    }
    const transformright = () => {
        if (i < clientimage.length - 1) {
            setSlider(slider - 100)
            i++
        } else {
            setSlider(0)
            i = 0
        }
    }

    return (
        <div className="clientshowcase"
            style={{
                maxWidth: "100vw",
                minHeight: "90vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly"
            }}>
            <h1><u style={{
                color: "#228854"
            }}>Our Clients</u></h1>
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
                        transform: `translateX(-100px)`,
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
                        margin: "40px 0px",
                        display: "flex",
                        rowGap: "20px",
                        columnGap: "100px",

                        width: "50%",
                        overflow: "hidden",
                        height: "100%",
                        padding: "10px 10px"
                    }}>
                    {clientimage.map(client => (
                        <div className="client"
                            style={{
                                width: "250px",
                                height: "200px",
                                display: 'flex',
                                justifyContent: "center",
                                alignItems: "center",
                                transform: `translateX(${slider}%)`,
                                transition: "0.4s all ease-in"
                            }}>
                            <img src={client}
                                width="200px"
                                style={{
                                    objectFit: "contain",
                                    maxHeight: "150px"
                                }} />
                        </div>
                    ))}

                    {/* <div className="client"
                    style={{
                        width: "250px",
                        height: "200px",
                        display:'flex',
                        justifyContent:"center",
                        alignItems:"center"
                       
                    }}>
                    <img src={brand1} width="200px"/>
                </div>
                <div className="client"
                    style={{
                        width: "250px",
                        height: "200px",
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: "center"
                       
                    }}>
                    <img src={brand3} width="120px"/>
                </div>
              */}
                </div>
                <div className="testoption"
                    style={{
                        position: "relative",
                        transform: `translateX(100px)`,
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

export default Clientslider