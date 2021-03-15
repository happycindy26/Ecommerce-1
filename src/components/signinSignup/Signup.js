import React, {Component} from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
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
        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.error(error);
        }
    }
    render() {
        return (
            <div className="my-4 mx-3">
                <h5>I do not have an account -- Sign Up</h5>
                
                <form onSubmit={this.handleSubmit}>
                    <div className="my-2">
                        <label htmlFor="exampleInputEmail1" className="form-label"></label>
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
                        <input name="password" type="password" Placeholder="Password" className="form-control" id="exampleInputPassword1"
                        value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div className="my-2">
                        <label htmlFor="exampleInputConfirmPassword1" className="form-label"></label>
                        <input name="confirmPassword" type="password" placeholder="Confirm Password" className="form-control" id="exampleInputConfirmPassword1"
                        value={this.state.confirmPassword} onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-outline-dark px-5 mt-2">Sign Up</button>
                </form>
            </div>
        )
    }
}

export default Signup;