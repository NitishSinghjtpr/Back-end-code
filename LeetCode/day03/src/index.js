const express = require('express');
const app=express();
require('dotenv').config();
const Main=require('./config/db.js')
const cookieParser=require('cookie-parser');
const authRouter=require('./routes/userAuth.js');
const redisClient = require('./config/redis.js');
const userMiddleware=require('./middleware/userMiddleware.js')


app.use(express.json());
app.use(cookieParser());

app.use("/user",authRouter);


const initilizeConnection=async()=>{
    try {

        await Promise.all([Main(),redisClient.connect()]);
        
        app.listen(process.env.PORT,()=>{
            console.log(`port is listing at ${process.env.PORT}`);
            
        })
    } catch (err) {
        console.log(`Error: ${err}`);
        
    }
}

initilizeConnection();

