import React, { Component } from 'react';
import MainContainer from './MainContainer'
import {Grid} from "@material-ui/core"
import classes from '../../assets/managementPage/ManagementPage.css'
import { Link } from 'react-router-dom'

class ManagementPage extends React.Component {    
    render() {
        return (
          <div>
            <Grid container>
              <Grid item xs={12}>
                <MainContainer />
              </Grid>
            </Grid>
          </div>
        )
    }
}

export default ManagementPage;