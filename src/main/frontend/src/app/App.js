import React, { Component } from 'react';
import './App.css';
import Main from "./components/Main";
import RestManager from "./components/managers/RestManager";
import GlobalState from "./components/globalState/GlobalState";

class App extends Component {
  constructor(props) {
    super(props);
    RestManager.setupAxiosInitialInterceptors();
    
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
