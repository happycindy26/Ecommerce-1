import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {getProduct} from './ProductsData';
//import './ProductsDetails.css';

class ProductsDetails extends Component {
  
    render() {
        const name = this.props.match.params.name;
        const currentProduct = getProduct(name);
        return (
            <div className="container">
                <div className="ProductsDetails row justify-content-center align-items-center ">
                    <div className="col-11 col-lg-6">
                        <img src={currentProduct.src} alt={currentProduct.name}/> 
                        </div>
                        <div className="col-6 text-center">
                            <h4 >{currentProduct.name}</h4>
                            <h4 >${currentProduct.price}</h4>    
                            <input type="number" max="20" min="0" />
                            <div class="w-100"></div>
                            <Link to={`./${currentProduct.name}/addtocart`} className="btn btn-primary my-5">
                                ADD TO CART    
                            </Link>  
                        </div>  
                    </div>
                <div className="row">
                    <div>
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

export default ProductsDetails;
