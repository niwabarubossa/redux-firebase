import React, { Component } from 'react';
import TweetContainer from './TweetContainer'

import classes from '../assets/TweetContainer.css'

class TweetsContainer extends Component {
    render(){
        return(
            <div className={classes.tweetsContainer}>
                <TweetContainer />
            </div>
        )
    }
}

export default TweetsContainer;
