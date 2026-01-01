const express=require('express')
const app=express();
const port=1234;
const bcrypt=require('bcrypt');
const main=require("./database.js")

const User=require("./model/model.js");
const validate=require("./util/validation.js");
const cookieParser = require('cookie-parser')
const jwt=require('jsonwebtoken');
app.use(express.json()); 
app.use(cookieParser());


app.get("/get",async(req,res)=>{
  const ans = await User.find({});
  console.log('Cookies: ', req.cookies)
    res.send(ans);
})

app.post("/post",async(req,res)=>{
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
app.post("/login", async (req, res) => {
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
      "nksingh",
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
app.get("/userinfo",async(req,res)=>{
    const payload=jwt.verify(req.cookies.token,"nksingh")
    console.log(payload);
    
    const ans=await User.findById(payload._id);
    console.log(req.cookies);
    
    res.send(ans);

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