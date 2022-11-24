import express from "express"
import { deleteModel } from "mongoose"
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js"
import { verifyToken } from "../verifyToken..js"

const router = express.Router()

//GET USERS
router.get('/users', getUsers)

//GET A SINGLE USER
router.get('/user/:id', getUser)

//UPDATE USER
 router.put('/user/update/:id', verifyToken, updateUser )

 //DELETE USER
 router.delete('/user/delete/:id', verifyToken, deleteUser)

export default router;