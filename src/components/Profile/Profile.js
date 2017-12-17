import React, { PureComponent } from 'react';
import './Profile.css';
import Wallet from 'components/Wallet';
import SavingsAmount from 'components/SavingsAmount';
import SectionHeading from 'components/SectionHeading';
import FeedList from 'components/FeedList';
import UserCard from 'components/UserCard';
import avatarSmall5 from 'images/avatar-small-5.jpg';
import feedImg3 from 'images/feed-img-3.jpg';

const _feeds = [
  {
    type: 'purchase',
    author: {
      avatar: avatarSmall5,
      text: 'kostya_punk',
      badgeText: 'это вы'
    },
    date: '13:00 21.10.17',
    heading: 'Купил 0.3 BTC за 199$',
    commentsAmount: 1
  },
  {
    type: 'selling',
    author: {
      avatar: avatarSmall5,
      text: 'kostya_punk',
      badgeText: 'это вы'
    },
    date: '11:00 21.10.17',
    heading: 'Продал 0.3 BTC за 299$',
    commentsAmount: 1
  },
  {
    type: 'post',
    author: {
      avatar: avatarSmall5,
      text: 'kostya_punk',
      badgeText: 'это вы'
    },
    date: '10:00 21.10.17',
    heading: 'Эфириум по 450$ в конце ноября',
    text: `
      <p>
        Думаю что предстоящий хардфорк сделает своё дело и 
        хорошо поднимет курс Эфира. В этой идее я провожу 
        сравнительный волновой анализ. Мы можем наблюдать 
        некоторые сходства развития импульсных волн. Конечно  
      </p>
    `,
    topImg: feedImg3,
    commentsAmount: 10
  },
  {
    type: 'selling',
    author: {
      avatar: avatarSmall5,
      text: 'kostya_punk',
      badgeText: 'это вы'
    },
    date: '9:00 21.10.17',
    heading: 'Продал 0.1 BTC за 99$',
    commentsAmount: 1
  }
];

export class Profile extends PureComponent {
  render() {
    return (
      <div className="Profile">
        <div className="Profile__body">
          <div className="Profile__body-left">
            <section className="Profile__user-card">
              <SectionHeading>Личный профиль</SectionHeading>
              <UserCard />
            </section>
          </div>
          <div className="Profile__body-right">
            <div className="Profile__score">
              <Wallet />
            </div>
            <div className="Profile__savings-amount">
              <SavingsAmount savings={'1 123'} />
            </div>
          </div>
        </div>
        <div className="Profile__activity">
          <div className="Profile__activity-heading">
            <SectionHeading>Ваша последняя активность</SectionHeading>
          </div>
          <FeedList feeds={_feeds} />
        </div>
      </div>
    );
  }
}

export default Profile;
