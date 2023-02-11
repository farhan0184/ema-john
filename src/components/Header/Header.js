import React from 'react';
import './header.css';
import logo from '../../images/Logo.svg'

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
                    {/* <li><a href="/">Home</a></li> */}
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/orders">Orders</a></li>
                    <li><a href="/inventory">Inventory</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
           </nav>
        </div>
    );
};

export default Header;