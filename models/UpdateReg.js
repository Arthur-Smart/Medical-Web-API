import mongoose from "mongoose"

const newUpdateReg = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
},
{timestamps:true}
);

export default mongoose.model('UpdateReg', newUpdateReg)