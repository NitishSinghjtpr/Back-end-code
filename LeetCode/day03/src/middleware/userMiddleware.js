const jwt=require('jsonwebtoken');
const redis=require('../config/redis.js');
const User=require('../models/user.js')

const userMiddleware=async(req,res,next)=>{
    try {
        const {token}=req.cookies;
       // console.log(token);
        
        if(!token){
            throw new Error("Token is not preaent")
        }
       const payload= jwt.verify(token,process.env.JWT_KEY);
       // console.log(payload._id);
        
       if(!payload._id){
        throw new Error("Invalid Token")
       }
       const result=await User.findById(payload._id);
       console.log(result);
       if(!result){
        throw new Error("User does't exist");
       }
       
       
       //Redis ke blocklist mein present th nahi hai
       const IsBlocked=redis.exists(`token:${token}`);
       console.log(IsBlocked);
       
       if(IsBlocked){
        throw new Error("Invalid token")
       }
       res.result=result;
       next();
       
    } catch (err) {
        res.send(`Error ${err.message}`)
    }

}

module.exports=userMiddleware;