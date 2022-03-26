import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Products from '../products/Products';
import './Store.css'
const Store = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const handleCart = (item) => {
        const length = cart.length;
        const exist = cart.find(element => item.id === element.id);
        if (length < 4) {
            if (exist) {
                alert("You have already Chosen this item");
            }
            else {
                const newCart = [...cart, item];
                setCart(newCart);
            }
        }
        else {
            alert("You can only choose 4 items");
        }
    }

    return (
        <div className='mainBody'>
            <div className='products'>
                {
                    products.map(product => <Products key={product.id} event={handleCart} product={product}></Products>)
                }
            </div>
            <div className='cartBody'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};
export default Store;