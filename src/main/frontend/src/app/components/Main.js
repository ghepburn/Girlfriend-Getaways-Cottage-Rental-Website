import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AuthenticatedRoute from "./security/routes/AuthenticatedRoute";
import AdminRoute from "./security/routes/AdminRoute";
import AnonymousRoute from "./security/routes/AnonymousRoute";

import Navbar from "./index/Navbar";
import Footer from "./index/Footer";
import Home from "./index/Home";
import About from './index/about/About';
import NotificationBar from "./index/NotificationBar";
import Registration from "./security/Registration";
import Login from "./security/Login";
import Logout from "./security/Logout";
import Account from "./services/accountService/Account";
import Admin from "./services/adminService/Admin";
import AdminBookingView from "./entities/bookings/bookingDisplays/UserAdminFullBookingView";
import AdminCraftView from "./entities/crafts/craftDisplays/UserAdminFullCraftView";
import Availability from "./services/availabilityService/Availability";
import BookNow from "./services/bookingService/GetawayDashboard";


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

              <Route path="/availability" component={Availability} />

              <AuthenticatedRoute path="/booknow/:bookingId" component={BookNow} />

              <AuthenticatedRoute component={Account} path="/account/:username" />

              <AdminRoute component={AdminBookingView} path="/admin/booking/:bookingId" admin="true"/>

              <AdminRoute component={AdminCraftView} path="/admin/craft/:craftId" admin="true"/>   

              <AdminRoute component={Admin} path="/admin" />   

              <Route path="/register" component={Registration} />

              <AnonymousRoute component={Login} path="/login" />

              <AuthenticatedRoute component={Logout} path="/logout" />

               <Route path="/about" component={About} />

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