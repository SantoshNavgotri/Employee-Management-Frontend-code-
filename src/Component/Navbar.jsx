import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <h1 className='nav-left'><img src="https://cdn3d.iconscout.com/3d/premium/thumb/employee-management-3d-icon-png-download-12017645.png"/>Employee Management</h1>
      <Link to="/">Home</Link>
      <Link to="/Signin">SignIn</Link>
      <Link to="/SignUp">SignUp</Link>
    </div>
  );
}

export default Navbar;