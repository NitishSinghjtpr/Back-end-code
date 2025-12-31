const express=require("express");
 const app=express();

 app.use("/trial",(req,res,next)=>{
    console.log("hello");
    
   // res.send("hello world")
    next();
 },
 (req,res,next)=>{
    console.log("i am second");
   //  res.send("kaise ho");
    next();
 },
 (req,res)=>{
    console.log("i am 3rd");
   // res.send("mast hain")
 }
);

app.get("/user",(req,res)=>{
    res.send("data recieved")
});

app.post("/user",(req,res)=>{
    res.send("data successfully Saved")
})
app.delete("/user",(req,res)=>{
    res.send("data deleted")
})

 app.listen(8080,()=>{
    console.log("port is listing at port 8080")
 }) 