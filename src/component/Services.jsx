import React from 'react'
import {
    IoTimeSharp
} from 'react-icons/io5'
import { FiPhoneCall
} from 'react-icons/fi';
import { MdOutlineMiscellaneousServices
} from 'react-icons/md'
function Services() {
    return (
        <div className='servicecontainer'
            style={{
                maxWidth: "100vw",
                maxHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                padding:"0px 0px 50px 0px"
            }}>
            <h1>Services</h1>
            <div className="sectioncontainer"
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    margin: "50px 0px",
                    color: "rgb(255,255,255,0.6)"
                    
                }}>
                <div className="column"
                    style={{
                        maxWidth: "300px",
                        height: "250px",
                         backgroundColor: "black",
                        // border:"1px solid black",
                        borderRadius: "10px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                    <div className="iconconatiner" style={{
                        position:"relative",
                        top:"-20px",
                        backgroundColor:"black",
                        borderRadius:"50%",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center"
                        // margin:"-10px"
                    }}>
                        <IoTimeSharp fontSize={50} color="#229954 "/>
                    </div>

                    <p style={{
                        padding: "0px 40px 0px 40px",
                        textAlign: "justify"
                    }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
                </div>
                <div className="column"
                    style={{
                        maxWidth: "300px",
                        height: "250px",
                        backgroundColor: "black",
                        borderRadius: "10px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent:"flex-start"
                    }}>
                    <div className="iconconatiner" style={{
                        position: "relative",
                        top: "-20px",
                        backgroundColor: "black",
                        width:"60px",
                        height:"60px",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                        // margin:"-10px"
                    }}>
                        <FiPhoneCall fontSize={40} color="#229954 " />
                    </div>
                    <p style={{
                        padding: "0px 40px 0px 40px",
                        textAlign: "justify"
                    }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
                </div>
                <div className="column"
                    style={{
                        maxWidth: "300px",
                        height: "250px",
                        backgroundColor: "black",
                        borderRadius: "10px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                    <div className="iconconatiner" style={{
                        position: "relative",
                        top: "-20px",
                        backgroundColor: "black",
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                        // margin:"-10px"
                    }}>
                        <MdOutlineMiscellaneousServices fontSize={40} color="#229954 " />
                    </div>
                    <p style={{
                        padding: "0px 40px 0px 40px",
                        textAlign: "justify"
                    }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</p>
                </div>
            </div>
        </div>
    )
}

export default Services