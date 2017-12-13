import React, { PureComponent } from 'react';
import './UserLabel.css';

class UserLabel extends PureComponent {
  renderBadge = () => {
    const { badgeText } = this.props;

    if (badgeText) {
      return <span className="UserLabel__position">{ badgeText }</span>;
    }
  }

  render() {
    const { avatar, text } = this.props;

    return (
      <div className="UserLabel">
        <span 
          className="UserLabel__avatar"
          style={{backgroundImage: `url(${avatar})`}}
        >
        </span>
        <span className="UserLabel__name">{ text }</span>
        {this.renderBadge()}
      </div>
    );
  }
}

export default UserLabel;
