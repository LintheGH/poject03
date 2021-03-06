import React from 'react';
import ReactDOM from 'react-dom';
import './Modules/config.js'
import './index.css';
import Router from './Router';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store from './Store'
ReactDOM.render(
  <Provider store={ store }>
    <Router/>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
