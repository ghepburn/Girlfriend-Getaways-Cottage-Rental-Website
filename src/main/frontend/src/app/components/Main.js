import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AuthenticatedRoute from "./authentication/routes/AuthenticatedRoute";
import AdminRoute from "./authentication/routes/AdminRoute";
import AnonymousRoute from "./authentication/routes/AnonymousRoute";

import Navbar from "./index/Navbar";
import Footer from "./index/Footer";
import Home from "./index/Home";
import About from './about/About';
import Registration from "./authentication/Registration";
import Login from "./authentication/Login";
import Logout from "./authentication/Logout";
import Account from "./account/Account";
import Admin from "./admin/Admin";
import NotificationBar from "./index/NotificationBar";
import Availability from "./availability/Availability";

import BookNow from "./bookNow/BookNow";

class Main extends Component {

  render() {
    return(

        <Router>

          <header>
            <Navbar />
            <Route component={NotificationBar} />
          </header>

          <body>
            <Switch>
                
              <Route path="/about" component={About} />

              <Route path="/availability" component={Availability} />

              <AuthenticatedRoute path="/booknow/:bookingId" component={BookNow} />

              <Route path="/register" component={Registration} />

              <AnonymousRoute component={Login} path="/login" />

              <AuthenticatedRoute component={Logout} path="/logout" />

              <AuthenticatedRoute component={Account} path="/account/:username" />

              <AdminRoute component={Admin} path="/admin" />   

              <Route path="/" component={Home} />

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