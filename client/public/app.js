import React from 'react';
import ReactDOM from 'react-dom'
import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// import routes from './router/router';
import { routerReducer, routerMiddleware, push } from 'react-router-redux'
import {
  BrowserRouter as Router,
  Route ,} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import reducers from './reducers/';

const middleware = routerMiddleware(history)
const store = createStore(
  combineReducers({
    reducers,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)
import './assets/style/reset.scss';


const history = createHistory()
const MOUNT_NODE = document.getElementById('app');



import App from './componets/index.js';
import Test from './componets/test.js'
ReactDOM.render(
	<Provider store={store}>
		<Router  history={history}>
			<div>
				<Route exact path="/" component={App} />
				<Route path="/test" component={Test} />
			</div>
		</Router>
    </Provider>,
  	MOUNT_NODE
);