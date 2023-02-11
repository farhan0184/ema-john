import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className='left'>
                <div>
                    <small>Sale up to 70% off</small>
                    <h1>New Collection For Fall</h1>
                    <p>Discover all the new arrivals of ready-to-wear collection.</p>
                    <button><a href="/shop">SHOP NOW</a></button>
                </div>
            </div>
            <div className='right'>
                <div className='right-img'>
                    <div className="image">
                
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;