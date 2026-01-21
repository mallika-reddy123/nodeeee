const mongoose=require("mongoose") 
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:[/@email.com/,"email invalid"]
    }, 
    age:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }

}) 
const User=mongoose.model("User",UserSchema) 
module.exports=User