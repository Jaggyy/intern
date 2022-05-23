const express = require("express")
const app = express()
const  user = require("./router/router")
const mongoose = require("mongoose")
const cookieParser = require('cookie-parser');
const cors = require("cors");
const dotenv = require("dotenv")

app.use(cors());
app.options('*', cors());

mongoose.connect("mongodb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("db ho gaya connect")
}).catch(err=>{
    console.log(err)
})

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '100kb' }));
app.use(cookieParser());

app.use("/user" , user)

const port  = process.env.PORT || 3000
app.listen(port , ()=>{
    console.log("we are on port 3000")
})

