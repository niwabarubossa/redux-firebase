import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TweetsContainer from './components/TweetsContainer'
import Header from './components/Header'
import MainContainer from './components/MainContainer'

import GetPostList from './components/containers/GetPostListContainer'


class App extends Component {
  render() {


    return (
      <div className="App">
        {/* <Header />
        <MainContainer /> */}
        <GetPostList />

      </div>
    );
  }
}

export default App;
