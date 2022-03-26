import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Modal from '../Modal/Modal';
import Products from '../products/Products';
import './Store.css'
const Store = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [random, setRandom] = useState([]);
    const [openModal, setOpenModal] = useState(false);
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

    const handleRandomizer = () => {
        let selectedItem = [];
        if (cart.length > 0) {
            const randomValue = Math.round(Math.random() * (cart.length - 1));
            selectedItem[0] = cart[randomValue];
            setRandom(selectedItem);
            setOpenModal(true);
        }
        else {
            alert("You have not chosen anything yet! Please choose four items of your choice.")
        }
    }

    const handleResetBtn = () => {
        const emptyCart = [];
        setCart(emptyCart);
    }
    return (
        <div className='mainBody'>
            <div className='storeBody'>
                <div className='products'>
                    {
                        products.map(product => <Products key={product.id} event={handleCart} product={product}></Products>)
                    }
                </div>
                <div className='cartBody'>
                    <Cart handleRandomizer={handleRandomizer} handleResetBtn={handleResetBtn} cart={cart}></Cart>
                </div>
            </div>
            {openModal && random.map(item => <Modal key={item.id} item={item} setOpenModal={setOpenModal}></Modal>)}
        </div>
    );
};
export default Store;