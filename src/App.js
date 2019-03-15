import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TweetsContainer from './components/TweetsContainer'
import Header from './components/Header'
import MainContainer from './components/MainContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainContainer />
      </div>
    );
  }
}

export default App;
