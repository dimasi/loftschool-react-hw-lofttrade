import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import cx from 'classnames';
import {getOffset} from 'reducers/currency';
import {selectOffset} from 'actions/currency';
import './ChartControls.css';

class ChartControls extends PureComponent {
  offsets = [
    ['2h', '2ч'],
    ['4h', '4ч'],
    ['8h', '8ч'],
    ['1d', '1д'],
    ['7d', '7д']
  ]

  handleClick = (e) => {
    const {target: {value: nextOffset}} = e;
    const {
      selectOffset, 
      offset: currentOffset
    } = this.props;

    if (nextOffset !== currentOffset) {
      selectOffset(nextOffset);
    }
  }

  renderControl = (offset) => {
    const {offset: currentOffset} = this.props;
    const [offsetValue, offsetText] = offset;
    const key = `chartControl${offsetValue}`;
    const itemClasses = cx(
      'ChartControls__btn',
      {'ChartControls__btn_active': offsetValue === currentOffset}
    )

    return (
      <button
        type="button"
        key={key}
        className={itemClasses}
        value={offsetValue}
        onClick={this.handleClick}
      >
        {offsetText}
      </button>
    );
  }

  render() {
    return (
      <div className="ChartControls">
        {this.offsets.map((offset) => this.renderControl(offset))}
      </div>
    );
  }
};

const mapStateToProps = state => ({
  offset: getOffset(state)
});

const mapDispatchToProps = {
  selectOffset
};

export default connect(mapStateToProps, mapDispatchToProps)(ChartControls);
