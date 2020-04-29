import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Components
import { Dashboard } from 'components';

const PrivateRoutes = () => {
  return JSON.parse(localStorage.getItem('roles')) ? (
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  ) : (
    <Redirect to="/" />
  );
};

export default PrivateRoutes;
