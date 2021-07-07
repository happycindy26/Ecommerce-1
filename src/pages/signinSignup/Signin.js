import React, {Component} from 'react';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: null
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
            if (error.code === "auth/user-not-found") {
                this.setState({
                    ...this.state,
                    error: <p>{"This email doesn't exist, please sign up"}</p>
                })
            } else if (error.code === "auth/wrong-password") {
                this.setState({
                    ...this.state,
                    error: <p>{"Invalid password"}</p>
                })
            }
        }
    }
    render() {
        return (
            <div className="my-4 mx-3">
                <h5>I already have an account</h5>
                <span>Sign In</span>
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
                    {this.state.error}
                    <button type="submit" className="btn btn-outline-dark px-5 mt-3">Sign In</button>
                    <button type="button" onClick={signInWithGoogle} className="btn btn-outline-dark ml-3 mt-3">SignInWithGoogle</button>
                </form>
            </div>
        )
    }
}

export default Signin;