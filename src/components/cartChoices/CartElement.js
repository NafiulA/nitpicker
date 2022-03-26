import React from 'react';
import './CartElement.css'
const CartElement = ({ cart }) => {
    return (
        <div className='elementBody'>
            <img className='elementImg' src={cart.img} alt="" />
            <p>{cart.name}</p>
        </div>
    );
};

export default CartElement;