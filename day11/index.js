const express=require('express')
const dotenv=require('dotenv');
dotenv.config();
const app=express();
const port=process.env.PORT;
const cookieParser = require('cookie-parser')
 


const main=require("./database.js")
const client=require('./redis.js')
const router=require('./userAuth/userRouter.js')


app.use(express.json()); 
app.use(cookieParser());


// app.get("/get",async(req,res)=>{
//   const ans = await User.find({});
//   console.log('Cookies: ', req.cookies)
//     res.send(ans);
// })

// //Register user
// app.post("/post",async(req,res)=>{
//     try {
//         //hassing password
//         req.body.password=await bcrypt.hash(req.body.password,10);
//         validate(req.body);
//         await User.create(req.body);

//         //jwt token
//         res.cookie("token","jhvcsdvfishblkhdof")
//         res.send("post successfuly !")
//     } catch (err) {
//         res.status(404).send("ERROR: "+ err.message);
//     }
// })

// //login route
// app.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });

//     // ✅ 1. email check
//     if (!user) {
//       return res.status(400).send("Invalid email");
//     }
//     const isMatched=await bcrypt.compare(password,user.password)

//     // ✅ 2. password check
//     if (!isMatched) {
//       return res.status(400).send("Wrong password");
//     }

//     // ✅ 3. create JWT token
//     const token = jwt.sign(
//       { name: user.name, age: user.age, email: user.email ,_id:user._id},
//       process.env.PASS_KEY,
//       { expiresIn: "1h" }
//     );

//     res.cookie("token", token);
//     console.log(token);

//     res.send("Login successfully");
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// });

// // user who log-in
// app.get("/userinfo",async(req,res)=>{
//     const payload=jwt.verify(req.cookies.token,process.env.PASS_KEY)
//     console.log(payload);
    
//     const ans=await User.findById(payload._id);
//    // console.log(req.cookies);
    
//     res.send(ans);

// });
// //delete info by id
// app.delete("/delete",async(req,res)=>{
//    const payload=jwt.verify(req.cookies.token,process.env.PASS_KEY);
//    //console.log(req.cookies);
   
//   await User.findByIdAndDelete(payload._id);
//    console.log(payload._id);
   
//    res.send("deleted info");
// })

// //logout Feature
// app.post("/logout",async(req,res)=>{
//   res.cookie("token",null,{expires: new Date(0)});
//   res.send("Logged out")
// })

app.use("/",router);

//create function for parallel db connection
const initilize=async()=>{
try {
  await Promise.all([main(),client.connect()])
  console.log("Redis db is connected");

  app.listen(port,(req,res)=>{
console.log(`listen port : ${port}`);
})
  
} catch (err) {
  console.log("Error"+err);
}
}

initilize();