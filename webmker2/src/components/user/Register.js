import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Register extends Component {

    state = {
        username: "",
        password: "",
        password2: ""
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const {username, password, password2} = this.state;
        this.register(username, password, password2);
    }

    register(username, password, password2) {
        // Does passwords match
        if(password !== password2) {
            alert("The passwords are not match");
            return;
        }

        // Check if username is available
        for(let user of this.props.users){
            if(user.username === username){
                alert("Username is taken, please try another one");
                return;
            }
        }

        // Add new user into users array;
        const newUser = {
            _id: (parseInt(this.props.users[this.props.users.length -1]._id) + 1).toString(),
            username,
            password,
            email: "",
            firstName: "",
            lastName: ""
        };
        this.props.addUser(newUser);

        // Navigate to profile
        this.props.history.push(`/user/${newUser._id}`);
    }

    render() {
        const {username, password, password2} = this.state
        return (
            <div className="container">
                <h1>Register</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            className="form-control"
                            value = {username}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password2">Verify Password</label>
                        <input
                            id="password2"
                            name="password2"
                            type="password"
                            className="form-control"
                            value={password2}
                            onChange={this.onChange}
                        />
                    </div>
                    <button
                        className="btn btn-primary btn-block"
                    >
                        Register
                    </button>
                    <Link className="btn btn-danger btn-block" to="/login">
                        Cancel
                    </Link>
                </form>
            </div>
        );
    }
}