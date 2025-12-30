const express=require("express");
const User=require("./userschema/schema.js")
const db=require("./database/database.js");

db().catch((error) => {
  console.log("Error: " + error);
});

const app=express();
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("welcome");
    
})
//creating an account by user
app.post("/register",async (req,res)=>{
    try {
        const user = await User.create(req.body);
        res.send("registered successfully")
    } catch (error) {
        res.send("error"+error);
        
    }
})
//for finding all data from db
app.get("/alluser",async(req,res)=>{
    try {
        const allUser=await User.find();
        res.send(allUser)
    } catch (error) {
        res.send("error"+error)
    }
})
//finding data using id from db
app.get("/user/:id",async(req,res)=>{
    try {
        const user=await User.findById(req.params.id);
        res.send(user)
        
    } catch (error) {
        res.send("error"+error)
    }
})
// updating data from our db
app.patch("/updateuser/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        const update=req.body;
        // console.log(req.params);
        
        await User.findByIdAndUpdate(req.params.id,update)
        return res.json({
            succes:"true",
            msg:"work has been done"
        })
    } catch (error) {
        return res.json(
            {
                success:"False",
                msg:error.message
            }
        )
    }
})
app.listen(2020,()=>{
    console.log("server running at 2020");
    
})