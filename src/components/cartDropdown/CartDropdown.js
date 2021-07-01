import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import CartItem from '../cartItem/CartItem';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

import './CartDropdown.css';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items container">
            <div className="row">
            {cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
                ) : (
                <span className="cartMessage">Your cart is empty</span>
                )
            }
            </div>
        </div>
        <button className="btn btn-outline-dark" onClick={() => {
          
            history.push('/botani/checkout');
            dispatch(toggleCartHidden());
           
            }}>CHECK OUT</button>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));