import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Home.css';
import homeImg from '../../images/pexels.jpg';

class Home extends Component {
    render() {
        return (
            <div class="card text-black text-left">
                <img src={homeImg} class="card-img" alt="skin care"/>
                <div class="card-img-overlay ml-5 mt-5">
                    <h3 className="">Organic, Vegan Skincare Products Australia</h3>
                    <NavLink to="/botani/products">
                        <button type="button" className="btn btn-success my-4">SHOP NOW</button>
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default Home;
