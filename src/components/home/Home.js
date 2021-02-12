import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';
import groupProducts from '../../images/blond.jpg';
class Home extends Component {
    render() {
        return (
            <div class="card text-black text-center">
                <img src={groupProducts} class="card-img" alt="..."/>
                <div class="card-img-overlay mt-3">
                    <h3 className="  ">Organic, Vegan Skincare Products Australia</h3>
                    <NavLink to="/botani/products">
                        <button type="button" className="btn btn-success my-4">SHOP NOW</button>
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default Home;
