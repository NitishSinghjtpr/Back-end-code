const express=require('express');
const authRouter=express();
const {register,login,logout}=require('../controllers/userAuthent')
const userMiddleware=require('../middleware/userMiddleware.js')

//Register
authRouter.post('/register',register);
//login
authRouter.post('/login',login);
//logout
authRouter.post('/logout',userMiddleware,logout);
//getProfile
//authRouter.post('getProfile',getProfile);


module.exports=authRouter;