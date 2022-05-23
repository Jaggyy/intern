const express = require("express");
const router = express.Router()
const user = require('../Auth/UserAuth')
const contact= require("../Auth/Contact");

router.route("/login").post(user.login)
router.route("/signup").post(user.signup)
router.route("/contact").post(user.contact)
router.route("/subscribe").post(user.subscribe)
router.route("/verify").post(user.isloged)


module.exports =  router