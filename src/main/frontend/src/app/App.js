import React, { Component } from 'react';
import './App.css';

import Main from "./components/Main";
import RestService from "./components/services/RestService";
import UserService from "./components/services/UserService";

import User from "./components/context/User";
import UserContext from "./components/context/UserContext";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: new User()
    }

    this.loginUser = this.loginUser.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
  }

  loginUser(user) {
    this.setState({user:user});
  }

  logoutUser() {
    this.setState({user: new User()});
  }

  render() {
      
      const user = this.state.user;
      const loginUser = this.loginUser;
      const logoutUser = this.logoutUser;

    return (
            <UserContext.Provider value={{user, loginUser, logoutUser}}>
              <Main />
            </UserContext.Provider>
    );
  }
}

export default App
