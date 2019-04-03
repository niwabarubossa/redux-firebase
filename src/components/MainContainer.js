import React, { Component } from 'react';
import classes from '../assets/MainContainer.css'
import TweetsContainer from './TweetsContainer'
import TweetsDisplaysContainer from './TweetsDisplaysContainer'
import ChartContainer from './charts/ChartContainer'

import {Grid} from "@material-ui/core"

class MainContainer extends Component {
    render(){
        return(
            <div className={classes.mainContainer}>
                <Grid container spacing={16} >
                    <Grid item xs={2}>
                        I am a xs = 3 positionI am a xs = 2 position
                        I am a xs = 2 position
                        I am a xs = 2 position
                    </Grid>
                    <Grid item xs={6}>
                        
                        <TweetsContainer />
                    </Grid>
                    <Grid item xs={4}>
                        <ChartContainer />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default MainContainer;