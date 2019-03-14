import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TweetsContainer from './components/TweetsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TweetsContainer />
      </div>
    );
  }
}

export default App;
