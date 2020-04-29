import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import { Register, About, ForgotPassword, Login } from 'components';
import { NotFound } from 'components/common';

const PublicRoutes = () => (
  <Switch>
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/register" component={Register} />
    <Route path="/about" component={About} />
    <Route exact path="/" component={Login} />
    <Route component={NotFound} />
  </Switch>
);

export default PublicRoutes;
