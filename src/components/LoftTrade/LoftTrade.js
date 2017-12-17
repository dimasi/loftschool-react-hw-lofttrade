import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Trade from 'components/Trade';
import Feeds from 'components/Feeds';
import Stats from 'components/Stats';
import Profile from 'components/Profile';
import './LoftTrade.css';

export class App extends Component {
  render() {
    return (
      <div className="LoftTrade">
        <header className="LoftTrade__header">
          <Header />
        </header>
        <main className="LoftTrade__mainbody">
          <Switch>
            <Route path="/trade/:cur" component={Trade} />
            <Route path="/feeds" component={Feeds} />
            <Route path="/stats" component={Stats} />
            <Route path="/profile" component={Profile} />
            <Redirect from="*" to="/trade/btc" />
          </Switch>
        </main>
        <footer className="LoftTrade__footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
