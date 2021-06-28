import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';
import ProductsData from '../products/ProductsData';
//import './ProductsDetails.css';

class ProductsDetails extends Component {
    render() {
        const name = this.props.match.params.name;
        let currentProduct;
        const getProduct = (name) => {
              currentProduct = ProductsData.find(
              (product) => product.name.toLowerCase() === name.toLowerCase()
              );
              return currentProduct;
          }
        getProduct(name);
  
        return (
            <div className="container">
                <div className="ProductsDetails row justify-content-center align-items-center ">
                    <div className="col-11 col-lg-6">
                        <img src={currentProduct.src} alt={currentProduct.name}/> 
                        </div>
                        <div className="col-6 text-center">
                            <h4 >{currentProduct.name}</h4>
                            <h4 >${currentProduct.price}</h4>  
                            <input type="number" max="20" min="1" />
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
    }
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(ProductsDetails);

/*
<Link to={`./${currentProduct.name}/addtocart`} className="btn btn-outline-dark my-5">
                                ADD TO CART    
                            </Link> 
                            */
