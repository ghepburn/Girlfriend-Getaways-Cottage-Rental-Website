import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AuthenticatedRoute from "./security/routes/AuthenticatedRoute";
import AdminRoute from "./security/routes/AdminRoute";
import AnonymousRoute from "./security/routes/AnonymousRoute";

import Header from "./index/Header"
import Footer from "./index/navigation/Footer";

import Home from "./content/home/Home";
import About from './content/about/About';
import Registration from "./security/Registration";
import Login from "./security/Login";
import Logout from "./security/Logout";
import Account from "./services/accountService/Account";
import Admin from "./services/adminService/Admin";
import AdminBookingView from "./entities/bookings/bookingDisplays/UserAdminFullBookingView";
import AdminCraftView from "./entities/crafts/craftDisplays/UserAdminFullCraftView";
import Availability from "./services/availabilityService/Availability";
import BookNow from "./services/bookingService/GetawayDashboard";

import RouteEventListener from "./events/listeners/RouteEventListener";


class Main extends Component {

  render() {
    return(

        <Router>

          <RouteEventListener />

          <div className="header">
            <Header />
          </div>

          <div className="content">
            <Switch>

              <AnonymousRoute component={Login} path="/login" />
              <AnonymousRoute path="/registration" component={Registration} />
              
              <AuthenticatedRoute component={Logout} path="/logout" />
              <AuthenticatedRoute path="/booknow/:bookingId" component={BookNow} />
              <AuthenticatedRoute component={Account} path="/account/:username" />
              
              <AdminRoute component={AdminBookingView} path="/admin/booking/:bookingId" admin="true"/>
              <AdminRoute component={AdminCraftView} path="/admin/craft/:craftId" admin="true"/>   
              <AdminRoute component={Admin} path="/admin" />   

              <Route path="/availability" component={Availability} /> 
              <Route path="/about" component={About} />
              <Route path="/" component={Home} />
            </Switch>
          </div>

          <div className="footer">
            <Footer />
          </div>

        </Router>

    );
  }
}

export default Main;