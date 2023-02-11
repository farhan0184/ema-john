import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';



import './Shop.css'
const Shop = () => {
    const [products,setProducts] = useState([])
    const [cart,setCart] =useState([])
    const handleProductCart = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart)
    }
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json()
        .then(data => setProducts(data)))
    },[])
    return (
        <div className='shop-container'>
           <div  className="product-container">
                {
                    products.map(product => <Product key={product.id} func={handleProductCart} product={product}></Product>)
                }
           </div>
           <div className="order-container">
            <h4>Order Summery</h4>
            <p>Selected Items: {cart.length}</p>
            </div> 
        </div>
    );
};

export default Shop;