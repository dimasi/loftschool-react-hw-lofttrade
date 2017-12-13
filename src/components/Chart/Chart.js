import React, { PureComponent } from 'react';
import { Chart as GChart } from 'react-google-charts';
import SectionHeading from 'Components/SectionHeading'
import './Chart.css';

class Chart extends PureComponent {
  render() {
    return (
      <section className="Chart">
        <SectionHeading>Окно графика</SectionHeading>
        <div className="Chart__container">
          <div className="Chart__controls">
            <button type="button" className="Chart__controls-btn">2ч</button>
            <button type="button" className="Chart__controls-btn Chart__controls-btn_active">4ч</button>
            <button type="button" className="Chart__controls-btn">8ч</button>
            <button type="button" className="Chart__controls-btn">1д</button>
            <button type="button" className="Chart__controls-btn">7д</button>
          </div>
          <GChart
            chartType="LineChart"
            rows={[
              [0, 0, 0], [1, 10, 5], [2, 23, 15], [3, 17, 9], [4, 18, 10], 
              [5, 9, 5], [6, 11, 3], [7, 27, 19], [8, 33, 25], [9, 40, 32],
              [10, 32, 24], [11, 35, 27], [12, 30, 22], [13, 40, 32], 
              [14, 42, 34], [15, 47, 39], [16, 44, 36], [17, 48, 40],
              [18, 52, 44], [19, 54, 46], [20, 42, 34], [21, 55, 47], 
              [22, 56, 48], [23, 57, 49], [24, 60, 52], [25, 50, 42], 
              [26, 52, 44], [27, 51, 43], [28, 49, 41], [29, 53, 45], 
              [30, 55, 47], [31, 60, 52], [32, 61, 53], [33, 59, 51], 
              [34, 62, 54], [35, 65, 57], [36, 62, 54], [37, 58, 50], 
              [38, 55, 47], [39, 61, 53], [40, 64, 56], [41, 65, 57],
              [42, 63, 55], [43, 66, 58], [44, 67, 59], [45, 69, 61], 
              [46, 69, 61], [47, 70, 62], [48, 72, 64], [49, 68, 60], 
              [50, 66, 58], [51, 65, 57], [52, 67, 59], [53, 70, 62],
              [54, 71, 63], [55, 72, 64], [56, 73, 65], [57, 75, 67], 
              [58, 70, 62], [59, 68, 60], [60, 64, 56], [61, 60, 52], 
              [62, 65, 57], [63, 67, 59], [64, 68, 60], [65, 69, 61],
              [66, 70, 62], [67, 72, 64], [68, 75, 67], [69, 80, 72]
            ]}
            columns={[
              {
                type: 'number',
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
              chartArea:{ left: 50, top: 42, bottom: 30, right: 10, width: "100%", height: "100%" },
              colors: ['#a52714', '#097138'],
              legend: { position: 'top' }
            }}
            graph_id="ScatterChart"
            width="100%"
            height="284px"
            legend_toggle
          />
        </div>
      </section>
    );
  }
};

export default Chart;
