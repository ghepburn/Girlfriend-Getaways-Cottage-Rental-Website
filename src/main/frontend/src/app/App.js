import React, { Component } from 'react';
import './App.css';
import Main from "./components/Main";
import RestService from "./components/services/RestService";
import GlobalState from "./components/globalState/GlobalState";

class App extends Component {
  constructor(props) {
    super(props);
    RestService.setupAxiosInitialInterceptors();
    
  }

  render() {
    return (
        <GlobalState>
            <Main />
        </GlobalState>
    );
  }
}

export default App;
