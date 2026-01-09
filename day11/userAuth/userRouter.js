const express=require('express');
const router=express.Router();
const User=require("../model/model.js");
const validate=require("../util/validation.js");
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const client = require("../redis.js"); // NO destructuring


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

   res.cookie("token", token, {
  httpOnly: true,
  sameSite: "lax"
});


    res.send("Login successfully");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// user who log-in
router.get("/userinfo", async (req, res) => {
  try {
    const token =
      req.cookies.token || req.headers.authorization;

    if (!token) {
      return res.status(401).send("Token not found");
    }

    // 🔥 Redis blacklist check
    const isLogout = await client.get(token);
    if (isLogout) {
      return res.status(401).send("Token expired (logged out)");
    }

    // JWT verify
    const payload = jwt.verify(token, process.env.PASS_KEY);

    const user = await User.findById(payload._id);
    res.send(user);
  } catch (err) {
    res.status(401).send("Unauthorized");
  }
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
router.post("/logout", async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(400).send("Already logged out");
    }

    const payload = jwt.verify(token, process.env.PASS_KEY);

    // ✅ Redis blacklist
    await client.set(token, "logout");
    await client.expireAt(token, payload.exp);

   res.clearCookie("token", {
  httpOnly: true,
  sameSite: "lax"
});


    res.send("Logout SUCCESS!");
  } catch (err) {
    res.status(401).send("Invalid token");
  }
});




module.exports=router;

