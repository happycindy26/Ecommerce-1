import React from 'react';
import {connect} from 'react-redux';

import CartItem from '../cartItem/CartItem';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import './CartDropdown.css';

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items container">
            <div className="row">
            {
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
            }
            </div>
        </div>
        <button className="btn btn-outline-dark">CHECK OUT</button>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);