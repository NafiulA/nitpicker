import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import './Modal.css'

const Modal = ({ item, setOpenModal }) => {
    return (
        <div>
            <div className='modalContainer'>
                <div className='modalBody'>
                    <button className='closeModalBtn' onClick={() => setOpenModal(false)}>
                        <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
                    </button>
                    <h2>We have Chosen this product for you!</h2>
                    <img src={item.img} alt="" />
                    <p className='productName'>{item.name}</p>
                    <p>Price: ${item.price}</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;