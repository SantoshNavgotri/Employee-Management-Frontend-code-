import React from 'react';


import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2 style={{ color: 'hsla(249, 42%, 38%, 1.00)',display: 'flex',justifyContent: 'center',marginTop: '180px',fontSize:'40px'}}>Employee Management System</h2>
      <h4 style={{marginTop:'100px',fontSize:'20px',width:"80%", textAlign:"center", marginLeft:"auto", marginRight:"auto"}}>Redefine the employee experience with a streamlined and secure HR software that helps manage your global workforce seamlessly, from adding and maintaining employee records to assisting team members with their daily HR work, all while ensuring compliance.</h4>
       <Link 
      to="/SignUp"
      style={{
        zIndex: 6,
        position: 'relative',
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: 'hsla(249, 82%, 45%, 1.00)',
        color: '#faf3f3ff',
        textDecoration: 'none',
        borderRadius: '5px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease',
        marginLeft:"650px",
        marginTop:"60px"
      }}
    >
      Sign Up 
    </Link>

    </div>
    
  );
}

export default Home;
