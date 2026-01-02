const mongoose=require('mongoose');
const {Schema}=mongoose;

const userSchema=new Schema({
    name:{
        type:String,
        required:true,
        minLength:4,
        maxLength:20
    },
    PhoneNo:{
        type:Number,
        required:true,
        unique:true
        
    },
    age:{
        type:Number,
        required:true

    },
    fatherName:{
        type:String,
        minLength:4,
        maxLength:20
    }
},{Timestamp:true})

const user=mongoose.model("user",userSchema);
module.exports=user;