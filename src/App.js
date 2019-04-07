import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TweetsContainer from './components/TweetsContainer'
import MuiHeader from './components/MuiHeader'
import MainContainer from './components/MainContainer'
import ManagementPage from './components/managementPage/ManagementPage'
import GetPostList from './components/containers/GetPostListContainer'

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
            <MuiHeader />
            <Switch>
              <Route exact path="/" component={MainContainer} />
              <Route exact path="/management" component={ManagementPage} />
            </Switch>
          </BrowserRouter> 
      </div>
    );
  }
}

export default App;
