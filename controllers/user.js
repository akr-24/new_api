import User from "../models/user.js";

export const getAllUsers=async (req,res)=>{

    const users=await User.find({});
    console.log(req.query);
  
     res.json({
          success:true,
          users
      })
  };

export const login=async(req,res,next)=>{

}
export const register=async(req,res,next)=>{

    
};

export const getUserDetails=async(req,res)=>{

   
    
}

// export const specialFunc=(req,res)=>{
//     res.json({
//         success:true,
//         message:"just joking"
//     })
// }