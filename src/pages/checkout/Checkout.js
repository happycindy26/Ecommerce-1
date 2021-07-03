import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItems from '../../components/checkoutItems/CheckoutItems';
import './Checkout.css';

const Checkout = ({cartItems, total}) => (
    <>
    <div class="container checkout mt-5">
        <div class="row description">
            <div class="col">Remove</div>
            <div class="col">Product</div>
            <div class="col">Name</div>
            <div class="col">Quantity</div>
            <div class="col">Price</div>
        </div>
     
        {cartItems.map(cartItem => 
            (<CheckoutItems key={cartItem.id} cartItem={cartItem} />))
        }
        <div class="col total">Total: ${total}</div>
    </div>
    
    </>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout);