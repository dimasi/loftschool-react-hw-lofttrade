import React from 'react';
import imgLogo from './images/logo-white.svg';
import './Logo.css';

export const Logo = () => {
  return (
    <span
      className="Logo" 
      style={{backgroundImage: `url(${imgLogo})`}}
    ></span>
  );
}

export default Logo;
