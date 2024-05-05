// SignIn.js
import React from 'react';
import './SignIn.css';
import SignUp from '../SignUp/SignUp';
import {Routes,Route,Link} from 'react-router-dom'
import Home from '../Home/home';
const SignIn = () => {
    return (
        <div className="signin-container">
            <h2>Đăng nhập</h2>           <div ><a href="/">x</a></div> 

            <form>
                <div className="form-group">
                    <label htmlFor="username">Tên người dùng:</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mật khẩu:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <div className="form-group">
                    <button type="submit">Đăng nhập</button>
                </div>
            </form>
            <div className="forgot-register">
                
                <Link to="/SignUp">Đăng ký</Link>
                

                <Routes>
                    <Route path="/SignUp" element={<SignUp />} />
                    
                </Routes>
                
            </div>
          
        </div>
    );
};

export default SignIn;
