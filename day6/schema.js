const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
    min: 18
  },
  city: String,
  gender: {
    type: String,
    enum:["Male","Female","Other"],
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    immutable:true
  }
},{timestamps:true});

const User = mongoose.model("User", userSchema);
module.exports=User;