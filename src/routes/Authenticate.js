import React from 'react';
import { Redirect } from 'react-router-dom';

// routes
import PublicRoutes from './PublicRoutes';

function Authenticate() {
  return true ? (
    <Redirect to="/app" />
  ) : (
    <PublicRoutes />
  );
}

export default Authenticate;
