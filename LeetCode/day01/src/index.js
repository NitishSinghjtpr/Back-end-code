const express = require('express');
const app=express();
require('dotenv').config();
const Main=require('./config/db.js')
const cookieParser=require('cookie-parser');


app.use(express.json());
app.use(cookieParser());



Main()
.then(async()=>{
    app.listen(process.env.PORT,()=>{
console.log(`server is running at PORT ${process.env.PORT}`);

})
})
.catch(err=>console.log(`Error Occured: ${err}`)
);

