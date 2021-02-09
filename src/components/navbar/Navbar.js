import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import logo from '../../images/botani_logo.png';
import './Navbar.css';

const Navbar = ({currentUser}) => {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img className="navbar-brand" src={logo} />
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navebarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/botani/home" className="nav-link">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/botani/about" className="nav-link">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/botani/products" className="nav-link">
                                Products
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/botani/contact" className="nav-link">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <form class="d-flex">
                    <input class="form-control mx-2" type="search" placeholder="Search" aria-label="Search"/>
                    <i class="fas fa-search fa-2x" type="submit"></i>
                </form>
                {
                    currentUser ?
                    <button class="btn mx-5 btn-lg nav-link" onClick={() => auth.signOut()}>
                    LogOut
                    </button>
                    :
                    <button class="btn mx-5 btn-lg" >
                    <NavLink to="/botani/signin" className="nav-link">LogIn</NavLink>
                    </button>
                    
                }
            </nav>
        )
    
}

export default Navbar;
