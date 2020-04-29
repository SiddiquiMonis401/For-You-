import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { history } from 'utils';

// Routes
import Authenticate from './Authenticate';
import PrivateRoutes from './PrivateRoutes';


function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/app" component={PrivateRoutes} />
        <Route path="" render={Authenticate} />
      </Switch>
    </Router>
  );
}

export default Routes;
