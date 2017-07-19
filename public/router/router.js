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
	},
	{
		path:'/login',
		component:Login
	}
]

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)
const RouteWithSubRoutes = (route) => (
  <Route 
  		path={route.path}
  		exact={route.exact}
  	    render={(props) =>{
  	    	if(route.Auth&&!requireAuth(route.path)) {
  	    		(<Redirect to={{
			        pathname: '/login',
			        state: { from: props.location }
			     }}/>)
  	    	}
  	    	return (<route.component {...props} />)
  	    }} 
  />
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

//路由验证
function  requireAuth(path){
	//如果是登录页面
	if(path ==='/login'){
		
	}
	return false;
}

export default RouteConfig