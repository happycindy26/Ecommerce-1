import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';
import './ProductsCollectionDetails.css';

const ProductsCollectionDetails = ({currentProduct, addItem}) => (
    <div className="container">
                <div className="ProductsDetails row justify-content-center align-items-center ">
                    <div className="col-11 col-lg-6">
                        <img src={currentProduct.src} alt={currentProduct.name}/> 
                        </div>
                        <div className="col-6 text-center">
                            <h4 >{currentProduct.name}</h4>
                            <h4 >${currentProduct.price}</h4>  
                            <div class="w-100"></div>
                            <button onClick={() => addItem(currentProduct)} className="btn btn-outline-dark my-5">ADD TO CART </button>  
                        </div>  
                    </div>
                <div className="row">
                    <div className="mx-3 mb-5">
                        <h4>Deccription:</h4>
                        <p>{currentProduct.description}</p>
                        <h4>Ingredients:</h4>
                        <p>{currentProduct.ingredients}</p>
                    </div>
                </div> 
            </div>
)
const mapDispatchToProps = dispatch => ({
    addItem: currentProduct => dispatch(addItem(currentProduct))
})
export default connect(null, mapDispatchToProps)(ProductsCollectionDetails);