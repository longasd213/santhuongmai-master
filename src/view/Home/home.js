import {Routes,Route,Link} from 'react-router-dom'
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'
import React from 'react';
function Home()
{
    return(
        

        <div className='home'>

      
                        <a href="SignIn">Dang nhap</a>
                        <a href="SignUp">Dang ky</a>
            <Routes>
                <Route path="SignIn" element={<SignIn /> } />
                <Route path="/SignUp" element={<SignUp /> } />
             </Routes>

        </div>
    );
}
export default Home;