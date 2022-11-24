import express from "express"
import { createAppointment, deleteAppointments, getAppointments } from "../controllers/appointment.js"

const router = express.Router()

//CREATE APPOINTMENT
router.post('/', createAppointment)

//GET ALL APPOINTMENTS
router.get('/', getAppointments)

//DELETE APPOINTMENT
router.delete('/appointment/:id', deleteAppointments)


export default router;