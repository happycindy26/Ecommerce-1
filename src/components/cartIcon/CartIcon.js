import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import {ReactComponent as BagIcon} from '../../images/shopping-bag.svg';
import './CartIcon.css';

const CartIcon = ({toggleCartHidden, itemcount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <BagIcon className="bag-icon"/>
        <span className="item-count">{itemcount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemcount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

