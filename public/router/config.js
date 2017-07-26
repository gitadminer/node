import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

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
	    	return (<route.component {...props} routes={route.routes} />)
	    }} 
  />
)

//路由验证
function  requireAuth(path){
	//如果是登录页面
	if(path ==='/login'){
		
	}
	return false;
}
module.exports = RouteWithSubRoutes;