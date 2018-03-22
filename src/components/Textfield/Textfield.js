import React, {PureComponent} from 'react';
import './Textfield.css';

export class Textfield extends PureComponent {
  render() {
    const {
      type, 
      icon, 
      placeholder,
      name,
      value, 
      onChange
    } = this.props;

    return (
      <div className="Textfield">
        <div className="Textfield__addon">
          <span
            className="Textfield__addon-icon"
            style={{backgroundImage: `url(${icon})`}}  
          >
          </span>
        </div>
        <input 
          className="Textfield__control" 
          placeholder={placeholder}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default Textfield;
