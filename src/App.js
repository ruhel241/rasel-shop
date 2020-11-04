import React, { Component } from "react";
import Shop from "./component/Shop";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Min from './component/Min'

import {
  BrowserRouter as Router,
  /*Link,*/ NavLink,
  Switch
} from "react-router-dom";
import Route from "react-router-dom/Route";

class App extends Component {
  render() {
    return (
      <div> 
          <Router>
            <AppBar position="fixed">
                <Toolbar variant="dense">
                <IconButton edge="start" className="" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit">
                    Rasel Brother's
                </Typography>
                
                <NavLink
                  to="/"
                  exact
                  className="nav-link">
                  Cigarettes <span className="sr-only"></span>
                </NavLink>

                <NavLink
                    to="/min"
                    exact
                    className="nav-link" >
                    Min
                  </NavLink>
              </Toolbar>
            </AppBar>

            <Switch>
              <Route
                path="/"
                exact
                strict
                render={() => {
                  return  <Shop/>;
                }}
              />
              <Route
                path="/min"
                render={() => {
                  return <Min/>;
                }}
              />
            </Switch>
          </Router>
          
      </div>
    );
  }
}

export default App