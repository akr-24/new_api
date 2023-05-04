
import mongoose from "mongoose";


const schema =new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    isCompleted:{
        type:Boolean,
        default:false,
    },
    //to know the user who created this
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",//it should match with the name of collection from which id field needs to be stored
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
})

const Task=mongoose.model("Task",schema);

export default Task;
