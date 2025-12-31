const express = require("express");
const app = express();
//database require
const main = require("./database");
//database calling
main();
//Schema require
const User=require("./schema.js");


//middleware
app.use(express.json());

//find all users data
app.get("/home", async (req, res) => {
  const ans = await User.find({});
  res.send(ans);
});
//register user
app.post("/register", async (req, res) => {
  const user = await User.create(req.body);
  res.send("register succesfully"+user);
});
//deletr operation
app.delete("/info",async(req,res)=>{
  const id=req.params.id;
  await User.deleteOne(id);
  res.send("deleted");
})
//update data
app.put("/update/:id",async(req,res)=>{
    const id=req.params.id;
    const user=await User.findByIdAndUpdate(id,req.body);
    if(!user){
        res.send("data not present in database")
    }
    res.send("update successfully"+user)
})


app.listen(3000, () => {
  console.log("server is listening at 3000");
});
