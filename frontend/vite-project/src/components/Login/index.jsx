import { useState } from "react"
const Login =()=>{
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const onSubmitloginform=async (e)=>{
        e.preventDefault()
    const inputvalues={
        email,password
    }
    const options={
        method:"POST",
        headers:{
            "content-Type":"application/json"
        },
        body:JSON.stringify(inputvalues)
    }
    try{
        const response=await fetch("http://localhost:3000/login",options)
        const data =await response.json();

        if(response.ok){
            console.log("login success",data)

        }else{
            console.log("invalid credentials")
        }
    }
    catch (err){
     console.log(err)
    }
    setemail('')
    setpassword('')
}

    const onchangeemail=(event)=>{
        setemail(event.target.value)
    }
    const onchangepassword=(event)=>{
        setpassword(event.target.value)
    }
    return(
        <div>
            <form onSubmit={onSubmitloginform}>
                <div><input type="text" value={email} onChange={onchangeemail} placeholder="email"></input></div>
                <div><input type="password" value={password} onChange={onchangepassword} placeholder="password"></input></div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login