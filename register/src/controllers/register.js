const bcrypt=require("bcrypt") 
const jwt=require("jsonwebtoken") 
const validate=require("../utils/validate")


const User=require("../models/schema") 
const register=async(req,res)=>{
    const {name,email,age,password,address}=req.body  

    try{ 
      const is_email = await User.findOne({ email });
      console.log(is_email);  

      if (is_email) {
      return res.status(409).json({ message: "user already exits" });
    } 
    const saltRound=10;
    const hashedpassword=await bcrypt.hash(password,saltRound)
      const newUser=new User({
        name,
        email,
        age,
        password:hashedpassword,
        address
    }); 
      await newUser.save();
    res.status(201).json({ message: "Created successfully" });
  } catch (e) {
    res.status(500).json(e.message);
  }
 

}  
const login=async(req,res)=>{ 
    const {email,password}=req.body  
    if(!email || !password){
        res.status(400).json({message:"invalid details"})
    } 
    const user=await User.findOne({email}) 
    if(!user){
        res.status(401).json({message:"invalid credetials"})
    } 
    const ispassword=await bcrypt.compare(password,user.password) 
    if(!ispassword){
        res.status(401).json({message:"password does not match"})
    } 
     const token = jwt.sign(
    {
      userId: user._id,
      Name: user.name,
      password: user.password,
    },
    "MySecret",
    {
      expiresIn: "7d",
    }
  );
  res.status(200).json({ token: token });
  

}
module.exports={register,login}