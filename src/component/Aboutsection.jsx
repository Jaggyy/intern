import React from 'react'

function Aboutsection() {
    return (
        <div className='about'
            style={{
                maxWidth: "100vw",
                MaxHeight: "80vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "80px 100px"
            }}>
            <h1 style={{
                fontSize:"35px"
            }}>About Us</h1>
            <p style={{
                textAlign:"justify",
                padding:"20px 100px",
                fontSize:"23px"
            }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    )
}

export default Aboutsection