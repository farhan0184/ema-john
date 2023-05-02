import React from 'react';
import './header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
           <nav className='header-nav'>
                <img src={logo} alt="" />
                <input type="checkbox" id="nav-toggler"/>
                <label className="nav-toggler-icon" htmlFor="nav-toggler">
                    <i className="fa-solid fa-bars"></i>
                </label>
                <ul className='navigation'>
                    
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/orders">Orders</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
           </nav>
        </div>
    );
};

export default Header;