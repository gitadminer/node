import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import createHistory from 'history/createBrowserHistory'
const history = createHistory()
//componets
import App from '../componets/index.js';
import Test from '../componets/test.js';
import Login from '../componets/login.js';


const routes =[{
		path:'/home',
		component:App,
		exact: true,
	},{
		path:'/test',
		component:Test,
		exact: true,
	},
	{
		path:'/login',
		component:Login,
		exact: true,
	}
]

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)

const RouteConfigExample = () => (
  <Router history={history}>
    <Switch>
      {routes.map((route, i) => (
        <Route key={i} path={route.path} exact={route.exact} component={route.component} />
      ))}
    </Switch>
  </Router>
)

export default RouteConfigExample