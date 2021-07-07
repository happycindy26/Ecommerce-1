import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {Container, Row, Button} from 'react-bootstrap';

import CartItem from '../cartItem/CartItem';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import './CartDropdown.css';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <Container className="cart-items">
            <Row>
            {cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
                ) : (
                <span className="cartMessage">Your cart is empty</span>
                )
            }
            </Row>
        </Container>
        <Button variant="outline-primary mt-3" onClick={() => {  
            history.push('/botani/checkout');
            dispatch(toggleCartHidden());
            }}
            >CHECK OUT
        </Button>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));

