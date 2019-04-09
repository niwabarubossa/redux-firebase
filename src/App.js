import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TweetsContainer from './components/TweetsContainer'
import MuiHeader from './components/MuiHeader'
import DrawerHeader from './components/DrawerHeader'
import MainContainer from './components/MainContainer'
import ManagementPage from './components/managementPage/ManagementPage'
import GetPostList from './components/containers/GetPostListContainer'
import { withStyles } from '@material-ui/core/styles';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

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

class App extends Component {
  render() {
    const { classes, theme } = this.props;
    return (
      <div className="App">
        <div className={classes.root}>
          <main className={classes.content}>
            <BrowserRouter>
            {/* <MuiHeader /> */}
            <DrawerHeader />
              <Switch>
                <Route exact path="/" component={MainContainer} />
                <Route exact path="/management" component={ManagementPage} />
              </Switch>
            </BrowserRouter> 
          </main>
        </div>
      </div>
    );
  }
}

// export default App;
export default withStyles(styles, { withTheme: true })(App);
