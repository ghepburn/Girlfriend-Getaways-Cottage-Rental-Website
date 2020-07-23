import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AuthenticatedRoute from "./authentication/routes/AuthenticatedRoute";
import AdminRoute from "./authentication/routes/AdminRoute";
import AnonymousRoute from "./authentication/routes/AnonymousRoute";
import ConfigService from "./services/ConfigService";
import AuthService from "./services/AuthService";

import Navbar from "./index/Navbar";
import Footer from "./index/Footer";
import Home from "./index/Home";
import About from './about/About';
import Registration from "./authentication/registration/Register";
import Login from "./authentication/login/Login";
import Logout from "./authentication/Logout";
import Account from "./account/Account";
import Admin from "./admin/Admin";
import Availabillity from "./availabillity/Availabillity";
import NotificationBar from "./notifications/NotificationBar";

import UserContext from "./context/UserContext";
import NotificationContext from "./context/NotificationContext";

class Main extends Component {

  render() {
    return(

        <Router>

          <header>
            <Navbar />
            <NotificationBar notification={this.props.notification} removeNotification={this.props.removeNotification}/>
          </header>

          <body>
            <Switch>
                
              <Route path="/about">
                <About />
              </Route>

              <Route path="/availabillity">
                <Availabillity />
              </Route>  

              <Route path="/register">
                <Registration sendNotification={this.props.sendNotification}/>
              </Route>

              <AnonymousRoute component={Login} path="/login" >
                <Login sendNotification={this.props.sendNotification}/>
              </AnonymousRoute>

              <AuthenticatedRoute component={Logout} path="/logout" >
                <Logout sendNotification={this.props.sendNotification}/>
              </AuthenticatedRoute>

              <AuthenticatedRoute component={Account} path="/account">
                <Account />
              </AuthenticatedRoute>

              <AdminRoute component={Admin} path="/admin">
                <Admin />
              </AdminRoute>   

              <Route path="/">
                <Home notification={this.props.notification} removeNotification={this.props.removeNotification} sendNotification={this.props.sendNotification}/>
              </Route>

            </Switch>
          </body>

          <footer >
            <Footer />
          </footer>

        </Router>

    );
  }
}

export default Main;