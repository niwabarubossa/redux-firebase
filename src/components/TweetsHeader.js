import React, { Component } from 'react';
import classes from '../assets/TweetsHeader.css'

class TweetsHeader extends Component {
    render(){
        return(
            <div className={classes.tweetsHeaderContainer}>
                Your Time Line
            </div>
        )
    }
}

export default TweetsHeader;