import React, { PureComponent } from 'react';
import UserLabel from 'Components/UserLabel';
import SavingsAmount from 'Components/SavingsAmount';
import prize1 from 'Images/prize-1.svg';
import prize2 from 'Images/prize-2.svg';
import prize3 from 'Images/prize-3.svg';
import './Stat.css';

class Stat extends PureComponent {
  renderPositionImage = () => {
    const {user: {position}} = this.props;

    let bgImage;
    if (position === 1) {
      bgImage = prize1;
    }
    else if (position === 2) {
      bgImage = prize2;
    }
    else if (position === 3) {
      bgImage = prize3;
    }

    
    if (bgImage) {
      return (
        <span 
          className="Stat__position" 
          style={{backgroundImage: `url(${bgImage})`}}
        ></span>
      );
    }
    else {
      return <span className="Stat__position">{position}</span>
    }
  }

  render() {
    const {
      user: {
        avatar,
        name,
        position
      },
      transactions, 
      savings
    } = this.props;

    return (
      <div className="Stat">
        {this.renderPositionImage()}
        <header className="Stat__header">
          <div className="Stat__header-user">
            <UserLabel
              avatar={avatar}
              text={name}
              badgeText={`${position} место`}
            />
          </div>
          <div className="Stat__transaction-count">
            {`${transactions} транзакций`}
          </div>
        </header>
        <div className="Stat__body">
          <div className="Stat__savings-amount">
            <SavingsAmount savings={savings} />
          </div>
        </div>
      </div>
    );
  }
}

export default Stat;
