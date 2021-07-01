import React from 'react';
import './CartItem.css';

const CartItem = ({item: {src, price, name, quantity}}) => (
    <div className="CartItem ">
        <img src={src} alt="item"/>
        <div className="itemDetails">
            <p>{name}</p>
            <p>${price} x {quantity}</p>
        </div>
    </div>
)

export default CartItem;