import Appointment from '../models/Appointment.js'

export const createAppointment = async(req, res, next) => {
    try {
        const newAppointment = new Appointment(req.body)
        const savedAppointment =await  newAppointment.save()
        res.status(201).json(savedAppointment) 
    } catch (err) {
        next(err)
    }
}


export const getAppointments = async(req, res, next) => {
    try {
        const appointments = await Appointment.find()
        res.status(200).json(appointments)
    } catch (err) {
        next(err)
    }
}

export const deleteAppointments = async(req, res, next) => {
    try {
        await Appointment.findByIdAndDelete(req.params.id)
        res.status(200).json('Appointment deleted successfully')
    } catch (err) {
        next(err)
    }
}