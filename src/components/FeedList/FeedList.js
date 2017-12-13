import React, { PureComponent } from 'react';
import Feed from 'Components/Feed';
import './FeedList.css';

class FeedList extends PureComponent {
  render() {
    const {feeds} = this.props;

    return (
      <ul className="FeedList">
        {feeds.map((feed, index) => (
          <li
            className="FeedList__item"
            key={`feed_${index}`}
          >
            <Feed
              type={feed.type}
              author={feed.author}
              user={feed.user}
              date={feed.date}
              heading={feed.heading}
              text={feed.text}
              topImg={feed.topImg}
              bottomImg={feed.bottomImg}
              commentsAmount={feed.commentsAmount}
              comments={feed.comments}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default FeedList;
