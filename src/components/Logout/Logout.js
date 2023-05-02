import React from 'react';
import './Logout.css'
import { Link } from 'react-router-dom';
const Logout = () => {
    return (
        <div className='logout'>
            <h2>SignUp</h2>
            {/* input section */}
            <div className='input'>
                <div>
                    <input type='text' placeholder='Email'></input>
                    <input type='password' placeholder='Password'></input>  
                    <input type='password' placeholder='Re-Password'></input>  
                </div>
            </div>
            <button>Sign Up</button>
            <p>Already have an account? <Link to={'/login'}>Login</Link></p>
            <div className='design-logout'>
                <hr />
                <p>Or</p>
                <hr />
            </div>
            <div className='logout-another'>
                <div className='logout-1'>
                    <div className='img1'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/512px-2021_Facebook_icon.svg.png?20220821121039" alt="" />
                    </div>
                    <div className='logout-another-right'>
                        <Link>Sign Up With Facebook</Link>
                    </div>
                </div>
                <div className='logout-1'>
                    <div className='img1'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="" />
                    </div>
                    <div className='logout-another-right'>
                        <Link>Sign Up With Google</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Logout;