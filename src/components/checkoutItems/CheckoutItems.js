import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {removeItem, addItem, decreaseItem} from '../../redux/cart/cart.actions';
import './CheckoutItems.css';
import { decreaseItemFromCart } from '../../redux/cart/cart.utils';

const CheckoutItems = ({cartItem, removeItem, addItem, decreaseItem}) => {
    const {src, name, quantity, price} = cartItem;
    return(
        <div class="row item">
            <div class="col remove" onClick={() => removeItem(cartItem)} >&#10060;</div>
            <Link class="col"  to={`./products/${name}`}>
                <img class="img" src={src} alt="pic"/>
            </Link>
            {/* <Link to={`./products/${name}`}><img src={src} alt={name}/></Link> */}
            <div class="col">{name}</div>
            <div class="col arrowQuantity">
                <div onClick={() => decreaseItem(cartItem)} class="arrow">&#10094;</div>
                    <span class="quantity">{quantity}</span>
                <div onClick={() => addItem(cartItem)} class="arrow">&#10095;</div>
            </div>
            <div class="col">${price}</div>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)),
    decreaseItem: item => dispatch(decreaseItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItems);