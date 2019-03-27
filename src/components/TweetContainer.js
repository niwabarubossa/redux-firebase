import React, { Component } from 'react';
import classes from '../assets/TweetContainer.css'
import ContentsContainer from './ContentsContainer'
import ImageContainer from './ImageContainer'
import ButtonContainer from './ButtonContainer'

class TweetContainer extends Component {
    render(){
        return(
            <React.Fragment>
                <div className={classes.tweetContainer}>
                    <div className={classes.clearfix}>
                        <ImageContainer />
                        <ContentsContainer />
                    </div>
                    <ButtonContainer />
                </div>
            </React.Fragment>
        )
    }
}

export default TweetContainer;
