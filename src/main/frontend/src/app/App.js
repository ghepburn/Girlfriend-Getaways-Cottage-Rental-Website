import React, { Component } from 'react';
import './App.scss';
import Main from "./components/Main";
import RestManager from "./components/managers/RestManager";
import GlobalState from "./components/globalState/GlobalState";

class App extends Component {

  componentDidMount() {
    RestManager.setupAxiosInitialInterceptors();
  }

  render() {
    return (
        <div className="app">

          <GlobalState>
              <Main />
          </GlobalState>
        
        </div>
    );
  }
}

export default App;
