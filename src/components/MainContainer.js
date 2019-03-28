import React, { Component } from 'react';
import classes from '../assets/MainContainer.css'
import TweetsContainer from './TweetsContainer'
import TweetsDisplaysContainer from './TweetsDisplaysContainer'
import ChartContainer from './charts/ChartContainer'

class MainContainer extends Component {
    render(){
        return(
            <div className={classes.mainContainer}>
                <ChartContainer />
                <TweetsContainer />
            </div>
        )
    }
}

export default MainContainer;