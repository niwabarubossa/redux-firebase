import React, { Component } from 'react';
import '../assets/TweetContainer.css'
import ContentsContainer from './ContentsContainer'
import ImageContainer from './ImageContainer'
import ButtonContainer from './ButtonContainer'

import { connect } from 'react-redux'
import { firebaseLogin } from '../actions'

class TweetContainer extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="tweetContainer">
                    <div className="clearfix">
                        <ImageContainer />
                        <ContentsContainer />
                    </div>
                    <ButtonContainer />
                
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({tweets: state.firebase.tweets})
const mapDispatchToProps = ({ firebaseLogin })

export default connect(mapStateToProps,mapDispatchToProps)(TweetContainer)
