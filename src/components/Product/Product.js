import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = ({product,func}) => {
    const {id,name, img,price,seller,ratings} = product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3>{name}</h3>
                <h4>Price: {price}</h4>
                <small>Manufacturer : {seller}</small>
                <br />
                <small>Rating : {ratings}</small>
            </div>
            <button onClick={()=> func(product)}>Add to Cart <span><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span></button>
        </div>
    );
};

export default Product;