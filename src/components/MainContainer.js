import React, { Component } from 'react';
import classes from '../assets/MainContainer.css'
import TweetsContainer from './TweetsContainer'
import TweetsDisplaysContainer from './TweetsDisplaysContainer'

class MainContainer extends Component {
    render(){
        return(
            <div className={classes.mainContainer}>
                <TweetsContainer />
                <TweetsDisplaysContainer />
            </div>
        )
    }
}

export default MainContainer;