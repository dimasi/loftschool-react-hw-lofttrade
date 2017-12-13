import React, { PureComponent } from 'react';
import SectionHeading from 'Components/SectionHeading';
import Pagination from 'Components/Pagination';
import './History.css';

class History extends PureComponent {
  render() {
    return (
      <section className="History">
        <SectionHeading>История операций</SectionHeading>
        <div className="History__container">
          <table>
            <thead>
              <tr>
                <td>Операция</td>
                <td>Дата</td>
                <td>BTC</td>
                <td>USD</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Покупка</td>
                <td>19.10.17 14:43</td>
                <td>0.12332</td>
                <td>4.12</td>
              </tr>
              <tr>
                <td>Покупка</td>
                <td>13.10.17 14:43</td>
                <td>0.234032</td>
                <td>4.45</td>
              </tr>
              <tr>
                <td>Продажа</td>
                <td>12.10.17 14:43</td>
                <td>0.23</td>
                <td>3.23</td>
              </tr>
              <tr>
                <td>Покупка</td>
                <td>11.10.17 14:43</td>
                <td>0.123</td>
                <td>6.123</td>
              </tr>
              <tr>
                <td>Продажа</td>
                <td>12.10.17 14:43</td>
                <td>0.234032</td>
                <td>3.23</td>
              </tr>
            </tbody>
          </table>
          <footer className="History__pagination">
            <Pagination />
          </footer>
        </div>
      </section>
    );
  }
};

export default History;
