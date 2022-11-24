import express from "express"
import { createMedicine, deleteMed, getAllMeds, getSingleMeds, updateMed } from "../controllers/medicine.js";

const router = express.Router()

//CREATE A MEDICINE
router.post('/', createMedicine) 
router.put('/med/:id', updateMed) 
router.get('/', getAllMeds) 
router.get('/med/:id', getSingleMeds) 
router.delete('/med/:id', deleteMed) 

export default router;