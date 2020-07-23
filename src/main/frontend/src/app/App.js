import React, { Component } from 'react';
import './App.css';
import Main from "./components/Main";
import RestService from "./components/services/RestService";
import AuthService from "./components/services/AuthService";

import User from "./components/context/User";
import UserContext from "./components/context/UserContext";
import Notification from "./components/context/Notification";
import NotificationContext from "./components/context/NotificationContext";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: new User(null, null, false),
      notification: new Notification(null, null, null)
    }

    this.loginUser = this.loginUser.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
    this.sendNotification = this.sendNotification.bind(this);
    this.removeNotification = this.removeNotification.bind(this);
  }

  loginUser(user) {
    this.setState({user:user});
  }

  logoutUser() {
    this.setState({user: new User(null, null, false)});
  }

  sendNotification(notification) {
    console.log("got notification");
    console.log(notification);
    this.setState({notification: notification})
  }
  removeNotification() {
    this.setState({notification: new Notification(null, null, null)})
  }

  render() {
      
      const user = this.state.user;
      const loginUser = this.loginUser;
      const logoutUser = this.logoutUser;

      const notification = this.state.notification;
      const sendNotification = this.sendNotification;
      const removeNotification = this.removeNotification;

    return (

          <React.Fragment >

            <UserContext.Provider value={{user, loginUser, logoutUser}} >

              <Main notification={notification} sendNotification={sendNotification} removeNotification={removeNotification}/>

            </UserContext.Provider >

          </React.Fragment >

    );
  }
}

export default App;
