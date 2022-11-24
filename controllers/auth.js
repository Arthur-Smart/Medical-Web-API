import mongoose from "mongoose"
import Auth from '../models/User.js'
import bcrypt from 'bcryptjs'
import { createError } from "../error.js"
import jwt from 'jsonwebtoken'

export const registerUser =  async(req, res, next) => {
    try {
        const exist = await Auth.findOne({email:req.body.email})
        if(exist) return next(createError(402, 'This email is already taken. User exist!'))

        const salt = bcrypt.genSaltSync(10)
        const harshedPassword =  bcrypt.hashSync(req.body.password, salt)
        const newAuth = new Auth({...req.body, password: harshedPassword})
        await newAuth.save()
        res.status(200).json('Your account has been created!')
    } catch (err) {
        next(err)
    }
}

export const loginUser = async (req, res, next) => {
    try {
        const user = await Auth.findOne({email:req.body.email})
        if(!user) return next(createError(404, 'User with this email does not exist. Please try another email'))
        const correctPassword = await bcrypt.compareSync(req.body.password, user.password)
        if(!correctPassword) return next(createError(400, 'Your password is wrong. Try again'))
    
        const accessToken = jwt.sign({id:user._id}, process.env.JWT_SIGN, {expiresIn:"3d"})
        const {password, ...others} = user._doc
        res.status(200).json({...others, accessToken});
    } catch (err) {
        next(err)
    }
}