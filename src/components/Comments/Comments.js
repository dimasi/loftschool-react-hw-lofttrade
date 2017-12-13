import React, { PureComponent } from 'react';
import UserLabel from 'Components/UserLabel';
import Comment from 'Components/Comment';
import './Comments.css';

class Comments extends PureComponent {
  render() {
    const {
      comments,
      commentsAmount,
      user: {
        avatar
      }
    } = this.props;

    return (
      <div className="Comments">
        <button 
          className="Comments__show-all-btn" 
          type="button"
        >
          {`+ Показать все ${commentsAmount} комментариев`}
        </button>
        <ul className="Comments__list">
          {
            comments.map((comment, index) => {
              const {date, user, text} = comment;

              return (
                <li 
                  className="Comments__list-item" 
                  key={`comment${index}`}
                >
                  <Comment 
                    date={date}
                    user={user}
                    text={text}
                  />
                </li>
              )
            })
          }
        </ul>
        <div className="Comments__add-comment">
          <header className="Comments__add-comment-header">
            <UserLabel
              avatar={avatar}
              text={'Ваш комментарий:'}
            />
          </header>
          <textarea 
            className="Comments__add-comment-textarea" 
            rows="4" 
            placeholder="Начните писать..."
          />
        </div>
      </div>
    );
  }
}

export default Comments;
