import React, { PureComponent } from 'react';
import imgAngleArrow from 'Images/angle-arrow.svg';
import './Pagination.css';

class History extends PureComponent {
  render() {
    return (
      <div className="Pagination">
        <button type="button" className="Pagination__btn Pagination__btn-prev">
          <span
            className="Pagination__btn-icon Pagination__btn-prev-icon"
            style={{backgroundImage: `url(${imgAngleArrow})`}}  
          >
          </span>
        </button>
        <button type="button" className="Pagination__btn">1</button>
        <button type="button" className="Pagination__btn">2</button>
        <button type="button" className="Pagination__btn">3</button>
        <button type="button" className="Pagination__btn">4</button>
        <button type="button" className="Pagination__btn Pagination__btn-next">
          <span
            className="Pagination__btn-icon Pagination__btn-next-icon"
            style={{backgroundImage: `url(${imgAngleArrow})`}}  
          >
          </span>
        </button>
      </div>
    );
  }
};

export default History;
