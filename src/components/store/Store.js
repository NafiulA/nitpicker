import React, { useEffect, useState } from 'react';
import Products from '../products/Products';
import './Store.css'
const Store = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div className='mainBody'>
            <div className='products'>
                {
                    products.map(product => <Products key={product.id} product={product}></Products>)
                }
            </div>
            <div>
                <p>id</p>
            </div>
        </div>
    );
};
export default Store;