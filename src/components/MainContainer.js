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
                </Grid>

                    <Grid item xs={6}>
                        <ChartContainer />
                    </Grid>
                    <Grid item xs={6}>
                        <TweetsContainer />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default MainContainer;