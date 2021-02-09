import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Products from './Products';
//import './ProductsDetails.css';



class ProductsDetails extends Component {
    constructor(props) {
        super(props);
        
    }
   

    render() {
        
       
        return (
            <div className="container">
               
            </div>
            
        )
    }
}

export default ProductsDetails;
/*
const getProduct = props => {
            let name = props.match.params.name;
            let currentProduct = this.props.products.find(
                product => product.name.tolowerCase() === name.tolowerCase()
            );
            return <ProductsDetails {...props} product={currentProduct} />
        }
<div className="ProductsDetails row align-items-center ">
                <div className="col-6">
                    <img src={currentProduct.src} alt={currentProduct.name}/> 
                    </div>
                    <div className="col-3 text-center">
                        <h4 >{currentProduct.name}</h4>
                        <h4 >${currentProduct.price}</h4>    
                        <input type="number" max="20" min="0" />
                        <div class="w-100"></div>
                        <Link to={`./${currentProduct.name}/addtocart`} className="btn btn-primary">
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
                
/*
getProduct(name) {
        let currentProduct = this.props.products.find(
        product => product.name.toLowerCase() === name.trim().toLowerCase()
        );
        return currentProduct;
    }
<div className="ProductsDetails row align-items-center ">
                <div className="col-6">
                    <img src={product.src} alt={product.name}/> 
                    </div>
                    <div className="col-3 text-center">
                        <h4 >{product.name}</h4>
                        <h4 >${product.price}</h4>    
                        <input type="number" max="20" min="0" />
                        <div class="w-100"></div>
                        <Link to={`./${product.name}/addtocart`} className="btn btn-primary">
                            ADD TO CART    
                        </Link>  
                    </div>  
                    
                </div>
                <div className="row">
                    <div>
                        <h4>Deccription:</h4>
                        <p>{product.description}</p>
                        <h4>Ingredients:</h4>
                        <p>{product.ingredients}</p>
                    </div>
                </div>
    */
