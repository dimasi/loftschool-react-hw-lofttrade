import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from 'Components/Logo';
import HeaderExchange from 'Components/HeaderExchange';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header__logo">
          <Logo />
        </div>
        <NavLink
          to={'/trade'}
          className="Header__trade-link"
          activeClassName="Header__trade-link_active"
          exact
        >
          Торги
        </NavLink>
        <div className="Header__exchange">
          <HeaderExchange />
        </div>
        <div className="Header__feeds">
          <NavLink
            to={'/feeds'}
            className="Header__btn"
            activeClassName="Header__btn_active"
          >
            <span className="Header__btn-text">Лента</span>
            <span className="Header__btn-badge">9+</span>
          </NavLink>
        </div>
        <div className="Header__stats">
          <NavLink
            to={'/stats'}
            className="Header__btn"
            activeClassName="Header__btn_active"
          >
            <span className="Header__btn-text">5 место</span>
          </NavLink>
        </div>
        <div className="Header__profile">
          <NavLink
            to={'/profile'}
            className="Header__btn"
            activeClassName="Header__btn_active"
          >
            <span className="Header__btn-text Header__btn-text_small">user123@mail.ru</span>
            <span className="Header__btn-caret"></span>
          </NavLink>
        </div>
      </div>
    );
  }
}
