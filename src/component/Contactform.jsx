import React, { useState  , useEffect} from 'react'
import axios from 'axios'
import { useDispatch , useSelector } from 'react-redux'

function Contactform() {

  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const user = useSelector(state => state.user)
  const [userinfo, setUserinfo] = useState([])

  useEffect(() => {
    if (user.user) {
      setUserinfo(user.data)
    }
  }, [user])
  console.log(userinfo[0])

  async function contact() {
    const data = await axios.post("https://interpro.herokuapp.com/user/contact",
      {
        name: name,
        email: email,
        message: message
      }).then(result => {
        dispatch({
          type: "success",
          data: result.data.data
        })
        setEmail("")
        setName("")
        setMessage("")

        setTimeout(() => {
          dispatch({
            type: "success",
            data: "",

          })
        }, 3000);
      }).catch(err => {
        dispatch({
          type: "error",
          data: "Please provide valid email"
        })
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
    if (!name || !message) {
      dispatch({
        type: "error",
        data: "You missed something",
      })
      setTimeout(() => {
        dispatch({
          type: "error",
          data: "",

        })
      }, 5000);
    } else {

      contact()
    }
  }

  return (
    <div className='contact'
      style={{
        maxWidth: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "50px 0px 50px 0px"
      }}>

      <div className="contact-columns"
        style={{
          padding: "10px 150px"
        }}>
        <h1 style={{
          margin: "5px 0px",
          fontSize: "65px",
          color: " #229954 ",
        }}>WANT TO</h1>
        <h2 style={{
          fontSize: "40px",
          margin: "5px 0px",

        }}><span style={{
          color: " #229954 ",
          fontSize: "54px",
          fontFamily: `'Great Vibes', cursive`,
          margin: "0px 10px 0px 0px",
        }}><u >Tell</u></span> US</h2>
        <h1
          style={{
            margin: "5px 0px",
            fontSize: "55px"
          }}>SOMETHING ?</h1>
      </div>
      <div className="contact-columns"
        style={{
          // maxWidth: "50%",
          // height: "100%",
          background: "black",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          flexDirection: "column",
          padding: "50px 50px",
          color: "rgb(255,255,255,0.5)"
        }}>
        <h1 style={{
          color: " #229954 ",
          fontSize: "35px"
        }}>Lets connect</h1>
        <form style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          margin: "20px 0px"
        }}
          onSubmit={submitcontact}
          className="contactform">
          <label
            style={{
              margin: "5px 0px 5px 0px"
            }}>Name</label>
          <input type="text"
            style={{
              width: "550px",
              height: "45px",
              margin: "5px 0px 10px 0px",
              padding: "0px 10px",
              fontSize: "18px"
            }} value={name}
            onChange={(e) => setName(e.target.value)} required/>
          <label
            style={{
              margin: "5px 0px 5px 0px"
            }}>Email</label>
          <input type="text"
            style={{
              width: "550px",
              height: "45px",
              margin: "5px 0px 10px 0px",
              padding: "0px 10px",
              fontSize: "18px"
            }}

            value={email}
            onChange={(e) => setEmail(e.target.value)} required/>
          <label
            style={{
              margin: "5px 0px 5px 0px"
            }}>Message</label>
          <textarea type="text"
            style={{
              width: "550px",
              height: "145px",
              margin: "5px 0px 10px 0px",
              padding: "10px 10px",
              fontSize: "18px"
            }}
            value={message}
            onChange={(e) => setMessage(e.target.value)} />
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
          }} onClick={submitcontact}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contactform