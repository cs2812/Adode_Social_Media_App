const express = require("express")
const userRoutes = express.Router()
const userCollection = require("../models/user.model")

userRoutes.get("/",(req,res)=>{
    res.send("User")
})

module.exports = {userRoutes};