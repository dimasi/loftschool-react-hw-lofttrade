import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import createStore from './store';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import App from 'Components/App';
import './index.css';

const store = createStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>, 
  document.getElementById('root')
);

registerServiceWorker();
