const validate=require("validator")   
const validatorData=(request)=>{
    const {email,password}=req.body 
    const isEmail=validator.isEmail(email)  
    // const ispassword=validator.isStrongPassword(password)
    if(!isEmail){
        throw newError("format is incorrect")
    }  
     

}
module.exports=validatorData;