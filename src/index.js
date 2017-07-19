import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import './index.css';
import Routes from './routes';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './redux/store/configureStore';


const store = configureStore();

ReactDOM.render(
<Provider store={store}>
    <Routes/>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
