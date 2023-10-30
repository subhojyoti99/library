import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import { Sidebar } from './Sidebar';

export function Login() {
    const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/auth/user/login', credentials, {
        headers: {
          'Content-Type': 'application/json',
        }

      });

      console.log("Response:", res.data.user.name);

      // Assuming you want to store the JWT token in localStorage
      localStorage.setItem('token', res.data.token);
      localStorage.setItem("username", res.data.user.name);

      // Redirect or handle successful login here
      navigate('/owner/add-new-library')
    } catch (err) {
      console.error("Error:", err);
    }
  }

  return (
    <>
    <Sidebar />
    <div className="container-addbook"> 
    <h2>Login</h2> 
    <hr /> 
    </div>
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={credentials.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={credentials.password} onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
    </div>
    </>
  );
}
