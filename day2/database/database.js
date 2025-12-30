const mongoose=require("mongoose");

async function database() {
    await mongoose.connect("mongodb://localhost:27017/instragram");
    console.log("db is connected successfully");
    
}

module.exports=database;