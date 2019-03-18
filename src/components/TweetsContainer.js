import React, { Component } from 'react';
import TweetContainer from './TweetContainer'

import { connect } from 'react-redux'
import { firebaseLogin } from '../actions'

import '../assets/TweetContainer.css'

class TweetsContainer extends Component {
    render(){
        return(
            <div className="tweetsContainer">
                <TweetContainer />
                <TweetContainer />
                <TweetContainer />
                <TweetContainer />
            </div>
        )
    }
}

const mapStateToProps = state => ({tweets: state.firebase.tweets})
const mapDispatchToProps = ({ firebaseLogin })

export default connect(mapStateToProps,mapDispatchToProps)(TweetsContainer)
