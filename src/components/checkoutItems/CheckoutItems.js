import React from 'react';
import './CheckoutItems.css';

const CheckoutItems = ({cartItem}) => {
    const {src, name, quantity, price} = cartItem;
    return(
        <div class="row">
            <div class="col">&#10060;</div>
            <img class="col img" src={src} alt="pic"/>
            <div class="col">{name}</div>
            <div class="col">{quantity}</div>
            <div class="col">${price}</div>
        </div>
    )
}

export default CheckoutItems;