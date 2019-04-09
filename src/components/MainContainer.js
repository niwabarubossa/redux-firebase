import React, { Component } from 'react';
import classes from '../assets/MainContainer.css'
import SideBar from './SideBar'
import ContentsHeader from './ContentsHeader'
import TweetsContainer from './TweetsContainer'
import TweetsDisplaysContainer from './TweetsDisplaysContainer'
import ChartContainer from './charts/ChartContainer'
import {Grid} from "@material-ui/core"
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class MainContainer extends Component {

    state = {
        mobileOpen: false,
    };
    
    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    render(){

        const { classes, theme } = this.props;
    
        const drawer = (
          <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                <Link to={'/'} style={{textDecoration : 'none',color: 'white' }} >
                    <ListItem button key={'aaa'}>
                    <ListItemIcon> <InboxIcon /> </ListItemIcon>
                    <ListItemText primary={'トップページ'} />
                    </ListItem>
                </Link>
                <Link to={'/management'} style={{textDecoration : 'none',color: 'white' }} >
                    <ListItem button key={'aaa'}>
                    <ListItemIcon> <InboxIcon /> </ListItemIcon>
                    <ListItemText primary={'管理画面へ'} />
                    </ListItem>
                </Link>
            </List>
            <Divider />
            <List>
              {['目標１', '目標２', '目標３'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </div>
        );


        return(
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={this.handleDrawerToggle}
                    className={classes.menuButton}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" noWrap>
                        <Link to={'/'} style={{textDecoration : 'none',color: 'white' }}>Opty</Link>
                        <Link to={'/management'} style={{textDecoration : 'none',color: 'white',marginLeft: '10px' }}>管理画面へ</Link>
                    </Typography>
                </Toolbar>
                </AppBar>
                    <nav className={classes.drawer}>
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                        container={this.props.container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={this.state.mobileOpen}
                        onClose={this.handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        >
                        {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                        >
                        {drawer}
                        </Drawer>
                    </Hidden>
                    </nav>
                    <main className={classes.content}>
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
                    </main>
                </div>

        )
    }
}

MainContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

// export default MainContainer;
export default withStyles(styles, { withTheme: true })(MainContainer);