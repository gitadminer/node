import React from 'react'
import {Route} from 'react-router-dom'
import App from '../componets/index.js'
import Test from '../componets/test.js'


const routes = (
  <div>
    <Route exact  path="/" component={App} />
	<Route path="/test" component={Test} />
  </div>
);

export default routes