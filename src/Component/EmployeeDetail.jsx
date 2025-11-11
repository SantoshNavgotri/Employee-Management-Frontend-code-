import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Component/Employeedetails.css';

export default function EmployeeDetail() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('https://employee-management-backend-code.onrender.com/api/get');
      setEmployees(response.data.user);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching employees:', error);
      setLoading(false);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`https://employee-management-backend-code.onrender.com/api/delete/${id}`);
      fetchEmployees();
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const handleEditClick = (employee) => {
    setEditingEmployee({ ...employee });
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setEditingEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://employee-management-backend-code.onrender.com/api/update/${editingEmployee._id}`, editingEmployee);
      setEditingEmployee(null);
      fetchEmployees();
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className='main-div'>
      <h1 className='demo'>Employee Details</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className='table'>
          <thead>
            <tr className='table-head'>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp._id} className='table-data'>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
                <td>{emp.city}</td>
                <td>{emp.salary}</td>
                <td>
                  <button className='btn-delete' onClick={() => deleteEmployee(emp._id)}>Delete</button>
                  <button className='btn-update' onClick={() => handleEditClick(emp)}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {editingEmployee && (
        <div className='update-form'>
          <h3>Update Employee</h3>
          <form onSubmit={handleUpdateSubmit}>
            <input type='text' name='name' value={editingEmployee.name} onChange={handleUpdateChange} placeholder='Name' required />
            <input type='number' name='age' value={editingEmployee.age} onChange={handleUpdateChange} placeholder='Age' required />
            <input type='text' name='city' value={editingEmployee.city} onChange={handleUpdateChange} placeholder='City' required />
            <input type='number' name='salary' value={editingEmployee.salary} onChange={handleUpdateChange} placeholder='Salary' required />
            <button type='submit' className='btn-save'>Save</button>
            <button type='button' className='btn-cancel' onClick={() => setEditingEmployee(null)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
}