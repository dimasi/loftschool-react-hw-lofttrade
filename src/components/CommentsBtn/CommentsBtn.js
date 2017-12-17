import React from 'react';
import './CommentsBtn.css';
import imgMessageBubble from 'images/message-bubble.svg';

export const CommentsBtn = (props) => {
  const {commentsAmount} = props;

  return (
    <button type="button" className="CommentsBtn CommentsBtn_active">
      <span
        className="CommentsBtn__icon"
        style={{backgroundImage: `url(${imgMessageBubble})`}}  
      >
      </span>
      <span className="CommentsBtn__number">{commentsAmount}</span>
    </button>
  );
}

export default CommentsBtn;
