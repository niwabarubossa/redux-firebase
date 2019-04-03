import React, { Component } from 'react';
import classes from '../assets/SideBar.css'
import SideBarContent from './SideBarContent'

class SideBar extends Component {
    render(){
        return(
            <div className={classes.SideBarContainer}>
                <SideBarContent />
                <SideBarContent />
                <SideBarContent />
            </div>
        )
    }
}

export default SideBar;