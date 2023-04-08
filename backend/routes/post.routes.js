const express = require("express")
const postRoutes = express.Router()
const postCollection = require("../models/post.model")

postRoutes.get("/",(req,res)=>{
    res.send("POST")
})

module.exports = {postRoutes};