import React, {Component} from 'react';
import {connect} from "react-redux";
import {
  Switch, 
  Route, 
  Redirect, 
  withRouter
} from 'react-router-dom';
import {getIsAuthorized} from "reducers/auth";
import Particles from 'react-particles-js';
import particlesParams from 'particles-params';
import PrivateRoute from 'components/PrivateRoute';
import Login from 'components/Login';
import LoftTrade from 'components/LoftTrade';
import './App.css';

export class App extends Component {
  render() {
    const {isAuthorized} = this.props;

    return (
      <div className="App">
        <Particles 
          params={particlesParams} 
          canvasClassName="App__background"
        />
        <Switch>
          <PrivateRoute path="/trade/:cur" component={LoftTrade} />
          <PrivateRoute path="/feeds" component={LoftTrade} />
          <PrivateRoute path="/stats" component={LoftTrade} />
          <PrivateRoute path="/profile" component={LoftTrade} />
          {isAuthorized && <Redirect to="/trade/btc" />}
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
