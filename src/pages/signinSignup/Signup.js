import React, {Component} from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
            error: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }
    async handleSubmit(event) {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        try {
            if (password.length < 6) {
                this.setState({
                    ...this.state, 
                    error: <p>{"Password should be at least 6 characters"}</p>
                });
            } else if (password !== confirmPassword) {
                this.setState({
                    ...this.state, 
                    error: <p>{"Passwords don't match"}</p>
                });
            } else {
                const {user} = await auth.createUserWithEmailAndPassword(email, password);
                await createUserProfileDocument(user, {displayName});
                this.setState({
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                })
            }
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                this.setState({
                    ...this.state, 
                    error: <p>{error.message}</p>
                });
            }
        }
    }
    render() {
        return (
            <div className="my-4 mx-3">
                <h5>I do not have an account -- Sign Up</h5>
                
                <form onSubmit={this.handleSubmit}>
                    <div className="my-2">
                        <label htmlFor="exampleInputName1" className="form-label"></label>
                        <input name="displayName" type="text" placeholder="Name" className="form-control" id="exampleInput" 
                            value={this.state.displayName} onChange={this.handleChange} required/>
                    </div>
                    <div className="my-2">
                        <label htmlFor="exampleInputEmail1" className="form-label"></label>
                        <input name="email" type="email" placeholder="Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            value={this.state.email} onChange={this.handleChange} required/>
                    </div>
                    <div className="my-2">
                        <label htmlFor="exampleInputPassword1" className="form-label"></label>
                        <input name="password" type="password" placeholder="Password" className="form-control" id="exampleInputPassword1"
                        value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div className="my-2">
                        <label htmlFor="exampleInputConfirmPassword1" className="form-label"></label>
                        <input name="confirmPassword" type="password" placeholder="Confirm Password" className="form-control" id="exampleInputConfirmPassword1"
                        value={this.state.confirmPassword} onChange={this.handleChange} />
                    </div>
                    {this.state.error}
                    <button type="submit" className="btn btn-outline-dark px-5 mt-2">Sign Up</button>
                </form>
            </div>
        )
    }
}

export default Signup;