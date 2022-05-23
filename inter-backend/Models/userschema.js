const mongoose = require("mongoose")
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true , "Please provide your name"]
    },
    email: {
        type:String,
        unique: true,
        required: [true, "Please provide Valid Email"],
        validate: [validator.isEmail, "Please provide Valid Email"]
    },
    password :{
        type: String,
        minlength:8,
        required:[true , "Please provide your password"]
         
    },
    passwordconfirm :{
        type: String,
        required: [true, 'Please confirm your password'],
        minlength: 8,
        validate: {
            validator: function (el) {
                return el === this.password;
            },
            message: 'Passwords are not the same!'
        }
    },
})

const User = mongoose.model("User", userSchema);

module.exports = User