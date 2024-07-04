import {Router} from 'express'
import {signup , login , logout} from '../controllers/auth.controller.js'
const router = Router()

router.get("/login",login)

router.get("/register",signup)

router.get("/logout",logout)

export default router