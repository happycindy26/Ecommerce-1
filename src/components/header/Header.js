import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {Navbar, Nav} from 'react-bootstrap';
import {auth} from '../../firebase/firebase.utils';
import logo from '../../images/botani_logo.png';
import CartIcon from '../cartIcon/CartIcon';
import CartDropdown from '../cartDropdown/CartDropdown';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import './Header.css';

const Header = ({currentUser, hidden}) => (
    <Navbar className="header">
        <Navbar.Brand href="#home"><img className="logo" src={logo} alt="logo"/></Navbar.Brand>
        <Nav className="me-auto navName">
            <NavLink to="/botani/home" className="nav-link">Home</NavLink>
            <NavLink to="/botani/about" className="nav-link mx-3">About</NavLink>
            <NavLink to="/botani/products" className="nav-link">Products</NavLink>
        </Nav>
        <Nav className="signCart">
            {
            currentUser ?
            <NavLink to="" class="nav-link" onClick={() => auth.signOut()}>
            SignOut
            </NavLink>
            :
            <div className="" >
            <NavLink to="/botani/signin" className="nav-link">SignIn</NavLink>
            </div> 
            }
            <CartIcon />
        </Nav>
        {
            hidden ? null : <CartDropdown />
        }
    </Navbar>    
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
