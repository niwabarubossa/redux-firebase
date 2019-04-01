import React, { Component } from 'react';
import classes from '../assets/Header.css'
import { Link } from 'react-router-dom'

class Header extends Component {
    render(){
        return(
            <div className={classes.header}>
                <h3 className={classes.HeaderMenu}>
                    <Link to={'/'}>Opty</Link>
                    <Link to={'/management'}>management</Link>
                </h3>
            </div>
        )
    }
}

export default Header;