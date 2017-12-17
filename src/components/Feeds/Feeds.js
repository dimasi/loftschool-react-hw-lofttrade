import React, {PureComponent} from 'react';
import FeedList from 'components/FeedList';
import './Feeds.css';
import avatarSmall1 from 'images/avatar-small-1.jpg';
import avatarSmall2 from 'images/avatar-small-2.jpg';
import avatarSmall3 from 'images/avatar-small-3.jpg';
import avatarSmall4 from 'images/avatar-small-4.jpg';
import feedImg1 from 'images/feed-img-1.jpg';
import feedImg2 from 'images/feed-img-2.jpg';

const _feeds = [
  {
    type: 'post',
    author: {
      avatar: avatarSmall1,
      text: 'artem',
      badgeText: '11 место'
    },
    user: {
      avatar: avatarSmall1
    },
    date: '13:00 21.10.17',
    heading: 'BTC лонги/шорты',
    text: `
      <p>
        План на открытие лонга с 5к был успешно выполнен. В БУ 
        переводить пока не спешу, ситуация слишком вертикальная :) 
        Конечно шорты были более заманчивы... Но хотелка и рынок вещи 
        не совместимые. В ТМ канале рекомендовать я бы не стал. Уж 
        слишком там много людей сидят и смотрятна мои гениальные идеи.
      </p>
      <p></p>
      <p>Суммарная доходность +236% (менее 4 месяцев)</p>
      <p>Всего прогнозов 36</p>
      <p>Средний результат = +4.17% (сроки 1-7 дней)</p>
      <p>55% позиций прибыльны</p>
      <p>Самый большой убыток -8.94%</p>
    `,
    topImg: feedImg1,
    commentsAmount: 10,
    comments: [
      {
        user: {
          avatar: avatarSmall1,
          text: 'ne_artem'
        },
        date: '6 минут назад',
        text: `
          <p>
            Что-то я ничего не понял, но выглядит довольно круто и 
            убедительно, спасибо за уверенность в себе!
          </p>
        `
      },
      {
        user: {
          avatar: avatarSmall1,
          text: 'ne_artem'
        },
        date: '6 минут назад',
        text: `
          <p>
            Что-то я ничего не понял, но выглядит довольно круто и 
            убедительно, спасибо за уверенность в себе!
          </p>
        `
      }
    ]
  },
  {
    type: 'purchase',
    author: {
      avatar: avatarSmall2,
      text: 'btc_master',
      badgeText: '33 место'
    },
    date: '13:00 21.10.17',
    heading: 'Купил 0.3 BTC за 199$',
    commentsAmount: 1
  },
  {
    type: 'selling',
    author: {
      avatar: avatarSmall3,
      text: 'new_king',
      badgeText: '4 место'
    },
    date: '13:00 21.10.17',
    heading: 'Продал 10.3 BTC за 42.199$',
    commentsAmount: 1
  },
  {
    type: 'post',
    author: {
      avatar: avatarSmall4,
      text: 'new_king',
      badgeText: 'новичок'
    },
    user: {
      avatar: avatarSmall4
    },
    date: '13:00 21.10.17',
    heading: 'Мальчики, помогите!',
    text: `
      <p>
        Я искала работу на дому и попала на этот сайт. Не могу 
        понять зачем вы покупаете какие-то воздушно-тепловые 
        системы (мне так гугл сказал, я не глупая). 
      </p>
      <p>В общем помогите разобраться, поставлю вам лайк!</p>
    `,
    bottomImg: feedImg2,
    commentsAmount: 10
  }
];

export class Feeds extends PureComponent {
  render() {
    return (
      <div className="Feeds">
        <FeedList feeds={_feeds} />
        <button 
          className="Feeds__show-more-btn" 
          type="button"
        >+ Показать больше</button>
      </div>
    );
  }
}

export default Feeds;
