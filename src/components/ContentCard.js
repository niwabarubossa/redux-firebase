import React from 'react'
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import classes from '../assets/ContentCard.css';
import classnames from 'classnames';


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

const ContentCard = ({project}) => {
  return (
          <div className={classes.cardContainer} >
            <Card>
              <CardHeader
                avatar={
                  <Avatar aria-label="Recipe" className={classes.avatar}>
                  </Avatar>
                }
                action={
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                }
                title="User Name"
                subheader="September 14, 2016"
                className={classes.cardHeader}
              />

              <CardContent>
                {project.content}
              </CardContent>

              <CardActions className={classes.actions} disableActionSpacing>
                <IconButton aria-label="Add to favorites">
                  <FavoriteIcon />
                </IconButton>

                <IconButton aria-label="Autorenew">
                  <Autorenew />
                </IconButton>

                <IconButton aria-label="Comment">
                  <Comment />
                </IconButton>

              </CardActions>

            </Card>
          </div>
  )
}

export default ContentCard