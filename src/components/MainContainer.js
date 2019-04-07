import React, { Component } from 'react';
import classes from '../assets/MainContainer.css'
import SideBar from './SideBar'
import ContentsHeader from './ContentsHeader'
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
                        <SideBar />
                    </Grid>
                    <Grid item xs={6}>
                        <ContentsHeader content={'Your TimeLine'} />
                        <TweetsContainer />
                    </Grid>
                    <Grid item xs={4}>
                            <div className={classes.sample2}></div>
                            <ContentsHeader content={'記録'} />
                            <ChartContainer />
                            <div className={classes.sample1}></div>
                        <ContentsHeader content={'仮置き2'} />
                            <div className={classes.sample1}></div>
                        <ContentsHeader content={'仮置き3'} />
                            <div className={classes.sample1}></div>
                        
                    </Grid>
                </Grid>
             </div>
        )
    }
}

export default MainContainer;