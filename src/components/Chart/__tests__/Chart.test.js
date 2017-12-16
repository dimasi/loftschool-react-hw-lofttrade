import React from 'react';
import {Chart} from './../Chart';
import {Loader} from 'components/Loader';
import {shallow} from 'enzyme';

describe('Компонент Chart', () => {
  it('Присутствует компонент Loader, если isBtcLoading === true и ' +
  'selector === "btc"', () => {
    const wrapper = shallow(
      <Chart 
        selected="btc" 
        isBtcLoading={true}
        btc={[]}
        eth={[]}
      />
    );

    expect(wrapper.find('Loader')).toHaveLength(1);
  });

  it('Присутствует компонент Loader, если isEthLoading === true и ' +
  'selector === "eth"', () => {
    const wrapper = shallow(
      <Chart 
        selected="eth" 
        isEthLoading={true}
        btc={[]}
        eth={[]}
      />
    );

    expect(wrapper.find('Loader')).toHaveLength(1);
  });
});
