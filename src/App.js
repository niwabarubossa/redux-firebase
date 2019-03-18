import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'
import { firebaseLogin } from './actions'

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

const mapStateToProps = state => ({tweets: state.firebase.tweets})
const mapDispatchToProps = ({ firebaseLogin })

export default connect(mapStateToProps,mapDispatchToProps)(App)
