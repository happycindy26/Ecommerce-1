import React from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {addItem} from '../../redux/cart/cart.actions';
import './ProductsCollectionDetails.css';

const ProductsCollectionDetails = ({currentProduct, addItem}) => (
    <Container>
        <Row className="justify-content-center align-items-center">
            <Col >
                <img src={currentProduct.src} alt={currentProduct.name}/> 
            </Col>  
            <Col className="text-center">
                <h4 >{currentProduct.name}</h4>
                <h4 >${currentProduct.price}</h4>  
                <Button onClick={() => addItem(currentProduct)} variant="outline-success my-3">ADD TO CART </Button>  
            </Col>  
        </Row>  
        <Row className="mb-5">
            <h4>Deccription:</h4>
            <p>{currentProduct.description}</p>
            <h4>Ingredients:</h4>
            <p>{currentProduct.ingredients}</p>
        </Row>
    </Container>
)

const mapDispatchToProps = dispatch => ({
    addItem: currentProduct => dispatch(addItem(currentProduct))
})
export default connect(null, mapDispatchToProps)(ProductsCollectionDetails);
   