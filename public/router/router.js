import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import RouteWithSubRoutes from './config.js';
import createHistory from 'history/createBrowserHistory'
const history = createHistory()
//componets
import App from '../views/index.js';
import Test from '../views/test.js';
import Login from '../views/login.js';
import Chat from '../views/chat.js';

const routes =[
  {
    path:'/login',
    exact: true,
    component:Login
  },
	{
		path:'/',
		component:App,
		Auth:true,
    routes:[
      {
        path:'/chat',
        component:Chat
      }
    ]
	}
]

const RouteConfig= () => (
  <Router history={history}>
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes  key={i}  {...route} />
      ))}
    </Switch>
  </Router>
)



export default RouteConfig