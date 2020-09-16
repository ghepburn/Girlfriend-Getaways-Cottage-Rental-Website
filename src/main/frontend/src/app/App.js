import React, { Component } from 'react';
import './App.scss';

import Main from "./components/Main";
import AppSetup from "./components/services/setupService/AppSetup";

import RestManager from "./components/managers/RestManager";
import GlobalState from "./components/globalState/GlobalState";

class App extends Component {

  render() {
    return (
        <div className="app">

          <GlobalState>
            <Main />
            <AppSetup />
          </GlobalState>
        
        </div>
    );
  }
}

export default App;
