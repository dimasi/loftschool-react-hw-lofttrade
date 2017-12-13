import React, { PureComponent } from 'react';
import LoginForm from 'Components/LoginForm';
import imgLogo from './images/Logo.svg';
import './Login.css';

export default class Login extends PureComponent {
  render() {
    return (
      <div className="Login">
        <img
          className="Login__logo" 
          alt=""
          src={imgLogo}
        />
        <LoginForm />
      </div>
    );
  }
}
