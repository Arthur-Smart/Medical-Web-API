import { createError } from '../error.js';
import OrderCart from '../models/Order.js' 

export const createOrder = async (req, res, next) => {
    const newOrder = new OrderCart(req.body);
    try {
        const savedOrder = await newOrder.save()
        res.status(201).json(savedOrder)
    } catch (err) {
        next(err)
    }
}

export const getOrders = async(req, res, next) => {
    try {
        const orders = await OrderCart.find({userId:req.params.userId})
        res.status(200).json(orders)
    }catch (err) {
        next(err)
    }
}

export const getOrder = (req, res, next) => {
    res.status('yolo')
}

export const updateOrder = async(req, res, next) => {
    try {
        const order = await OrderCart.findById(req.params.id);
        if(!order) return next(createError(404, 'No such order'))
        if(req.user.id === order.userId){
            const updateOrd = await OrderCart.findByIdAndUpdate(req.params.id, {
                $set:req.body
            }, {new: true});
            res.status(201).json(updateOrd)
        }else{
            return next(createError(403, 'You can update only your order!'))
     }
    } catch (err) {
        next(err)
    }
}

export const deleteOrder = async(req, res, next) => {
    try {
        const order = await OrderCart.findById(req.params.id);
        if(!order) return next(createError(404, 'No such order'))
            const updateOrd = await OrderCart.findByIdAndDelete(req.params.id);
            res.status(201).json(updateOrd);
        
    } catch (err) {
        next(err)
    }
}