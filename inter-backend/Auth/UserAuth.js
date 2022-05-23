const User = require('../Models/userschema')
const catcherror = require("../Error/catherror")
const AppError = require('../Error/AppError')
const Subscriber = require('../Models/Subscribe')
const Contact = require("../Models/Contactschema")
const express = require("express");
const { promisify } = require('util');
const router = express.Router()

const jwt = require('jsonwebtoken');
const signuptoken = (id, name) => {
    return jwt.sign({ id }, "getingsignin", { expiresIn: 160 * 160 });
}

const verification = (email) => {
    const user = User.findOne({
        email: email
    })
    return user

}
const createtoken = (user, code, res, req) => {

    const token = signuptoken(user._id)

    res.status(200).json({
        status: code,
        token,
        data: "your are successfully Signed up"
    })

}

exports.signup = catcherror(async (req, res, next) => {
    const verify = await verification(req.body.email)
    if (!verify) {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            passwordconfirm: req.body.passwordconfirm
        })
        createtoken(user, 201, res, req)
    } else {
        return next(
            res.status(404).json({
                status: "fail",
                data: "Email already has an account"
            })
        )
    }

})

exports.login = catcherror(async (req, res, next) => {

    if (!req.body.email || !req.body.password) {
        return next(new AppError('Please provide email and password!', 400, res));
    }
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })
    if (user) {
        createtoken(user, 201, res, req)
    } else {
        return next(new AppError("incorrect Email or password", 400, res))
    }
})

exports.subscribe = catcherror(async (req, res, next) => {
    const subscribe = await Subscriber.findOne({
        email: req.body.email
    })
    if (subscribe) {
        return next(new AppError("Already subscribed", 404, res))
    }
    else {
        await Subscriber.create({
            email: req.body.email
        })
        res.status(200).json({
            status: "success",
            data: "Subscribed successfully"
        })
    }
})


exports.contact = catcherror(async (req, res, next) => {
    const contactmess = await Contact.create({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    })
    res.status(200).json({
        status: "success",
        data: "Message sent successfully"
    })
    return contactmess

})

exports.isloged = async (req, res, next) => {
    try {
        const decoded = await promisify(jwt.verify)(
            req.body.token,
            "getingsignin"
        );
        console.log(decoded)
        const currentUser = await User.findById(decoded.id);
        console.log(currentUser)
        res.status(200).json({
            status: "success",
            user: currentUser
        })
        // if (verify) {
        //     const user = await User.findById(verify.id)
        //     console.log(user)
        //     res.status(200).json({
        //         status: "success",
        //         user: user
        //     })
        // }
    } catch (err) {
        return next(new AppError(err, 404, res));
    }
}