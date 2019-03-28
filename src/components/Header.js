import React, { Component } from 'react';
import classes from '../assets/Header.css'

class Header extends Component {
    render(){
        return(
            <div className={classes.header}>
                <h3 className={classes.logo}>Opty</h3>
            </div>
        )
    }
}

export default Header;