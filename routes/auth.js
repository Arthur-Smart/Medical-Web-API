import express from "express"
import { registerUser, loginUser } from "../controllers/auth.js";

const router = express.Router()

//CREATE A USER
router.post('/register', registerUser)
//SIGN IN A USER
router.post('/login', loginUser)

export default router;