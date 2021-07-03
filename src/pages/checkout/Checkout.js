import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItems from '../../components/checkoutItems/CheckoutItems';
import StripeButton from '../../components/stripeButton/StripeButton';
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
        <div>
            *Please use the following test credit card for payments*
            <br></br>
            4242 4242 4242 4242 - Exp: 07/21 -CVV: 123
            <br></br>
            Please use current Month/Year for Exp
        </div>
        <StripeButton class="stripe" price={total} />
    </div>
    <br></br>
    <br></br>
    </>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout);