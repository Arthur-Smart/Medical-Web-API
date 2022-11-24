import { createError } from "../error.js"
import Auth from '../models/User.js'

export const getUsers = async(req, res, next) => {
    try {
        const users = await Auth.find()
        res.status(201).json(users)
    } catch (err) {
        next(err)
    }
}

export const getUser = async(req, res, next) => {
    try {
        const user = await Auth.findById(req.params.id)
        res.status(201).json(user)
    } catch (err) {
        next(err)
    }
}


export const updateUser = async(req, res, next) => {
    if(req.params.id === req.user.id){
        try {
            const updatedUser = await Auth.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, {new: true})
            res.status(200).json(updatedUser)
        } catch (err) {
            
        }
    } else {
        return next(createError(403, "You can only update your account"))
    }
}

export const deleteUser = async(req, res, next) => {
     if(req.params.id === req.user.id){
        try {
            await Auth.findByIdAndDelete(req.params.id)
            res.status(200).json('User has been deleted')
        } catch (err) {
            
        }
    } else {
        return next(createError(403, "You can only delete only your account"))
    }
}
