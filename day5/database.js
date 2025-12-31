
const mongoose=require('mongoose');

async function main() {
    await mongoose.connect("mongodb://localhost:27017/Bookstore")

//schema k liye code
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
        Min:18
    },
    city:{
        type:String,
    },
    gender:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
   
})
//model creation: Collection create karna(means table) 
const user=mongoose.model("User",userSchema);
//yanha pe ham document ko vreate kiya hai or object create kiya hai
const user1=new user({name:"Nitish",age:20,city:"lkr",gender:"Male",email:"nitishsingh18@gmail.com"})
//console.log(user1);
//for save data to database
user1.save();

//same work in single step
await user.create({
    name:"Manish",
    age:22,
    city:"lkr",
    gender:"Male",
    email:"mainsh12@gmail.com"
})

const ans=await user.find({});
console.log(ans);


}
main()
.then(()=>console.log("Connected to db"))
.catch((err)=>console.log(err)) 