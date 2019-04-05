import React, { Component } from 'react';
import classes from '../assets/TweetsHeader.css'


class ContentsHeader extends Component {
    render(){
        return(
            <div className={classes.tweetsHeaderContainer}>
                {this.props.content}
            </div>
        )
    }
}

export default ContentsHeader;