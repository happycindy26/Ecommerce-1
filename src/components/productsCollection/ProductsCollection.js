import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';

import './ProductsCollection.css';


const ProductsCollection = ({item, addItem}) => {
    const {id, name, src, price} = item;
    return(
        <>
        {
        <div className="Product col-md-6 col-lg-4 text-center" key={id} >
            <Link to={`./products/${name}`}><img src={src} alt={name}/></Link>
            <Link className="underline" to={`./products/${name}`} ><h6>${name}</h6></Link>
            <Link className="underline" to={`./products/${name}`} ><h6>${price}</h6></Link>
            <button onClick={()=> addItem(item)} className="btn btn-outline-dark my-5">ADD TO CART </button>  
        </div>
        }
    </> 
    )           
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(ProductsCollection);