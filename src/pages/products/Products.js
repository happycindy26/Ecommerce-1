import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectProductsItems} from '../../redux/products/products.selectors';
import ProductsCollection from '../../components/productsCollection/ProductsCollection';


const Products = ({productsData}) => (
    <div className="Products my-5">
        <h3 className="text-center my-5">Best Sellers</h3>
        <div className="container">
            <div className="row">
            {
                productsData.map(item => (
                    <ProductsCollection key={item.id} item={item}/>
                ))
            }
            </div>
        </div>
    </div>
)
const mapStateToProps = createStructuredSelector({
    productsData: selectProductsItems
})
// const mapStateToProps = (state) => ({
//     productsData: state.products.productsData
// })

export default connect(mapStateToProps)(Products);
