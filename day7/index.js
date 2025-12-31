const express=require('express')
const app=express();
const port=1234;
const bcrypt=require('bcrypt');
const main=require("./database.js")

const user=require("./model/model.js");
const validate=require("./util/validation.js");

app.use(express.json()); 

app.get("/get",async(req,res)=>{
  const ans = await user.find({});
    res.send(ans);
})

app.post("/post",async(req,res)=>{
    try {
        req.body.password=await bcrypt.hash(req.body.password,10);
        validate(req.body);
        await user.create(req.body);
        res.send("post successfuly !")
    } catch (err) {
        res.status(404).send("ERROR: "+ err.message);
    }
})

main()
.then(()=>{
app.listen(port,(req,res)=>{
console.log(`listen port : ${port}`);
})
})
.catch((err)=>{
    console.log("EROOOR:" +err.massage);
})