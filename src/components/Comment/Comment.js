import React, {PureComponent} from 'react';
import UserLabel from 'components/UserLabel';
import './Comment.css';

export class Comment extends PureComponent {
  render() {
    const {
      date,
      text,
      user: {
        avatar,
        text: userText
      }
    } = this.props;

    return (
      <div className="Comment">
        <header className="Comment__header">
          <UserLabel
            avatar={avatar}
            text={userText}
          />
        </header>
        <div 
          className="Comment__body" 
          dangerouslySetInnerHTML={{__html: text}}
        />
        <footer className="Comment__footer">
          <span className="Comment__date">{date}</span>
        </footer>
      </div>
    );
  }
}

export default Comment;
