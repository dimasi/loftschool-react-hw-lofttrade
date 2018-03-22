import React, {PureComponent} from 'react';
import Logo from 'components/Logo';
import Author from 'components/Author';
import FooterMenu from 'components/FooterMenu';
import './Footer.css';

export class Footer extends PureComponent {
  render() {
    return (
      <div className="Footer">
        <div className="Footer__site-desc">
          <p>
            Сделано с любовью и старанием на курсе «React.js» в{' '}
            <a href="https://loftschool.com/">Loftschool</a>.
          </p>
          <Author />
        </div>
        <nav className="Footer__menu">
          <FooterMenu />
        </nav>
        <div className="Footer__logo">
          <Logo />
        </div>
      </div>
    );
  }
}

export default Footer;
