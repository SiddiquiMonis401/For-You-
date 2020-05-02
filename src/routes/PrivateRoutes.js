import React  from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Props
import { PrivateRoutesProps } from 'props';

// Components
import { Dashboard } from 'components';
import { TopBar } from 'components/common';

const PrivateRoutes = (props) => {
  const { match: { path }} = props;
  return true ? (
    <>
      <TopBar />
      <Switch>
        <Route path={`${path}dashboard`} component={Dashboard} />
        <Route path={`${path}`} component={Dashboard} />
      </Switch>
    </>
  ) : (
    <Redirect to="/" />
  );
};


const { props, defaultProps } = PrivateRoutesProps;
PrivateRoutes.propTypes = props;
PrivateRoutes.defaultProps = defaultProps;

export default PrivateRoutes;
