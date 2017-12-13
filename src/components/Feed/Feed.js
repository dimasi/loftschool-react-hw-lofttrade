import React, { PureComponent } from 'react';
import UserLabel from 'Components/UserLabel';
import cx from 'classnames';
import Comments from 'Components/Comments';
import CommentsBtn from 'Components/CommentsBtn';
import MoreToggler from 'Components/MoreToggler';
import './Feed.css';

class Feed extends PureComponent {
  renderTopImg = () => {
    const { topImg } = this.props;

    if (topImg) {
      return (
        <div className="Feed__img-top">
          <img
            className="Feed__img"
            src={topImg}
            alt=""
          />
        </div>
      );
    }
  }

  renderBottomImg = () => {
    const { bottomImg } = this.props;

    if (bottomImg) {
      return (
        <div className="Feed__img-bottom">
          <img
            className="Feed__img"
            src={bottomImg}
            alt=""
          />
        </div>
      );
    }
  }

  renderComments = () => {
    const {
      comments,
      commentsAmount,
      user
    } = this.props;

    if (comments) {
      return (
        <div className="Feed__comments">
          <Comments 
            comments={comments} 
            commentsAmount={commentsAmount} 
            user={user}
          />
        </div>
      );
    }
  }

  renderTypeIcon = () => {
    const {type} = this.props;

    if (type === 'selling' || type === 'purchase') {
      const classes = cx(
        'Feed__heading-title-icon',
        `Feed__heading-title-icon_${type}`
      )

      return <span className={classes}></span>
    }
  }

  renderText = () => {
    const {text} = this.props;

    if (text) {
      return (
        <div className="Feed__desc-text-container">
          <div 
            className="Feed__desc-text" 
            dangerouslySetInnerHTML={{__html: text}}
          />
          {this.renderMoreToggler()}
        </div>
      );
    }
  }

  renderMoreToggler = () => {
    const {text} = this.props;

    if (text) {
      return (
        <div className="Feed__desc-more-toggler">
          <MoreToggler />
        </div>
      );
    }
  }

  render() {
    const {
      author: {
        avatar: authorAvatar,
        text: authorText,
        badgeText: authorBadgeText
      },
      date,
      heading,
      commentsAmount
    } = this.props;

    return (
      <div className="Feed">
        <div className="Feed__content">
          <header className="Feed__header">
            <div className="Feed__header-user">
              <UserLabel
                avatar={authorAvatar}
                text={authorText}
                badgeText={authorBadgeText}
              />
            </div>
            <div className="Feed__header-date">
              {date}
            </div>
          </header>
          <div className="Feed__body">
            {this.renderTopImg()}
            <div className="Feed__heading">
              <h4 className="Feed__heading-title">
                {heading}
                {this.renderTypeIcon()}
              </h4>
              <div className="Feed__heading-comments">
                <CommentsBtn commentsAmount={commentsAmount} />
              </div>
            </div>
            {this.renderText()}
            {this.renderBottomImg()}
          </div>
        </div>
        {this.renderComments()}
      </div>
    );
  }
}

export default Feed;
