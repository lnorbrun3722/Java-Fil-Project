import React, { Component } from "react";

export default class WidgetYoutube extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">
                                <b>Name</b>
                            </label>
                            <input
                                type="text"
                                id="name"
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
                            />
                        </div>
                        <Link
                            to="/user/:uid/website/:wid/page/:pid/widget"
                            className="btn btn-danger btn-block"
                        >
                            Delete
                        </Link>
                    </form>
                </div>
            </div>
        );
    }
}