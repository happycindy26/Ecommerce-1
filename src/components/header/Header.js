import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {Container, Navbar, Nav} from 'react-bootstrap';
import {auth} from '../../firebase/firebase.utils';
import logo from '../../images/botani_logo.png';
import CartIcon from '../cartIcon/CartIcon';
import CartDropdown from '../cartDropdown/CartDropdown';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import './Header.css';

const Header = ({currentUser, hidden}) => (
    
    <Navbar className="header">
        <Container>
            <Navbar.Brand href="#home"><img className="logo" src={logo} alt="logo"/></Navbar.Brand>
            <Nav className="me-auto navName">
                <NavLink to="/botani/home" className="navLink">Home</NavLink>
                <NavLink to="/botani/about" className="navLink mx-3">About</NavLink>
                <NavLink to="/botani/products" className="navLink">Products</NavLink>
            </Nav>
            <div className="navbar">
                {
                currentUser ?
                <div class="" onClick={() => auth.signOut()}>
                SignOut
                </div>
                :
                <div className="" >
                <Link to="/botani/signin" className="navLink">SignIn</Link>
                </div> 
                }
                <CartIcon />
            </div>
            {
                hidden ? null : <CartDropdown />
            }
        </Container>
    </Navbar>    
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
