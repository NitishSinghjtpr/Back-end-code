const mongoose=require('mongoose');

async function main() {
    mongoose.connect(process.env.DB_CONNECT_STRING);
    console.log(`db is connected`);
    
}

module.exports=main;