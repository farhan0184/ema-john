import React from 'react';
import './Cart.css'

const Cart = ({cart,clearFun})=> {
    
    let total = 0
    let shipping = 0
    let productPrice = 0
    let totalProductQuantity = 0
    for (const product of cart) {
        
        totalProductQuantity += product.quantity
        
        productPrice = product.price * product.quantity
        total += productPrice
        shipping += product.shipping
    }
    const tax = +((total + shipping) * 0.1).toFixed(2)
    const grandTotal = total + shipping + tax
    return (
        <div className='cart'>
            <h3>Order Summery</h3>
            <p>Selected Items: {totalProductQuantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal}</h4>
            <button onClick={clearFun}>DeleteAllCart</button>
        </div>
    );
};

export default Cart;