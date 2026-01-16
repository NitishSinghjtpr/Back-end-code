const express=require('express');
const authRouter=express();

//Register
authRouter.post('/register',register);
//login
authRouter.post('login',login);
//logout
authRouter.post('logout',logout);
//getProfile
authRouter.post('getProfile',getProfile);