const express=require("express") 
const app=express() 
const cors = require("cors")
app.use(express.json())  
const connectDB=require("./config/database") 
const router=require("./routes/authroute")  

app.use(cors())
app.use("/",router);
connectDB() 
.then(()=>{
    console.log("Db connectecd")
}) 
.catch(()=>{
    console.log("DB failed")
})
app.listen(3000, () => {
  console.log(`App listening on 3000`);
});