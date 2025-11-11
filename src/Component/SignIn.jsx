import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from './UserAuth'
function SignIn() {
  const[email,setemail]=useState("")
  const[password,setpassword]=useState("")
  const navigate = useNavigate();
  const {login} = useAuth()
  const handlesubmit=async (e)=>{
        e.preventDefault()
        console.log(email,password)

   const response= await axios.post('https://employee-management-backend-code.onrender.com/api/login',
      {
        email,
        password
  })
    console.log(response)

    const token = response.data.token
    localStorage.setItem('token',token)
    login(token)
    
    console.log(token)
    
    if(response.status===201){
        navigate('/Welcome')
    }
}
  return (
    <div>
      <form onSubmit={handlesubmit }>
        <h1 className='demo-sign'>Employee SignIn</h1>
        <input type="email" onChange={(e)=>setemail(e.target.value)} placeholder='Enter the email' />
        <input type="password" onChange={(e)=>setpassword(e.target.value)} placeholder='Enter the password' />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default SignIn

