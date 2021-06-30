import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
//import {connect} from 'react-redux';
//import {addItem} from '../../redux/cart/cart.actions';
import ProductsData from './ProductsData';
import ProductsCollection from '../../components/productsCollection/ProductsCollection';


class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: ProductsData
        };
    }
    render() {
        const {products} = this.state;
        return(
            <div className="Products my-5">
                <h3 className="text-center my-5">Best Sellers</h3>
                <div className="container">
                    <div className="row">
                    {
                        products.map(item => (
                            <ProductsCollection key={item.id} item={item}/>
                        ))
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default Products;

/*
    render() {
        return (
                <div className="Products my-5">
                <h3 className="text-center my-5">Best Sellers</h3>
                <div className="container">
                    <div className="row">
                        {this.state.products.map((product) => (
                            <div className="Product col-md-6 col-lg-4 text-center" key={product.name} >
                                <Link to={`./products/${product.name}`} >
                                <img src={product.src} alt={product.name}/>
                                </Link>
                            
                                <Link className="underline" to={`./products/${product.name}`} ><h6>${product.name}</h6></Link>
                                <Link className="underline my-3" to={`./products/${product.name}`} ><h5>${product.price}</h5></Link>
                                <button onClick={() => addItem(product)} className="btn btn-outline-dark my-5">ADD TO CART </button>  
                            
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(Products);
*/
/*
<Link to={`./products/${product.name}/addtocart`} className="btn btn-outline-dark mb-5">
                                ADD TO CART    
                                </Link> 
                                */

