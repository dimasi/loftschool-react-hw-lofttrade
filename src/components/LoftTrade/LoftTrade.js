import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import Trade from 'Components/Trade';
import Feeds from 'Components/Feeds';
import Stats from 'Components/Stats';
import Profile from 'Components/Profile';
import './LoftTrade.css';

export default class App extends Component {
  render() {
    return (
      <div className="LoftTrade">
        <header className="LoftTrade__header">
          <Header />
        </header>
        <main className="LoftTrade__mainbody">
          <Switch>
            <Route path="/trade" component={Trade} />
            <Route path="/feeds" component={Feeds} />
            <Route path="/stats" component={Stats} />
            <Route path="/profile" component={Profile} />
            <Redirect from="*" to="/trade" />
          </Switch>
        </main>
        <footer className="LoftTrade__footer">
          <Footer />
        </footer>
      </div>
    );
  }
}
