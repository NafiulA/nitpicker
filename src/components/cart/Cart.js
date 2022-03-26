import React from 'react';
import './Cart.css'
import CartElement from '../cartChoices/CartElement';

const Cart = ({ cart }) => {
    console.log(cart);
    return (
        <div className='cart'>
            <h3>Your Choices</h3>
            <div>
                {
                    cart.map(element => <CartElement key={element.id} cart={element}></CartElement>
                    )}
            </div>
        </div>
    );
};

export default Cart;