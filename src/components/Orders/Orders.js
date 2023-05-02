import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewProduct from '../ReviewProduct/ReviewProduct';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const {products,initialCart} = useLoaderData()
    const [cart, setCart] = useState(initialCart)
    const handleRemoveCart = (id) =>{
        const remaining = cart.filter(item => item.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }
    return (
        <div className='shop-container'>
            <div className="orders-container">
                {
                    cart.map(product => 
                        <ReviewProduct key={product.id} product={product} handleRemoveCart={handleRemoveCart}></ReviewProduct>
                    )
                }
            </div>
            <div className="order-container">
                <Cart cart={cart}></Cart>   
            </div>
        </div>
    );
};

export default Orders;