const User=require("../models/user");
const validate=require('../utils/validators');
const bcrypt=require("bcrypt");
const jwt=require('jsonwebtoken');
const redisClient=require('../config/redis.js')


//Register

const register=async(req,res)=>{
    try {

        //validate the data
        validate(req.body);

        const {firstName,emailId,password}=req.body;

        //hassing password
        req.body.password=await bcrypt.hash(password,10)
        
         const user= await User.create(req.body)
        //create token
        const token=jwt.sign({emailId:emailId,_id:user._id},process.env.JWT_KEY,{expiresIn:60*60 })
        res.cookie('token',token,{maxAge:60*60*1000})
        res.status(200).send("User register successfully")
      

    } catch (err) {
        res.status(400).send("Error:"+err)
    }
}


//login

const login=async(req,res)=>{
    try {
        const {emailId,password}=req.body;

        if(!emailId){
            throw new Error("Invalid Email")
        }
        if(!password){
            throw new Error("Wrong password")
        }

        const user=await User.findOne({emailId});

        const match=bcrypt.compare(password,user.password)

            if(!match){
                throw new Error("Invalid credentials")
            }
            const token=jwt.sign({emailId:emailId,_id:user._id},process.env.JWT_KEY,{expiresIn:60*60 })
        res.cookie('token',token,{maxAge:60*60*1000})
        res.status(200).send("User logged in successfully")
        

    } catch (err) {
        res.status(401).send("Error: "+err);
    }
}


//logout feature
const logout=async(req,res)=>{
    try {
        const {token}=req.cookies;
        const payload=jwt.decode(token);

        await redisClient.set(`token ${token}`)
        await redisClient.expireAt(`token:${token}`,payload.exp)
        //token add kar dunga Redis ke blockList
        //Cookies ko clear kar denge 
        res.cookie("token",null,new Date(Date.now()));
        res.send("Logged out success")
    } catch (err) {
        res.status(401).send("Error"+err);
    }
}

module.exports={register,login,logout}