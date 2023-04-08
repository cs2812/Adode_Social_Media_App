const express = require("express")
const {userRoutes} = require("./routes/user.routes")
const {postRoutes} = require("./routes/post.routes")
const {analyticsRoutes}=require("./routes/analytics.routes")
const {connection} = require("./configs/db")
require("dotenv").config();

const app = express()
const cors = require("cors")
const port = 8080


app.use(cors())
app.use(express.json())
app.use("/users",userRoutes)
app.use("/posts",postRoutes)
app.use("/analytics",analyticsRoutes)

app.get("/",(req,res)=>{
    res.send("Jai Shree Ganesh")
})

app.listen(process.env.PORT||port,async()=>{
    await connection;
    console.log("server is running on",`${process.env.PORT || port}`)
})