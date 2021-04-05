import React from 'react';
import {ReactComponent as BagIcon} from '../../images/shopping-bag.svg';
import './CartIcon.css';

const CartIcon = () => (
    <div className="cart-icon">
        <BagIcon className="bag-icon"/>
        <span className="item-count">0</span>
    </div>
);

export default CartIcon;

