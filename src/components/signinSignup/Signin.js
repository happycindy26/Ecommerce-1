import React, {Component} from 'react';
//import CustomButton from '../button/CustomButton';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

class Signin extends Component {
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
    async handleSubmit(event) {
        event.preventDefault();
        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: ''})
            
        } catch (error) {
            console.log(error);
        }
        

    }
    render() {
        return (
            <div className="my-4 mx-5">
                <h3>I already have an account</h3>
                <span>Sign in with your email</span>
                <form onSubmit={this.handleSubmit}>
                    <div className="my-4">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            value={this.state.email} onChange={this.handleChange} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input name="password" type="password" className="form-control" id="exampleInputPassword1"
                        value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-outline-dark px-5 mt-3">Sign In</button>
                    <button type="button" onClick={signInWithGoogle} className="btn btn-outline-dark ml-3 mt-3">SignInWithGoogle</button>
                </form>
            </div>
        )
    }

}

export default Signin;