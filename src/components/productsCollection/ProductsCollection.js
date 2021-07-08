import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Button, Col, Card} from 'react-bootstrap';
import {addItem} from '../../redux/cart/cart.actions';
import './ProductsCollection.css';

const ProductsCollection = ({item, addItem}) => {
    const {id, name, src, price} = item;
    return(
        <Col xs={12} md={6} lg={4} className="product" key={id} >
            <Card className="text-center my-3">
                <Link to={`products/${name}`}><Card.Img variant="top" src={src} alt={name}/></Link> 
                <Card.Body>
                    <Link to={`products/${name}`} className="nav-link"> <Card.Title>{name}</Card.Title></Link> 
                    <Link to={`products/${name}`} className="nav-link"><Card.Text>${price}</Card.Text></Link> 
                    <Button onClick={() => addItem(item)} variant="outline-success mt-3">ADD TO CART</Button>
                </Card.Body>
            </Card>
        </Col>
    )           
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(ProductsCollection);