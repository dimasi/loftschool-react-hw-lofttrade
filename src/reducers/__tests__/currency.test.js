import currency from '../currency';
import {
  selectBtc,
  selectEth,
  selectOffset,
  fetchBtcRequest,
  fetchBtcSuccess,
  fetchBtcFailure,
  fetchEthRequest,
  fetchEthSuccess,
  fetchEthFailure
} from 'actions/currency';

describe('Редьюсер currency', () => {
  it('Экшен с типом selectBtc изменяет значение selected на btc', () => {
    const next = currency(
      {selected: 'eth'},
      {type: selectBtc}
    );

    expect(next.selected).toBe('btc');
  });

  it('Экшен с типом selectEth изменяет значение selected на eth', () => {
    const next = currency(
      {selected: 'btc'},
      {type: selectEth}
    );
    
    expect(next.selected).toBe('eth');
  });

  it('Экшен с типом selectOffset изменяет значение offset', () => {
    const next = currency(
      {selected: '2h'},
      {
        type: selectOffset, 
        payload: '4h'
      }
    );
    
    expect(next.offset).toBe('4h');
  });

  it('Экшен с типом fetchBtcRequest изменяет значение isBtcLoading на true', 
    () => {
      const next = currency(
        {isBtcLoading: false},
        {type: fetchBtcRequest}
      );
      
      expect(next.isBtcLoading).toBeTruthy();
    });

  it('Экшен с типом fetchBtcRequest очищает значение btc', () => {
    const next = currency(
      {btc: [{test: 'test'}]},
      {type: fetchBtcRequest}
    );
    
    expect(next.btc).toEqual([]);
  });

  it('Экшен с типом fetchBtcSuccess изменяет значение isBtcLoading на false', 
  () => {
    const next = currency(
      {isBtcLoading: true},
      {type: fetchBtcSuccess}
    );
    
    expect(next.isBtcLoading).toBeFalsy();
  });

  it('Экшен с типом fetchBtcSuccess устанавливает новое значение btc', () => {
    const next = currency(
      {btc: []},
      {
        type: fetchBtcSuccess,
        payload: [{test: 'test'}]
      }
    );
    
    expect(next.btc).toEqual([{test: 'test'}]);
  });
  
  it('Экшен с типом fetchBtcFailure изменяет значение isBtcLoading на false', 
  () => {
    const next = currency(
      {isBtcLoading: true},
      {
        type: fetchBtcFailure, 
        error: new Error()
      }
    );
    
    expect(next.isBtcLoading).toBeFalsy();
  });
  
  it('Экшен с типом fetchBtcFailure изменяет значение btc на Error', 
  () => {
    const error = new Error('test');

    const next = currency(
      {btc: []},
      {
        type: fetchBtcFailure, 
        error: error
      }
    );
    
    expect(next.btc).toEqual(error);
  });

  it('Экшен с типом fetchEthRequest изменяет значение isEthLoading на true', 
    () => {
      const next = currency(
        {isEthLoading: false},
        {type: fetchEthRequest}
      );
      
      expect(next.isEthLoading).toBeTruthy();
    });

  it('Экшен с типом fetchEthRequest очищает значение eth', () => {
    const next = currency(
      {eth: [{test: 'test'}]},
      {type: fetchEthRequest}
    );
    
    expect(next.eth).toEqual([]);
  });

  it('Экшен с типом fetchEthSuccess изменяет значение isEthLoading на false', 
  () => {
    const next = currency(
      {isEthLoading: true},
      {type: fetchEthSuccess}
    );
    
    expect(next.isEthLoading).toBeFalsy();
  });

  it('Экшен с типом fetchEthSuccess устанавливает новое значение eth', () => {
    const next = currency(
      {eth: []},
      {
        type: fetchEthSuccess,
        payload: [{test: 'test'}]
      }
    );
    
    expect(next.eth).toEqual([{test: 'test'}]);
  });
  
  it('Экшен с типом fetchEthFailure изменяет значение isEthLoading на false', 
  () => {
    const next = currency(
      {isEthLoading: true},
      {
        type: fetchEthFailure, 
        error: new Error()
      }
    );
    
    expect(next.isEthLoading).toBeFalsy();
  });
  
  it('Экшен с типом fetchEthFailure изменяет значение eth на Error', 
  () => {
    const error = new Error('test');

    const next = currency(
      {eth: []},
      {
        type: fetchEthFailure, 
        error: error
      }
    );
    
    expect(next.eth).toEqual(error);
  });
});
