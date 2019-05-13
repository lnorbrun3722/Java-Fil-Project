import React, { Component } from "react";
import { Link } from "react-router-dom"
export default class WidgetImage extends Component {

    onChange= e => {
        this.props.onChange(e);
    }

    onSubmit= e => {
        this.props.onSubmit(e)
    }

    onDelete = () => {
        this.props.onDelete();
    }

    render() {
        const {uid, wid, pid, name, width, url} = this.props
        return (
            <div>
                 <nav className="navbar navbar-light fixed-top bg-light">
                    <Link className="color-black" to={`/user/${uid}/website/${wid}/page/${pid}/widget`}>
                        <i className="fas fa-chevron-left" />
                    </Link>
                    <span className="navbar-brand">
                        Edit Widget
                    </span>
                    <button className="color-black btn" form="imgForm">
                        <i className="fas fa-check" />
                    </button>
                </nav>
                <div className="container">
                    <form id="imgForm" onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">
                                <b>Name</b>
                            </label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                onChange={this.onChange}
                                value={name}
                                className="form-control" 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="url">
                                <b>Url</b>
                            </label>
                            <input 
                                type="text" 
                                id="url" 
                                className="form-control" 
                                name="url"
                                onChange={this.onChange}
                                value={url}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="width">
                                <b>Width</b>
                            </label>
                            <input
                                type="text"
                                id="width"
                                className="form-control"
                                name="width"
                                value={width}
                                onChange={this.onChange}
                            />
                        </div>
                        <button
                            type="button"
                            onClick={this.onDelete}
                            className="btn btn-danger btn-block"
                        >
                            Delete
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