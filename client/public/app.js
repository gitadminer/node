import React from 'react';
import ReactDOM from 'react-dom'
import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';

import reducers from './reducers/';
import './assets/style/reset.scss';
import Routes  from './router/router';

const store = createStore(
	reducers,
	applyMiddleware(thunkMiddleware)
)
const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
 <Provider store={store}>
      <Routes />
  </Provider>,
  MOUNT_NODE
);