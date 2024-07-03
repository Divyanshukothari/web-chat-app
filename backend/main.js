import express from 'express'
import authroutes from './routes/auth.route.js'

const app = express()

app.use("/api/auth" , authroutes)

app.get("/" , (req , res)=>{
    res.send("hello world")
})

app.get("/hello", (req , res)=>{
    res.send("hello from server")
})

app.use("/api/auth" , authroutes)

app.listen(9000 , ()=>{
     console.log("server is runnig in port 9000")
})