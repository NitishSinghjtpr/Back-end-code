const validator=require('validator');

async function validate(data){
    const mandatory=["name","email","password"];
    const isallow=mandatory.every((k)=>Object.keys(data).includes(k));
    if(!isallow){
        throw new Error("missing field");
    }
    if(!validator.isEmail(data.email)){
        throw new Error("email is invalied");
    }
    if(!validator.isStrongPassword(data.password)){
        throw new Error("weak password")
    }
    if(!(data.name.length>3&&data.name.length<20)){
        throw new Error("naming is incorrect")
    }
    return true;
}
module.exports=validate;