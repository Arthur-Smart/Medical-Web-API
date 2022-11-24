import jwt from 'jsonwebtoken'
import { createError } from './error.js';

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if(!authHeader) return next(createError(401, 'You are not authenticated!'))
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SIGN, (err, user) => {
        if(err) return next(403, 'Invalid token')
        req.user = user;
        next()
    });
};