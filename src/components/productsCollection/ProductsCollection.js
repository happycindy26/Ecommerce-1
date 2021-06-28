import React from 'react';
import {Link} from 'react-router-dom';
import './ProductsCollection.css';

const ProductsCollection = (product) => (
    <>
        {
        <div className="Product col-md-6 col-lg-4 text-center" key={product.name} >
            <Link to={`./products/${product.name}`}><img src={product.src} alt={product.name}/></Link>
            <Link className="underline" to={`./products/${product.name}`} ><h6>${product.name}</h6></Link>
            <Link className="underline" to={`./products/${product.name}`} ><h6>${product.price}</h6></Link>
            <button className="btn btn-outline-dark my-5">ADD TO CART </button>  
        </div>
        }
    </>            
)

export default ProductsCollection;