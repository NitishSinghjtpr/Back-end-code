const mongoose=require('mongoose')

async function main() {
    await mongoose.connect("mongodb://localhost:27017/hospital");
    console.log("db is connected");
    
}

module.exports=main;
