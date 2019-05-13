import React, {Component} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Users
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";
// Websites
import WebsiteList from "./components/website/WebsiteList";
import WebsiteNew from "./components/website/WebsiteNew";
import WebsiteEdit from "./components/website/WebsiteEdit";
// Pages
import PageList from "./components/page/PageList";
import PageNew from "./components/page/PageNew";
import PageEdit from "./components/page/PageEdit";
// Widgets
import WidgetList from "./components/widget/WidgetList";
import WidgetChooser from "./components/widget/WidgetChooser";
import WidgetEdit from "./components/widget/WidgetEdit";

class App extends Component {

    state = {
        users: [
            {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com"},
            {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com"},
            {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@ulem.com"},
            {_id: "456", username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org"}
        ],
        websites: [
            { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
            { _id: "234", name: "Tweeter",  developerId: "456", description: "Lorem" },
            { _id: "456", name: "Gizmodo",   developerId: "456", description: "Lorem" },
            { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
            { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
            { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
            { _id: "789", name: "Chess", developerId: "234", description: "Lorem" }
          ],
        pages: [
            { _id: "321", name: "Post 1", websiteId: "456", title: "Lorem" },
            { _id: "432", name: "Post 2", websiteId: "456", title: "Lorem" },
            { _id: "543", name: "Post 3", websiteId: "456", title: "Lorem" }
        ],
        widgets: [
            { _id: "123", widgetType: "HEADING", pageId: "321", size: 2, text: "GIZMODO"},
            { _id: "234", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
            { _id: "345", widgetType: "IMAGE", pageId: "321", width: "100%", url: "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"},
            { _id: "567", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
            { _id: "678", widgetType: "YOUTUBE", pageId: "321", width: "100%", url: "https://www.youtube.com/embed/qttOFtpUSyc" },
          ]
          
    }

        addUser = (user) => {
        const newUsers = this.state.users;
        newUsers.push(user);
        this.setState({
            users: newUsers
        });
    }

    userNameInUse = (username) => {
        for(let user of this.state.users) {
            if(username === user.username) {
                return true;
            }
        }

        return false;
    }

    updateUser = (newUser) => {
        const newUsers = this.state.users.map((user)=>{
            if(user._id === newUser._id) {
                if(user.username !== newUser.userName && 
                    this.userNameInUse(newUser.username)) {
                    alert("This username is taken");
                } else {
                    user = newUser;
                    alert("user information is updated");
                }
            }
            return user;
        });

        this.setState({
            users: newUsers
        })

        
    }

    addWeb = (newWeb) => {
        const newWebs = this.state.websites;
        newWebs.push(newWeb);
        this.setState({
            websites: newWebs
        });
    }

    deleteWeb =(wid) => {
        this.setState({
            websites: this.state.websites.filter(
                (website) => website._id !== wid
            )
        })
    }

    editWeb = (wid, name, description) => {
        this.setState({
            websites: this.state.websites.map(
                (website) => {
                    if(wid === website._id){
                        website.name = name;
                        website.description =description
                    }
                    return website;
                }
            )
        })
    }

    addPage = newPage => {
        const newPages = this.state.pages;
        newPages.push(newPage);
        this.setState({
            pages: newPages
        });
    }

    editPage = newPage => {
        const newPages = this.state.pages.map(
            (page) => {
                if(page._id === newPage._id) {
                    page = newPage
                }
                return page;
            }
        )
        this.setState({
            pages: newPages
        })
    }

    deletePage = pid => {
        const newPages = this.state.pages.filter(
            (page) => (
                page._id !== pid
            )
        )
        this.setState({
            pages: newPages
        })
    }

    editWidget = newWidget => {
        
        const newWidgets = this.state.widgets.map(
            (widget) => {
                if(widget._id === newWidget._id) {
                    widget = newWidget
                }
                return widget;
            }
        )
        this.setState({
            widgets: newWidgets
        })
    }

    addWidget = newWidget => {
        const newWidgets = this.state.widgets;
        newWidgets.push(newWidget);
        this.setState({
            widgets: newWidgets
        });
    }

    deleteWidget = (wgid) => {
        const newWidgets = this.state.widgets.filter(
            (widget) => (
                widget._id !== wgid
            )
        )
        this.setState({
            widgets: newWidgets
        })
    }

    render() {
        
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render = { props => (<Login {...props} users={this.state.users}/>)} />
                    <Route exact path="/login" render= { props => (<Login {...props} users={this.state.users} />)} />
                    <Route exact path="/register" render= { props => (<Register {...props} users={this.state.users} addUser={this.addUser}/>)}/>
                    <Route exact path="/user/:uid" render= { props => (<Profile {...props} users={this.state.users} updateUser={this.updateUser}/>)}/>
                    <Route exact path="/user/:uid/website" render= { props => (<WebsiteList {...props} websites={this.state.websites}/>)} />
                    <Route exact path="/user/:uid/website/new" render={ props => (<WebsiteNew {...props} websites={this.state.websites} addWeb={this.addWeb}/>)} />
                    <Route exact path="/user/:uid/website/:wid" render={ props => (<WebsiteEdit {...props} websites={this.state.websites} deleteWeb={this.deleteWeb} editWeb={this.editWeb}/>)} />
                    <Route exact path="/user/:uid/website/:wid/page" render={ props => (<PageList {...props} pages={this.state.pages} />)} />
                    <Route exact path="/user/:uid/website/:wid/page/new" render={ props => (<PageNew {...props} pages={this.state.pages} addPage={this.addPage} />)} />
                    <Route exact path="/user/:uid/website/:wid/page/:pid" render={ props => (<PageEdit {...props} pages={this.state.pages} editPage={this.editPage} deletePage={this.deletePage} />)} />
                    <Route exact path="/user/:uid/website/:wid/page/:pid/widget" render={ props=>(<WidgetList {...props} widgets={this.state.widgets} />)} />
                    <Route exact path="/user/:uid/website/:wid/page/:pid/widget/new" render={props=>(<WidgetChooser {...props} addWidget={this.addWidget} />)} />
                    <Route exact path="/user/:uid/website/:wid/page/:pid/widget/:wgid" render={ props=>(<WidgetEdit {...props} widgets={this.state.widgets} editWidget={this.editWidget} deleteWidget={this.deleteWidget} />)} />
                </Switch>
            </Router>
        );
    }
}

export default App;