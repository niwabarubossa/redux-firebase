import React, { Component } from 'react';
import classes from '../assets/SideBar.css'

import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Comment from '@material-ui/icons/Comment';
import Autorenew from '@material-ui/icons/Autorenew';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardActions from '@material-ui/core/CardActions';

class SideBarContent extends Component {
    render(){
        return(
            <div className={classes.SideBarContentContainer}>
                <div className={classes.commentIcon}>  
                    Comment
                </div>
            </div>
        )
    }
}

export default SideBarContent;