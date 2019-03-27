import React, { Component } from 'react';
import '../assets/TweetsDisplaysContainer.css'

import { connect } from 'react-redux'
import { getTweets } from '../actions'

import firebase from 'firebase';
// import { firestore } from '../plugins/firebase'
import 'firebase/firestore';
import { runInThisContext } from 'vm';

class TweetsDisplaysContainer extends Component {
    constructor(props){
        super(props)
        this.state = { sampletweets: null
        }
    }
    render(){
        return(
            <div className="TweetsDisplaysContainer">
            </div>
        )
    }
}

const mapStateToProps = state => ({ hahaha: state.firebase.reducer_tweets })
const mapDispatchToProps = ({ getTweets })
export default connect(mapStateToProps, mapDispatchToProps)(TweetsDisplaysContainer)