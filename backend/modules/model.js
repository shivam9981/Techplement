import mongoose from "mongoose";

const data = mongoose.Schema({
    data:{
        type: String,
        require:true
    }
})

const caldata = mongoose.model('data', data)
export default caldata