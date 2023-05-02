import React from 'react';
import './ReviewProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewProduct = ({product,handleRemoveCart}) => {
    const {id,name,img, price, quantity,shipping} = product
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-details-container'>
                <div className='review-details'>
                    <p>{name}</p>
                    <p><small>Quantity: <span>{quantity}</span></small></p>
                    <p><small>Shipping: $<span>{shipping}</span></small></p>
                    <p><small>Price: $<span>{price}</span></small></p>
                </div>
                <div className="delete-container">
                    <button onClick={()=>handleRemoveCart(id)} className='btn-delete'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewProduct;