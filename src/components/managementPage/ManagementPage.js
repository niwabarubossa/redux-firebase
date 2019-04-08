import React, { Component } from 'react';
import MainContainer from './MainContainer'
import {Grid} from "@material-ui/core"
import classes from '../../assets/managementPage/ManagementPage.css'
class ManagementPage extends Component {
    render(){
        return(
            <div>
                <Grid container>
                    <Grid item xs={false} sm={2}>
                        <div className={classes.sideBar}>
                        i am sidebar
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        <MainContainer />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default ManagementPage;
