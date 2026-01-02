const express = require("express");
const app=express();
//database connetion
const main=require("./database.js")
main();
//require model(Schema)
const User=require('./model/model.js')
//middleware
app.use(express.json()); // ❗ very important


//for user register
app.post("/register",async(req,res)=>{
   const userData= await User.create(req.body)
   console.log(userData);
   
   res.send("register successfully")
});
//find all users data
app.get("/findAll",async(req,res)=>{
   try {
        const info = await User.find({});
        res.json(info);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})
//update data using phone number
app.put("/update", async (req, res) => {
    // console.log("working");
    // console.log(req.body);
 const updatedUser = await User.findOne(
            { PhoneNo: req.body.PhoneNo }, // filter
        );
    console.log(updatedUser);
    updatedUser.name=req.body.name;
    updatedUser.fatherName=req.body.fatherName;
    console.log(updatedUser);
    await updatedUser.save();
    res.send(updatedUser);
});
//delete data using mobile number
app.delete("/delete",async(req,res)=>{
    const deleteUser = await User.findOneAndDelete(
            { PhoneNo: req.body.PhoneNo }
        )
        console.log(deleteUser);
        
        if(!deleteUser){
            res.send("User not found")
        }
        res.send("deleted successfully")
})


//listing
app.listen(2222,(req,res)=>{
    console.log(`port is listing at 2222`);
    
})

