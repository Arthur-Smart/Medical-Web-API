import express from "express"
import { createOrder, deleteOrder, getOrders } from "../controllers/order.js"
import { verifyToken } from "../verifyToken..js"

const router = express.Router()

router.post('/order',  createOrder)
//router.get('/order',)
router.get('/order/:userId', getOrders)
router.put('/order/:id',)
router.delete('/order/:id', deleteOrder)

export default router;