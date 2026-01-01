const mongoose=require('mongoose')
const {Schema}=mongoose;

const userSchema=new Schema({
name:{
    type:String,
    required:true,
    minlength:3,
    maxlength:20
},
email:{
    type:String,
    required:true,
    trim:true,
   lowercase:true,
   unique:true
},
age:{
    type:Number,
    min:12,
    max:80
},
password:{
    type:String,
    required:true,
}
},{timestamps:true})

const user=mongoose.model("user",userSchema);
module.exports=user;
