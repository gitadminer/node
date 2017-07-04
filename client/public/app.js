import React from 'react';
import ReactDOM from 'react-dom'
import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// import routes from './router/router';
import { routerReducer, routerMiddleware} from 'react-router-redux'
// import {
//   BrowserRouter as Router,
//   Route} from 'react-router-dom'
//import createHistory from 'history/createBrowserHistory'
import reducers from './reducers/';
import './assets/style/reset.scss';
import Routes  from './router/router';

const middleware = routerMiddleware(history)
const store = createStore(
  combineReducers({
    reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)
//const history = createHistory()
const MOUNT_NODE = document.getElementById('app');

import App from './componets/index.js';
import Test from './componets/test.js';
import Login from './componets/login.js';
ReactDOM.render(
	<Provider store={store}>
      <Routes />
  </Provider>,
  MOUNT_NODE
);