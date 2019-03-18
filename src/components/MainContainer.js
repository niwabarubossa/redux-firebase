import React, { Component } from 'react';

import { connect } from 'react-redux'
import { firebaseLogin } from '../actions'

import '../assets/MainContainer.css'
import TweetsContainer from './TweetsContainer'

class MainContainer extends Component {
    render(){
        return(
            <div className="mainContainer">
                <TweetsContainer />
            </div>
        )
    }
}

const mapStateToProps = state => ({tweets: state.firebase.tweets})
const mapDispatchToProps = ({ firebaseLogin })

export default connect(mapStateToProps,mapDispatchToProps)(MainContainer)