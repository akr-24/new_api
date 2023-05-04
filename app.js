import express, { application } from "express";
//import mongoose from "mongoose";
import userRouter from "./routes/user.js";
// import { connectDB } from "./data/database.js";
import config from "dotenv";

config.config({
    path:"./data/config.env",
});

export const app=express();

//connecting to the database
// connectDB();

//using middleware for accessing JSON data earlier for form data we were using urlencoded middleware
app.use(express.json());

//it implies all the routes would begin with /users 
app.use("/users",userRouter);


//connecting the database
// mongoose.connect("mongodb://localhost:27017",{
//     dbName:"backendapi",
// }).then(()=>{
//     console.log("database connected");
// }).catch((e)=>{
//     console.log(e.message);
// })


//database schema
// const schema =new mongoose.Schema({
//     name:String,
//     email:String,
//     password:String,
// })


//database model
// const User=mongoose.model("User",schema);


//root route
app.get("/",(req,res)=>{
    res.send("Nice Working");
})

//API to get all users data
// app.get("/users/all",async (req,res)=>{

//   const users=await User.find({});
//   console.log(req.query);

//    res.json({
//         success:true,
//         users
//     })
// })

// app.get("/userid/special",(req,res)=>{
//     res.json({
//         success:true,
//         message:"just joking"
//     })
// })

// dynamic routing/customizable APIs
// app.get("/userid/:id",async(req,res)=>{

//     const {id}=req.query;
//     const {id}=req.params;
//     console.log(req.params);
    
//     const user=await User.findById(id);
//     console.log(user);
//     res.json({
//         success:true,
//         user
//     });
// })



//api to create a new user
// app.post("/users/new",async(req,res,next)=>{

//     const {name,email,password}=req.body;

//     const users=await User.create({
//         name,
//         email,
//         password
//     });

//

//     res.status(201).cookie("tempi","lol").json({
//         success:true,
//         message:"signed up successfully"
//     })
// })

//starting the server at 4000
// app.listen(4000,()=>{
//     console.log("server is working");
// });