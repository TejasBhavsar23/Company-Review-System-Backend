import userModel from "../models/User.js";
export const isAdmin=async(req,res,next)=>{
    try {
       const {email}=req.body;

      const userinfo = await userModel.findOne({email})

      if(userinfo && (userinfo.role=="Admin"))
      {
        next();
      }
      else{
        res.status(403).json({
            
            message : "Access Deny!!!  Only Admin have Access "
        })
      }
    } catch (error) {
        res.status(500).json({
            message:"error Occured"
        })
        console.log(error);
    }
}

export const isStudent=async(req,res,next)=>{
    try {
       const {email}=req.body;

      const userinfo = await userModel.findOne({email})

      if(userinfo && (userinfo.role=="Student"))
      {
        next();
      }
      else{
        res.status(403).json({
            
            message : "Access Deny!!!  Only Student have Access "
        })
      }
    } catch (error) {
        res.status(500).json({
            message:"error Occured"
        })
        console.log(error);
    }
}

export const isAlumni=async(req,res,next)=>{
    try {
       const {email}=req.body;

      const userinfo = await userModel.findOne({email})

      if(userinfo && (userinfo.role=="Alumni"))
      {
        next();
      }
      else{
        res.status(403).json({
            
            message : "Access Deny!!!  Only Alumni have Access "
        })
      }
    } catch (error) {
        res.status(500).json({
            message:"error Occured"
        })
        console.log(error);
    }
}