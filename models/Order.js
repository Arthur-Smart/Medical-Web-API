import mongoose from "mongoose"

const OrderCartSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    productImg:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    useremail:{
        type:String,
        required:true
    },
    userphone:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    cost:{
        type:String,
        required:true
    },
    qty:{
        type:Number,
        required:true
    }
}, {timestamps:true})

export default mongoose.model('OrderCart', OrderCartSchema)