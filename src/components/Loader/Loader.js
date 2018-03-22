import React, {Component} from 'react';
import PreloaderIcon, {ICON_TYPE} from 'react-preloader-icon';
import './Loader.css';

export class Loader extends Component {
  render() {
    return (
      <div className="Loader">
        <PreloaderIcon
          type={ICON_TYPE.PUFF}
          size={32}
          strokeWidth={8} // min: 1, max: 50
          strokeColor="#06beb6"
          duration={800}
        />
      </div>
    );
  }
}

export default Loader;
