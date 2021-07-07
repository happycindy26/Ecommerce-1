import React, {Component} from 'react';
import ProductsCollectionDetails from '../../components/productsCollectionDetails/ProductsCollectionDetails';
import ProductsData from '../../redux/products/productsData';

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

