import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import ProductsCollectionDetails from '../../components/productsCollectionDetails/ProductsCollectionDetails';
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
            <ProductsCollectionDetails currentProduct = {currentProduct} />
        )
    }
}



export default ProductsDetails;

/*
<Link to={`./${currentProduct.name}/addtocart`} className="btn btn-outline-dark my-5">
                                ADD TO CART    
                            </Link> 
                            */
