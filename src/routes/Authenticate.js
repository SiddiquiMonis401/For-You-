import React from 'react';
import { Redirect } from 'react-router-dom';

// routes
import PublicRoutes from './PublicRoutes';

function Authenticate() {
  return JSON.parse(localStorage.getItem('roles')) ? (
    <Redirect to="/app" />
  ) : (
    <PublicRoutes />
  );
}

export default Authenticate;
