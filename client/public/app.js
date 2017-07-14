import React from 'react';
import ReactDOM from 'react-dom'
import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//import { routerReducer, routerMiddleware} from 'react-router-redux'
import reducers from './reducers/';
import './assets/style/reset.scss';
import Routes  from './router/router';

// const store = createStore(  
//   combineReducers({
//     reducers,
//     routing: routerReducer
//   })
// )


const store = createStore(reducers)
const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
 <Provider store={store}>
      <Routes />
  </Provider>,
  MOUNT_NODE
);