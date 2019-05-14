import React, { Component } from "react";
import { Link } from "react-router-dom";
import uuid from "uuid";

export default class PageNew extends Component {

    state = {
        uid: "",
        wid: "",
        name: "",
        title: ""
    }

    componentDidMount() {
        this.setState({
            uid: this.props.match.params.uid,
            wid: this.props.match.params.wid
        })    
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const newPage = {
            _id: uuid(),
            name: this.state.name,
            websiteId: this.state.wid,
            title: this.state.title
        }
        this.props.addPage(newPage);
        this.props.history.push(`/user/${this.state.uid}/website/${this.state.wid}/page`)
    }

    render() {
        const {uid, wid, name, title} = this.state;

        return (
            <div>
                <nav className="navbar navbar-light fixed-top bg-light">
                    <Link className="color-black" to={`/user/${uid}/website/${wid}/page`}>
                        <i className="fas fa-chevron-left" />
                    </Link>
                    <span className="navbar-brand">
                        New Page
                    </span>
                    <button className="color-black btn" form="newPageForm">
                        <i className="fas fa-check" />
                    </button>
                </nav>

                <div className="container">
                    <form id="newPageForm" onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">
                                <b>Name</b>
                            </label>
                            <input
                                className="form-control"
                                id="name"
                                name="name"
                                type="text"
                                onChange={this.onChange}
                                value={name}
                                placeholder="Name of the page..."
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">
                                <b>Title</b>
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                id="title"
                                name="title"
                                onChange={this.onChange}
                                value={title}
                                placeholder="Title of the page..."
                            />
                        </div>
                        <Link to={`/user/${uid}/website/${wid}/page`} className="btn btn-lg btn-warning">
                            Cancel
                        </Link>
                        <button
                            className="btn btn-lg btn-success float-right"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                <footer className="navbar navbar-light fixed-bottom bg-light">
                    <div className="full-width">
                        <Link
                            className="color-black float-right"
                            to={`/user/${uid}`}
                        >
                            <i className="fas fa-user" />
                        </Link>
                    </div>
                </footer>
            </div>
        );
    }
}