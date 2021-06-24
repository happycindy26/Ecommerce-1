import React, {Component} from 'react';
import Signin from './Signin';
import Signup from './Signup';
import './SigninSignup.css';


class SigninSignup extends Component {
    render() {
        return (
            <div className="SigninSignup">
                <Signin />
                <Signup />
            </div>
        )
    }
}

export default SigninSignup;