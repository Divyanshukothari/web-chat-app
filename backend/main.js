const express = require('express')

const app = express()

app.get("/" , (req , res)=>{
    res.send("hello world")
})
app.get("/hello", (req , res)=>{
    res.send("hello from server")
})

app.listen(9000 , ()=>{
     console.log("server is runnig in port 9000")
})