const mongoose=require('mongoose');


async function main(){
    await mongoose.connect(process.env.DB_CONNECTION);
    console.log("db is connected!");
}
module.exports=main;