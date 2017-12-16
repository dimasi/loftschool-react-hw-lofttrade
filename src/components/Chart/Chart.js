import React, {PureComponent} from 'react';
import {Chart as GChart} from 'react-google-charts';
import {connect} from 'react-redux';
import {
  getSelected,
  getBtc,
  getEth,
  getIsBtcLoading,
  getIsEthLoading
} from 'reducers/currency';
import {
  selectOffset
} from 'actions/currency';
import ChartControls from 'components/ChartControls';
import SectionHeading from 'components/SectionHeading';
import Loader from 'components/Loader';
import './Chart.css';

export class Chart extends PureComponent {
  getChartData = () => {
    const {
      btc, 
      eth, 
      selected
    } = this.props;
    
    let data = [];
    if (selected === 'btc') {
      data = btc;
    }
    else if (selected === 'eth') {
      data = eth;
    }

    const rows = data.map(
      ({mts, sell, purchase}) => [new Date(mts), sell, purchase]
    );

    return rows;
  }

  renderLoader = () => {
    const {isBtcLoading, isEthLoading, selected} = this.props;
    const btcLoading = selected === 'btc' && isBtcLoading;
    const ethLoading = selected === 'eth' && isEthLoading;

    if (btcLoading || ethLoading) {
      return <Loader />;
    }
  }

  renderChart = () => {
    const rows = this.getChartData();

    if (rows.length) {
      return (
        <GChart
          chartType="LineChart"
          rows={rows}
          columns={[
            {
              type: 'datetime',
              label: 'X'
            },
            {
              type: 'number',
              label: 'Покупка'
            },
            {
              type: 'number',
              label: 'Продажа'
            }
          ]}
          options={{
            chartArea: { 
              left: 60,
              top: 42,
              bottom: 30,
              right: 20,
              width: "100%",
              height: "100%"
            },
            colors: ['#366cd9', '#d9364d'],
            legend: { position: 'top' }
          }}
          graph_id="ScatterChart"
          width="100%"
          height="284px"
          loader={<Loader />}
          legend_toggle
        />
      );
    }
  }

  render() {
    return (
      <section className="Chart">
        <SectionHeading>Окно графика</SectionHeading>
        <div className="Chart__container">
          <ChartControls />
          {this.renderLoader()}
          {this.renderChart()}
        </div>
      </section>
    );
  }
};

const mapStateToProps = state => ({
  selected: getSelected(state),
  btc: getBtc(state),
  eth: getEth(state),
  isBtcLoading: getIsBtcLoading(state),
  isEthLoading: getIsEthLoading(state)
});

const mapDispatchToProps = {
  selectOffset
};

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
