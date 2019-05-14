import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PageList extends Component {

    state = {
        uid: "",
        wid: "",
        pages: []
    }

    async componentDidMount() {

        await this.setState({
            uid: this.props.match.params.uid,
            wid: this.props.match.params.wid
        })

        this.filterPage(this.state.wid);
    }

    filterPage = (wid) => {
        const currentPages = this.props.pages.filter(
            (page) => (
                page.websiteId === wid
            )
        )
        this.setState({
            pages: currentPages
        })
    }

    render() {
        const {uid, wid} = this.state;
        return (
            <div>
                <nav className="navbar navbar-light fixed-top bg-light">
                    <Link className="color-black" to={`/user/${uid}/website`}>
                        <i className="fas fa-chevron-left" />
                    </Link>
                    <span className="navbar-brand">
                        Pages
                    </span>
                    <Link className="color-black" to={`/user/${uid}/website/${wid}/page/new`}>
                        <i className="fas fa-plus" />
                    </Link>
                </nav>

                <div className="container">
                    <ul className="list-group">
                        {
                            this.state.pages.map(
                                (page) => (
                                    <li key={page._id} className="list-group-item">
                                        <Link to={`/user/${uid}/website/${wid}/page/${page._id}/widget`}>{page.name}</Link>
                                        <Link className="float-right" to={`/user/${uid}/website/${wid}/page/${page._id}`}>
                                            <i className="fas fa-cog" />
                                        </Link>
                                    </li>
                                )
                            )
                        }
                        {/* <li className="list-group-item">
                            <a href="../Widget/Widget-list.html">Blog Post</a>
                            <a className="float-right" href="Page-edit.html">
                                <i className="fas fa-cog" />
                            </a>
                        </li> */}
                    </ul>
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