import UserModel from "../Models/UserModel.js";
import bcrypt from 'bcrypt'

export const Login=async(req,res)=>{
   try {
    const {email,password}=req.body;
    console.log(req.body)
    if(!email|| !password){
        return res.status(401).json({success:false,message:"Please enter email & passowrd"})
    }
    const users2= await UserModel.findOne({email:email});

    if(!users2){
        return res.status(404).json({success:false,message:"user not found"})
    }
    return res.status(200).json({success:true,message:"loggged in"})
    
    
   } catch (error) {
    return res.status(500).json({success:false, message:"Something wnet wrong"})
   }
}
export const Register=async(req,res)=>{
    try {
    const {name,email,password}=req.body;
    // console.log(req.body)
    if(!name || !email||!password){
        return res.status(401).json({success:false,message:"Please fill all mandetory fields"})

    }
    const hasahedPassword= await bcrypt.hash(password,10);
const users2=new UserModel({name,email,password:hasahedPassword})
await users2.save();
console.log(users2)
return res.status(200).json({success:true,message:"Registered!"})
    
    
    } catch (error) {
     return res.status(500).json({success:false, message:"Something wnet wrong"})
    }
}