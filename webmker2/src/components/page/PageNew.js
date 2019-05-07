import React, { Component } from "react";

export default class PageNew extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-light fixed-top bg-light">
                    <a class="color-black" href="Page-list.html">
                        <i class="fas fa-chevron-left" />
                    </a>
                    <a class="navbar-brand" href="Page-new.html">
                        New Page
                    </a>
                    <a class="color-black" href="Page-list.html">
                        <i class="fas fa-check" />
                    </a>
                </nav>

                <div class="container">
                    <form>
                        <div class="form-group">
                            <label for="name">
                                <b>Name</b>
                            </label>
                            <input
                                class="form-control"
                                id="name"
                                type="text"
                                placeholder="Name of the page..."
                            />
                        </div>
                        <div class="form-group">
                            <label for="title">
                                <b>Title</b>
                            </label>
                            <input
                                class="form-control"
                                type="text"
                                id="title"
                                placeholder="Title of the page..."
                            />
                        </div>
                        <a href="Page-list.html" class="btn btn-lg btn-warning">
                            Cancel
                        </a>
                        <a
                            href="Page-list.html"
                            class="btn btn-lg btn-success float-right"
                        >
                            Submit
                        </a>
                    </form>
                </div>

                <footer class="navbar navbar-light fixed-bottom bg-light">
                    <div class="full-width">
                        <a
                            class="color-black float-right"
                            href="../User/Profile.html"
                        >
                            <i class="fas fa-user" />
                        </a>
                    </div>
                </footer>
            </div>
        );
    }
}