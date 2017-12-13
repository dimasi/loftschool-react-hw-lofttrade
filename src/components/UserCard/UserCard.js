import React, { PureComponent } from 'react';
import avatar from 'Images/avatar.jpg';
import './UserCard.css';

class UserCard extends PureComponent {
  render() {
    return (
      <div className="UserCard">
        <div className="UserCard__wrapper">
          <div className="UserCard__avatar">
            <span 
              className="UserCard__avatar-img"
              style={{backgroundImage: `url(${avatar})`}}
            >
            </span>
            <button 
              type="button" 
              className="UserCard__avatar-upload-btn"
            >Изменить аватар</button>
          </div>
          <div className="UserCard__info">
            <div className="UserCard__field">
              <span className="UserCard__field-value">
                {'Константин'}
              </span>
              <button 
                type="button" 
                className="UserCard__field-value-change-btn"
              >изменить</button>
            </div>
            <div className="UserCard__field">
              <span className="UserCard__field-value">
                {'Константинопольский'}
              </span>
              <button 
                type="button" 
                className="UserCard__field-value-change-btn"
              >изменить</button>
            </div>
            <div className="UserCard__field">
              <span className="UserCard__field-value">
                {'kostya_punk@mail.ru'}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserCard;
