import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Products = (props) => {
    const { name, img, price } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='productName'>{name}</p>
            <p>Price: ${price}</p>
            <button onClick={() => props.event(props.product)} className='cartBtn'>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Products;