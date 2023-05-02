import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login'>
            <h2>Login</h2>
            {/* input section */}
            <div className='input'>
                <div>
                    <input type='text' placeholder='Email'></input>
                    <input type='password' placeholder='Password'></input>  
                </div>
            </div>
            <p><Link>Forget password?</Link></p>
            <button>Login</button>
            <p>Don't have an account? <Link to={'/signup'}>Sign Up</Link></p>
            <div className='design-login'>
                <hr />
                <p>Or</p>
                <hr />
            </div>
            <div className='login-another'>
                <div className='login-1'>
                    <div className='img1'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/512px-2021_Facebook_icon.svg.png?20220821121039" alt="" />
                    </div>
                    <div className='login-another-right'>
                        <Link>Login With Facebook</Link>
                    </div>
                </div>
                <div className='login-1'>
                    <div className='img1'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="" />
                    </div>
                    <div className='login-another-right'>
                        <Link>Login With Google</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;