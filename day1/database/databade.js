const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://localhost:27017/student");
  console.log("Database is connected");
}

main().catch((error) => {
  console.log("Error: " + error);
});

const mySchema = new mongoose.Schema({
 name:{
    type:String,
    require:true,
    maxlength:30,
    minlength:4
 },
 email:{
    type:String,
    require:true,
    unique:true,
 },
 
});

const User = mongoose.model("User", mySchema);
module.exports = User;
