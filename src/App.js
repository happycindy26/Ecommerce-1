import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Products from './components/products/Products';
import ProductsDetails from './components/products/ProductsDetails';
//import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import SigninSignup from './components/signinSignup/SigninSignup';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';
import './App.css';


class App extends Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth);
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/botani" component={Home}/>
          <Route exact path="/botani/home" component={Home}/>
          <Route exact path="/botani/about" component={About} />
          <Route exact path="/botani/products" component={Products} />
          <Route exact path="/botani/products/:name" component={ProductsDetails}/>
          
          <Route exact path="/botani/signin" render={() => this.props.currentUser ?
            (<Redirect to='/botani/products' />) :
            (<SigninSignup />)
            } 
          />
        </Switch>
        <Footer />
      </div>
    );
  }
  
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);

//<Route exact path="/botani/contact" component={Contact} />
