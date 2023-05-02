import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';



import './Shop.css'
import { useLoaderData } from 'react-router-dom';
const Shop = () => {
    const products = useLoaderData()
    const [cart,setCart] =useState([])
    const handleProductCart = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart) // set order summery
        addToDb(product.id) // database save hosa 
    }
    
    const clearAll = () =>{
        setCart([])
        deleteShoppingCart()
    }
    useEffect(()=>{
        const storeCart = getStoreCart();
        
        const newSave = []
        for (const id in storeCart) {
            const addProduct = products.find(product => product.id === id)
            if(addProduct){
                const quantity = storeCart[id]
                
                addProduct.quantity = quantity
                
                newSave.push(addProduct)
                
            }
        }
        setCart(newSave)
        
    },[cart])
    
    return (
        <div className='shop-container'>
           <div  className="product-container">
                {
                    products.map(product => <Product key={product.id} func={handleProductCart} product={product}></Product>)
                }
           </div>
           <div className="order-container">
                <Cart cart={cart} clearFun={clearAll}></Cart>
            </div> 
        </div>
    );
};

export default Shop;