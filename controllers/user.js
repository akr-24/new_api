import User from "../models/user.js";

export const getAllUsers=async (req,res)=>{

    const users=await User.find({});
    console.log(req.query);
  
     res.json({
          success:true,
          users
      })
  };

export const register=async(req,res,next)=>{

    const {name,email,password}=req.body;

    const users=await User.create({
        name,
        email,
        password
    });

    //next();

    res.status(201).cookie("tempi","lol").json({
        success:true,
        message:"signed up successfully"
    })
};

export const getUserDetails=async(req,res)=>{

    //const {id}=req.query;
    const {id}=req.params;
    console.log(req.params);
    
    const user=await User.findById(id);
    console.log(user);
    res.json({
        success:true,
        user
    });
}

export const specialFunc=(req,res)=>{
    res.json({
        success:true,
        message:"just joking"
    })
}