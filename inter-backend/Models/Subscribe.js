const mongoose = require("mongoose")
const validator = require('validator')

const subscribeSchema = new mongoose.Schema({

    email: {
        type: String,
        required: [true, "Please provide Valid Email"],
        validate: [validator.isEmail, "Please provide Valid Email"]
    },

})

const Subscriber = mongoose.model("subscriber", subscribeSchema);

module.exports = Subscriber