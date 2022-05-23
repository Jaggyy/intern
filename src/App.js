import React, { useEffect } from 'react'
import './App.css';
import Header from './component/Header';
import Banner from './component/Banner';
import Aboutsection from './component/Aboutsection';
import Services from './component/Services';
import Contactform from './component/Contactform';
import Footer from './component/Footer';
import Testimonial from './component/Testimonial';
import { useDispatch, useSelector } from 'react-redux';
import Clientslider from './component/Clientslider';
import Register from './component/Register';
import axios from 'axios';

function App() {
  const sucess = useSelector(state => state.success)
  const selected = useSelector(state => state.form)
  const error = useSelector(state => state.errormess)
  const user = useSelector(state=> state.user)
  const token = localStorage.getItem("token")
  const dispatch = useDispatch()

  async function loggedin(token) {
    const data = await axios.post("https://interpro.herokuapp.com/user/verify", {
      token: token
    }).then(result => {
      console.log(result.data.user)
      dispatch({
        type: "user",
        data: {
          user: true ,
          data: result.data.user,
        }
      })
    })
    return data
  }
  useEffect(() => {
    loggedin(token)
  }, [])

  return (

    <div className="App">
      <div className="errorcontaier"
        style={{
          position: "fixed",
          top: "12%",
          maxWidth: "450px",
          right: "-300px",
          minHeight: "90px",
          transform: `${error ? "translateX(-300px)" : `${sucess ? "translateX(-300px)" : "translateX(100px)"}`}`,
          zIndex: "100",
          backgroundColor: "white",
          boxShadow: "2px 1px 4px 2px rgb(0,0,0,0.8)",
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          transition: "0.5s all ease-in"

        }}>
        <div className="corner"
          style={{
            minWidth: "5%",
            minHeight: "90px",
            backgroundColor: `${error ? "red" : "#228854"}`,
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
          }}>

        </div>
        <div className='text' style={{
          minWidth: "90%",
          padding: "10px 40px",
          color: "rgb(0,0,0,0.8)",
          fontSize: "20px"
        }}>
          {`${error ? error : sucess}`}
        </div>
      </div>
      <div className='section'
        style={{
          minWidth: "100vw",
          transform: `${selected ? "translateX(-40vw)" : "translateX(0vw)"}`,
          transition: "0.3s all ease-in",
          opacity: `${selected ? "0.4" : "1"}`,
          overflowY: `${selected && "hidden"}`

        }}>

        <Header />
        <Banner />
        <Aboutsection />
        <Services />
        <Clientslider />
        <Testimonial />
        <Contactform />
        <Footer />
      </div>
      <Register />
    </div>
  );
}

export default App;
