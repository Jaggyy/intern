const mongoose = require("mongoose")
const validator = require('validator')

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please provide your name"]
    },
    email: {
        type: String,
        required: [true, "Please provide Valid Email"],
        validate: [validator.isEmail, "Please provide Valid Email"]
    },
    message:{
        type:String,
        required:[true , "Please provide your message"]
    }
})

const contacts = mongoose.model("contact", contactSchema);

module.exports = contacts