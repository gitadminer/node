import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import createHistory from 'history/createBrowserHistory'
const history = createHistory()
//componets
import App from '../views/index.js';
import Test from '../views/test.js';
import Login from '../views/login.js';


const routes =[
	{
		path:'/',
		component:App,
		exact: true,
		Auth:true,
		routes:[
			{
				path:'home',
				component:App,
				exact: true,
				Auth:true
			},{
				path:'/test',
				component:Test,
				exact: true,
				Auth:true
			}
		]
	},
	{
		path:'/login',
		component:Login
	}
]
const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={(props) =>(<route.component {...props} routes={route.routes}/>)} />
)



const RouteConfig= () => (
  <Router history={history}>
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes  key={i}  {...route}  />
      ))}
    </Switch>
  </Router>
)
export default RouteConfig