import mongoose, { trusted } from 'mongoose'

const medicineSchema = new mongoose.Schema({
    imageUrl:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    cost:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
},{timestamps:trusted})

export default mongoose.model('Medicine', medicineSchema)