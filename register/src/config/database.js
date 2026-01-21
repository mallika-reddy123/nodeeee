const mongoose=require("mongoose") 
const connectDB=async()=>{
    await mongoose.connect("mongodb+srv://Mallika:Mallika06@mongodbdemo.7scmwpr.mongodb.net/?appName=Mongodbdemo")
}  
module.exports=connectDB