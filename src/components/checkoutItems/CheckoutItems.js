import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';

import {removeItem, addItem, decreaseItem} from '../../redux/cart/cart.actions';
import './CheckoutItems.css';

const CheckoutItems = ({cartItem, removeItem, addItem, decreaseItem}) => {
    const {src, name, quantity, price} = cartItem;
    return(
        <Row className="item">
            <Col className="remove" onClick={() => removeItem(cartItem)} >&#10060;</Col>
            <Col>
                <Link className="" to={`./products/${name}`}>
                    <img className="img" src={src} alt="pic"/>
                </Link>
            </Col>
            <Col>
                <Link className="nav-link" to={`./products/${name}`}>{name}</Link>
            </Col>
            <Col className="arrowQuantity">
                <div onClick={() => decreaseItem(cartItem)} className="arrow">&#10094;</div>
                    <span className="mx-3">{quantity}</span>
                <div onClick={() => addItem(cartItem)} className="arrow">&#10095;</div>
            </Col>
            <Col>${price}</Col>
        </Row>
    )
}
const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)),
    decreaseItem: item => dispatch(decreaseItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItems);
