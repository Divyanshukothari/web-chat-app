import {Router} from 'express'

const router = Router()

router.get("/login",(req ,res)=>{
     res.send("hello from login route")
})

router.get("/register",(req ,res)=>{
    res.send("hello from signup route")
})

router.get("/logout",(req ,res)=>{
    res.send("hello from logout route")
})

export default router