import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './UserAuth';
import { useNavigate } from 'react-router-dom';
import './NewNav.css';

function NewNav() {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    navigate('/');
  };

  return (
    <div className="nav-new">
      <Link to="/em">EmployeeDetail</Link>
      <Link to="/e">AddEmployee</Link>
      <button onClick={handleLogout}>LogOut</button>
    </div>
  );
}

export default NewNav;