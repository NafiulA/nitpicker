import React from 'react';
import './Products.css'
const Products = (props) => {
    const { name, img, price } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='productName'>{name}</p>
            <p>Price: ${price}</p>
        </div>
    );
};

export default Products;