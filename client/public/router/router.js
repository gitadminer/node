import React from 'react'
import {
  Route,
  IndexRoute
} from 'react-router'
import App from '../componets/index.js'

const routes = (
  <Route>
    <Route path="/" component={App}>
    </Route>
  </Route>
);

export default routes