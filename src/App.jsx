import React from 'react'
import { AuthProvider, useAuth } from './Component/UserAuth';
import Navbar from './Component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import SignUp from './Component/SignUp'
import SignIn from './Component/SignIn'
import Welcome from './Component/Welcome'              
import NewNav from './Component/NewNav';
import './App.css'
import EmployeeDetail from './Component/EmployeeDetail'
import AddEmployee from './Component/AddEmployee'

function AppContaint() {
    const { isLoggedIn } = useAuth();
  return (
    <div>
       {isLoggedIn ? <NewNav /> : <Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/SignIn' element={<SignIn/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/Welcome' element={<Welcome/>}></Route>
        <Route path='/em' element={<EmployeeDetail/>}></Route>
        <Route path='/e' element={<AddEmployee/>}></Route>
      </Routes>
    </div>
  )
}
function App (){ 
  return(

      <AuthProvider>

        <AppContaint/>

      </AuthProvider>
  )

}

export default App
