import React, {Component} from 'react';
import {connect} from "react-redux";
import {
  Switch, 
  Route, 
  Redirect, 
  withRouter
} from 'react-router-dom';
import {getIsAuthorized} from "Reducers/auth";
import Particles from 'react-particles-js';
import particlesParams from 'Src/particles-params';
import PrivateRoute from 'Components/PrivateRoute';
import Login from 'Components/Login';
import LoftTrade from 'Components/LoftTrade';
import './App.css';

class App extends Component {
  render() {
    const {isAuthorized} = this.props;

    return (
      <div className="App">
        <Particles 
          params={particlesParams} 
          canvasClassName="App__background"
        />
        <Switch>
          <PrivateRoute path="/trade" component={LoftTrade} />
          <PrivateRoute path="/feeds" component={LoftTrade} />
          <PrivateRoute path="/stats" component={LoftTrade} />
          <PrivateRoute path="/profile" component={LoftTrade} />
          {isAuthorized && <Redirect to="/trade" />}
          <Route path="*" exact component={Login} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state)
});

export default withRouter(connect(mapStateToProps)(App));
