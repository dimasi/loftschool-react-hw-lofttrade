import React, { PureComponent } from 'react';
import './MoreToggler.css';

class MoreToggler extends PureComponent {
  render() {
    return (
      <button type="button" className="MoreToggler MoreToggler_active">
        <span className="MoreToggler__pins"></span>
      </button>
    );
  }
}

export default MoreToggler;
