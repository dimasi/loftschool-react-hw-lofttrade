import wallet from '../wallet';
import {
  fetchWalletRequest,
  fetchWalletSuccess,
  fetchWalletFailure
} from "actions/wallet";
import {
  buyCurrencyRequest,
  buyCurrencySuccess,
  buyCurrencyFailure,
  sellCurrencyRequest,
  sellCurrencySuccess,
  sellCurrencyFailure
} from "actions/currency";

describe('Редьюсер wallet', () => {
  it('Экшен с типом fetchWalletRequest изменяет значение isLoading на true', 
  () => {
    const next = wallet(
      {isLoading: false},
      {type: fetchWalletRequest}
    );
    
    expect(next.isLoading).toBeTruthy();
  });

  it('Экшен с типом fetchWalletSuccess изменяет значение isLoading на false', 
  () => {
    const next = wallet(
      {isLoading: true},
      {
        type: fetchWalletSuccess,
        payload: {
          btc: 1,
          eth: 1,
          usd: 1
        }
      }
    );
    
    expect(next.isLoading).toBeFalsy();
  });

  it('Экшен с типом fetchWalletFailure изменяет значение isLoading на false', 
  () => {
    const next = wallet(
      {isLoading: true},
      {type: fetchWalletFailure}
    );
    
    expect(next.isLoading).toBeFalsy();
  });

  it('Экшен с типом fetchWalletSuccess устанавливает новое значение coins.usd', 
  () => {
    const next = wallet(
      {
        coins: {
          usd: 0
        }
      },
      {
        type: fetchWalletSuccess,
        payload: {
          btc: 1,
          eth: 1,
          usd: 1
        }
      }
    );
    
    expect(next.coins.usd).toEqual(1);
  });

  it('Экшен с типом fetchWalletSuccess устанавливает новое значение coins.btc', 
  () => {
    const next = wallet(
      {
        coins: {
          btc: 0
        }
      },
      {
        type: fetchWalletSuccess,
        payload: {
          btc: 1,
          eth: 1,
          usd: 1
        }
      }
    );
    
    expect(next.coins.btc).toEqual(1);
  });

  it('Экшен с типом fetchWalletSuccess устанавливает новое значение coins.eth', 
  () => {
    const next = wallet(
      {
        coins: {
          eth: 0
        }
      },
      {
        type: fetchWalletSuccess,
        payload: {
          btc: 1,
          eth: 1,
          usd: 1
        }
      }
    );
    
    expect(next.coins.eth).toEqual(1);
  });

  it('Экшен с типом buyCurrencyRequest меняет значение error на null', 
  () => {
    const next = wallet(
      {error: 'test'},
      {type: buyCurrencyRequest}
    );
    
    expect(next.error).toBeNull();
  });

  it('Экшен с типом buyCurrencySuccess меняет значение error на null', 
  () => {
    const next = wallet(
      {error: 'test'},
      {type: buyCurrencySuccess}
    );
    
    expect(next.error).toBeNull();
  });

  it('Экшен с типом buyCurrencyFailure устанавливает значение для error', 
  () => {
    const next = wallet(
      {error: 'test'},
      {
        type: buyCurrencyFailure,
        payload: 'test'
      }
    );
    
    expect(next.error).toBe('test');
  });

  it('Экшен с типом sellCurrencyRequest меняет значение error на null', 
  () => {
    const next = wallet(
      {error: 'test'},
      {type: sellCurrencyRequest}
    );
    
    expect(next.error).toBeNull();
  });

  it('Экшен с типом sellCurrencySuccess меняет значение error на null', 
  () => {
    const next = wallet(
      {error: 'test'},
      {type: sellCurrencySuccess}
    );
    
    expect(next.error).toBeNull();
  });

  it('Экшен с типом sellCurrencyFailure устанавливает значение для error', 
  () => {
    const next = wallet(
      {error: 'test'},
      {
        type: sellCurrencyFailure,
        payload: 'test'
      }
    );
    
    expect(next.error).toBe('test');
  });
});
