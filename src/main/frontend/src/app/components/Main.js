import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AuthenticatedRoute from "./authentication/routes/AuthenticatedRoute";
import AdminRoute from "./authentication/routes/AdminRoute";
import AnonymousRoute from "./authentication/routes/AnonymousRoute";
import ConfigService from "./services/ConfigService";
import UserService from "./services/UserService";

import Navbar from "./index/Navbar";
import Footer from "./index/Footer";
import Home from "./index/Home";
import About from './about/About';
import Registration from "./authentication/Register";
import Login from "./authentication/Login";
import Logout from "./authentication/Logout";
import Account from "./services/Account.js";
import Admin from "./admin/Admin.js";
import Availabillity from "./services/Availabillity.js";


class Main extends Component {

  componentDidMount() {
    // ConfigService.initialConfig();
  }

  render() {
    return(
        
          <Router>
                
            <header>
              <Navbar />
            </header>

            <Switch>
                
              <Route path="/about">
                <About />
              </Route>

              <Route path="/availabillity">
                <Availabillity />
              </Route>

              <Route path="/register">
                <Registration />
              </Route>

              <AnonymousRoute component={Login} path="/login" >
                <Login />
              </AnonymousRoute>

              <AuthenticatedRoute component={Logout} path="/logout" >
                <Logout />
              </AuthenticatedRoute>

              <AuthenticatedRoute component={Account} path="/account">
                <Account />
              </AuthenticatedRoute>

              <AdminRoute component={Admin} path="/admin">
                <Admin />
              </AdminRoute>   

              <Route path="/">
                <Home />
              </Route>

            </Switch>

            <footer>
              <Footer />
            </footer>                

          </Router> 


    );
  }
}

export default Main;