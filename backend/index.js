const express = require("express")
const {userRoutes} = require("./routes/user.routes")
const {postRoutes} = require("./routes/post.routes")

const app = express()
const cors = require("cors")
const port = 7000


app.use(cors())
app.use(express.json())
app.use("/users",userRoutes)
app.use("/posts",postRoutes)

app.get("/",(req,res)=>{
    res.send("Jai Shree Ganesh")
})

app.listen(port,()=>{
    console.log("server is running on",`${port}`)
})