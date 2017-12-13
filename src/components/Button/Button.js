import React from 'react';
import cx from 'classnames';
import './Button.css';

const Button = (props) => {
  const {
    type,
    children, 
    color='primary',
    block,
    onClick=()=>{}
  } = props;
  
  let classes = [
    'Button',
    `Button_color_${color}`
  ];

  if (block) {
    classes = [...classes, 'Button_block'];
  }

  classes = cx(...classes);

  return (
    <button 
      type={type}
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
