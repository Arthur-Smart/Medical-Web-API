import express from "express"
import { allUpdateRegestration, deleteUpdateReg, updateRegister } from "../controllers/updateReg.js"


const router = express.Router()

router.post('/', updateRegister)
router.get('/', allUpdateRegestration)
router.delete('/:id', deleteUpdateReg)

export default router;