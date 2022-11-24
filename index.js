import express from "express";
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import authRouter from './routes/auth.js'
import userRouter from './routes/user.js'
import orderRouter from './routes/order.js'
import updatesRouter from './routes/updatesReg.js'
import appointmentRouter  from "./routes/appointment.js";
import medRouter from './routes/medicine.js'
//import cookieParser from 'cookie-parser'

const app = express()
app.use(cors({
    origin:'*'
}))
dotenv.config() 

mongoose.connection.on('disconnected', () => {
    console.log('The database has been disconnected')
})

mongoose.connection.on('connected', () => {
    console.log('The database has been  connected')
})

const connect = () => {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("Connected to mongoDB databases")
    }).catch((err) => {throw err})
}

//app.use(cookieParser())
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)
app.use('/api/orders', orderRouter)
app.use('/api/appointments', appointmentRouter)
app.use('/api/med', medRouter)
app.use('/api/updates', updatesRouter)
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Something went wrong';
    return res.status(status).json({
        success:false,
        status,
        message
    })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>{
    connect()
    console.log(`Server is up and running on port ${PORT}`)
})