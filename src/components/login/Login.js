import React, {Component} from 'react';
//import CustomButton from '../button/CustomButton';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })   
    }  
    handleSubmit(event) {
        event.preventDefault();
        this.setState({ email: '', password: ''})
    }
    render() {
        return (
            <div className="my-3 mx-5">
                <h1>Sign In</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="my-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            value={this.state.email} onChange={this.handleChange} required/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input name="password" type="password" className="form-control" id="exampleInputPassword1"
                        value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-outline-dark px-5 mt-3">SignIn</button>
                    <button onClick={signInWithGoogle} className="btn btn-outline-dark ml-3 mt-3">SignInWithGoogle</button>
                </form>
            </div>
        )
    }

}

export default Login;