import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import './FooterMenu.css';

export class FooterMenu extends PureComponent {
  render() {
    return (
      <ul className="FooterMenu">
        <li className="FooterMenu__item">
          <Link
            to={'/stats'}
            className="FooterMenu__link"
          >Главная</Link>
        </li>
        <li className="FooterMenu__item">
          <Link
            to={'/feeds'}
            className="FooterMenu__link"
          >Лента</Link>
        </li>
        <li className="FooterMenu__item">
          <Link
            to={'/trade'}
            className="FooterMenu__link"
          >Торги</Link>
        </li>
        <li className="FooterMenu__item">
          <Link
            to={'/profile'}
            className="FooterMenu__link"
          >Профиль</Link>
        </li>
      </ul>
    );
  }
}

export default FooterMenu;
