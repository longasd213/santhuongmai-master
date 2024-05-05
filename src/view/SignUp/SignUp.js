// SignUp.js
import React, { useState } from 'react';
import './SignUp.css';
import {Routes,Route,Link} from 'react-router-dom'
import SignIn from '../SignIn/SignIn';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rePassword: '',
    fullName: '',
    email: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <input type="password" name="rePassword" placeholder="Confirm Password" value={formData.rePassword} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} required></textarea>
        </div>
        <button type="submit">Sign Up</button>
      </form>
        <div className="forgot-signin">
                
          <Link to="/SignIn">Đăng nhập</Link>

         <Routes>
          <Route path="/SignIn" element={<SignIn />}/>
        </Routes> 
        </div>
       
    </div>
    
  );
};

export default SignUp;
