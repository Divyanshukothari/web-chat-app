import express from 'express'
import authroutes from './routes/auth.route.js'
import dotenv from 'dotenv'

dotenv.config({
    path:'./backend/.env'
})

const PORT = process.env.PORT || 7500

const app = express()

app.use("/api/auth" , authroutes)

app.get("/" , (req , res)=>{
    res.send("hello world")
})

app.get("/hello", (req , res)=>{
    res.send("hello from server")
    
})

app.use("/api/auth" , authroutes)

app.listen(PORT , ()=>{
     console.log(`server is runnign on PORT : ${PORT}`)
     console.log(process.env.NAME)
})