import React, { Component } from "react";
import { Link } from "react-router-dom";
import uuid from "uuid"
export default class WebsiteNew extends Component { 

    state={
        uid: this.props.match.params.uid,
        websites: [],
        name: "",
        description: ""
    }

    componentDidMount(){
        this.filterWebsites(this.props.websites);
    }

    filterWebsites = (websites) => {
        const newWebsites = websites.filter(
            website => (website.developerId === this.state.uid)
        )
        this.setState({
            websites: newWebsites
        })
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = e => {
        const {name, description, uid} = this.state
        e.preventDefault();
        const newWeb = {
            _id: uuid(), 
            name, 
            developerId: uid, 
            description
        }
        this.props.addWeb(newWeb);
        this.props.history.push(`/user/${this.state.uid}/website`);
    }

    render() {
        const {uid} = this.state;
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary fixed-top row">
                    <div className="col-4 d-none d-sm-block">
                        <Link className="color-white" to={`/user/${uid}/website`}>
                            <i className="fas fa-chevron-left" />
                        </Link>
                        <Link className="color-white" to={`/user/${uid}/website`}>
                            <h5>Websites</h5>
                        </Link>
                        <span
                            className="color-white float-right"
                        >
                            <i className="fas fa-plus" />
                        </span>
                    </div>

                    <div className="col-sm-8">
                        <Link
                            className="color-white d-sm-none"
                            to="/user/:uid/website"
                        >
                            <i className="fas fa-chevron-left" />
                        </Link>
                        <span className="color-white">
                            <h5 className="display-inline">New Website</h5>
                        </span>
                        <button
                            form="newWebForm"
                            className="color-white float-right btn"
                        >
                            <i className="fas fa-check" />
                        </button>
                    </div>
                </nav>

                <div className="row">
                    <div className="col-4 d-none d-sm-block">
                        <div className="container-fluid">
                            <ul className="list-group">
                            {
                            this.state.websites.map(
                                (website) => (
                                    <li key={website._id} className="list-group-item">
                                        <Link to={`/user/${uid}/website/${website._id}/page`}>{website.name}</Link>
                                        <Link to={`/user/${uid}/website/${website._id}`} className="float-right">
                                            <i className="fas fa-cog"></i>
                                        </Link>
                                    </li>
                                )
                            )
                        }
                            </ul>
                        </div>
                    </div>

                    <div className="col-sm-8">
                        <div className="container-fluid">
                            <form id="newWebForm" onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <b>Name</b>
                                    </label>
                                    <input
                                        id="name"
                                        className="form-control"
                                        type="text"
                                        placeholder="Name of the Website"
                                        name="name"
                                        onChange={this.onChange}
                                        value={this.state.name}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">
                                        <b>Description</b>
                                    </label>
                                    <textarea
                                        id="description"
                                        rows="5"
                                        className="form-control"
                                        type="text"
                                        placeholder="Describe the Website"
                                        name="description"
                                        onChange={this.onChange}
                                        value={this.state.description}
                                    />
                                </div>
                                <Link
                                    to={`/user/${uid}/website`}
                                    className="btn btn-lg btn-warning"
                                >
                                    Cancel
                                </Link>
                                <button
                                    className="btn btn-lg btn-success float-right"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-dark bg-primary fixed-bottom">
                    <div className="full-width">
                        <Link
                            className="color-white float-right"
                            to={`/user/${uid}`}
                        >
                            <i className="fas fa-user" />
                        </Link>
                    </div>
                </nav>
            </div>
        );
    }
}