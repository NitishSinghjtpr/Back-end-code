const express=require('express');
const router=express.Router();
const User=require("../model/model.js");
const validate=require("../util/validation.js");
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');

router.get("/get",async(req,res)=>{
  const ans = await User.find({});
  console.log('Cookies: ', req.cookies)
    res.send(ans);
})

//Register user
router.post("/post",async(req,res)=>{
    try {
        //hassing password
        req.body.password=await bcrypt.hash(req.body.password,10);
        validate(req.body);
        await User.create(req.body);

        //jwt token
        res.cookie("token","jhvcsdvfishblkhdof")
        res.send("post successfuly !")
    } catch (err) {
        res.status(404).send("ERROR: "+ err.message);
    }
})

//login route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    // ✅ 1. email check
    if (!user) {
      return res.status(400).send("Invalid email");
    }
    const isMatched=await bcrypt.compare(password,user.password)

    // ✅ 2. password check
    if (!isMatched) {
      return res.status(400).send("Wrong password");
    }

    // ✅ 3. create JWT token
    const token = jwt.sign(
      { name: user.name, age: user.age, email: user.email ,_id:user._id},
      process.env.PASS_KEY,
      { expiresIn: "1h" }
    );

    res.cookie("token", token);
    console.log(token);

    res.send("Login successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// user who log-in
router.get("/userinfo",async(req,res)=>{
    const payload=jwt.verify(req.cookies.token,process.env.PASS_KEY)
    console.log(payload);
    
    const ans=await User.findById(payload._id);
   // console.log(req.cookies);
    
    res.send(ans);

});
//delete info by id
router.delete("/delete",async(req,res)=>{
   const payload=jwt.verify(req.cookies.token,process.env.PASS_KEY);
   //console.log(req.cookies);
   
  await User.findByIdAndDelete(payload._id);
   console.log(payload._id);
   
   res.send("deleted info");
})

//logout Feature
router.post("/logout",async(req,res)=>{
  res.cookie("token",null,{expires: new Date(0)});
  res.send("Logged out")
})

module.exports=router;

