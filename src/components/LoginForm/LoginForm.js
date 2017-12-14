import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {
  loginRequest, 
  registrationRequest
} from 'Actions/auth';
import {
  getIsAuthorized,
  getLoginError,
  getRegistrationError
} from "Reducers/auth";
import Textfield from 'Components/Textfield';
import Button from 'Components/Button';
import imgUserShape from 'Images/user-shape.svg'
import imgPadlockUnlock from 'Images/padlock-unlock.svg'
import './LoginForm.css';

class LoginForm extends PureComponent {
  state = {
    error: null,
    isLogin: true,
    email: '',
    password: ''
  }

  onClickSignIn = () => {
    const {loginRequest} = this.props;
    const {email, password} = this.state;
    
    loginRequest({
      email,
      password
    });
  }

  onClickRegistration = () => {
    const {registrationRequest} = this.props;
    const {email, password} = this.state;
    
    registrationRequest({
      email,
      password
    });
  }

  onClickToggler = () => {
    const {isLogin} = this.state;

    this.setState({
      isLogin: !isLogin
    });
  }

  handleChange = e => {
    const {name, value} = e.target;

    this.setState({
      [name]: value
    })
  }

  capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  renderErrorMsg = () => {
    const {loginError} = this.props;

    if (loginError) {
      return (
        <p className="LoginForm__error-msg">
          {this.capitalizeFirstLetter(loginError)}
        </p>
      );
    }
  }

  renderLoginErrorMsg = () => {
    const {registrationError} = this.props;

    if (registrationError && registrationError.email) {
      return (
        <p className="LoginForm__error-msg">
          {this.capitalizeFirstLetter(registrationError.email[0])}
        </p>
      );
    }
  }

  renderPasswordErrorMsg = () => {
    const {registrationError} = this.props;

    if (registrationError && registrationError.password) {
      return (
        <p className="LoginForm__error-msg">
          {this.capitalizeFirstLetter(registrationError.password[0])}
        </p>
      );
    }
  }

  renderSubmit = () => {
    const {isLogin} = this.state;
    
    if (isLogin) {
      return (
        <Button 
          type={'button'}
          block={true}
          onClick={this.onClickSignIn}
        >Войти</Button>
      );
    }
    else {
      return (
        <Button 
          type={'button'}
          block={true}
          onClick={this.onClickRegistration}
        >Зарегистрироваться</Button>
      );
    }
  }

  registerFormToggler = () => {
    const {isLogin} = this.state;
    
    if (isLogin) {
      return (
        <div className="LoginForm__toggler">
          Впервые на сайта?{' '}
          <button 
            type="button" 
            className="LoginForm__toggler-link"
            onClick={this.onClickToggler}
          >Регистрация</button>
        </div>
      );
    }
    else {
      return (
        <div className="LoginForm__toggler">
          Уже зарегистрированы?{' '}
          <button 
            type="button" 
            className="LoginForm__toggler-link"
            onClick={this.onClickToggler}
          >Войти</button>
        </div>
      );
    }
  }

  render() {
    const {email, password} = this.props;
    
    return (
      <div className="LoginForm">
        <div className="LoginForm__panel">
          <div className="LoginForm__field">
            <Textfield 
              type={'text'}
              icon={imgUserShape}
              placeholder={'Login'}
              name={'email'}
              value={email}
              onChange={this.handleChange}
            />
            {this.renderLoginErrorMsg()}
          </div>
          <div className="LoginForm__field">
            <Textfield 
              type={'password'}
              icon={imgPadlockUnlock}
              placeholder={'Password'}
              name={'password'}
              value={password}
              onChange={this.handleChange}
            />
            {this.renderPasswordErrorMsg()}
          </div>
          {this.renderErrorMsg()}
          <div className="LoginForm__submit">
            {this.renderSubmit()}
          </div>
        </div>
        {this.registerFormToggler()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state),
  loginError: getLoginError(state),
  registrationError: getRegistrationError(state)
});

const mapDispatchToProps = {
  loginRequest,
  registrationRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
