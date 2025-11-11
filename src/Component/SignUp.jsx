import React, { useState } from 'react'
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
function Signup()  {
  const[name,setname]=useState("")
  const[email,setemail]=useState("")
  const[password,setpassword]=useState("")
  const navigate = useNavigate();
  const handlesubmit=async (e)=>{
        e.preventDefault()
        console.log(name,email,password)

   const response= await axios.post('https://employee-management-backend-code.onrender.com/api/saveuser',
      {
        name,
        email,
        password
  })
    console.log(response.status)
    
    if(response.status===201){
        navigate('/')
    }
}
  return (
    <div>
      <form onSubmit={handlesubmit }>
        <h1 className='demo-sign'>Employee SignUp</h1>
        <input type="text" onChange={(e)=>setname(e.target.value)} placeholder='enter the name'/>
        <input type="email" onChange={(e)=>setemail(e.target.value)} placeholder='Enter the email' />
        <input type="password" onChange={(e)=>setpassword(e.target.value)} placeholder='Enter the password' />
        <div className='sig'>
          <span>If User Alrady Rajistar    -:  </span><Link style={{zIndex:"6",position:"relative"}} to="/Signin">SignIn</Link>
        </div>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Signup