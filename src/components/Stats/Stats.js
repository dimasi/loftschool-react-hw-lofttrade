import React, {PureComponent} from 'react';
import Stat from 'components/Stat';
import avatarSmall1 from 'images/avatar-small-1.jpg';
import avatarSmall2 from 'images/avatar-small-2.jpg';
import avatarSmall3 from 'images/avatar-small-3.jpg';
import avatarSmall4 from 'images/avatar-small-4.jpg';
import avatarSmall5 from 'images/avatar-small-5.jpg';
import './Stats.css';

const _props = [
  {
    user: {
      avatar: avatarSmall1,
      name: 'btc_master',
      position: 1
    },
    transactions: '1024', 
    savings: '10 123'
  },
  {
    user: {
      avatar: avatarSmall2,
      name: 'btc_master',
      position: 2
    },
    transactions: '824', 
    savings: '8 123'
  },
  {
    user: {
      avatar: avatarSmall3,
      name: 'btc_master',
      position: 3
    },
    transactions: '324', 
    savings: '5 123'
  },
  {
    user: {
      avatar: avatarSmall4,
      name: 'btc_master',
      position: 4
    },
    transactions: '124', 
    savings: '2 123'
  },
  {
    user: {
      avatar: avatarSmall5,
      name: 'btc_master',
      position: 5
    },
    transactions: '24', 
    savings: '123'
  }
];

export class Stats extends PureComponent {
  render() {
    return (
      <div className="Stats">
        {_props.map((stat, index) => {
          return (
            <Stat
              key={`stat_${index}`}
              user={stat.user}
              transactions={stat.transactions}
              savings={stat.savings}
            />
          );
        })}
      </div>
    );
  }
}

export default Stats;
