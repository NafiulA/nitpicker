import React from 'react';
import './Cart.css'
import CartElement from '../cartChoices/CartElement';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom, faRefresh } from '@fortawesome/free-solid-svg-icons'

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
            <button className='randomizerBtn'>
                <p>Choose for me</p>
                <FontAwesomeIcon icon={faRandom}></FontAwesomeIcon>
            </button>
            <button className='resetBtn'>
                <p>Reset</p>
                <FontAwesomeIcon icon={faRefresh}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Cart;