import React  from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

// Props
import { PrivateRoutesProps } from 'props';

// Components
import { Dashboard, AddTemplate } from 'components';
import { TopBar, Sidebar } from 'components/common';

const PrivateRoutes = (props) => {
  const { match: { path }} = props;
  return true ? (
    <>
      <TopBar />
      <Container fluid>
        <Row>
          <Col md="3" lg="2" className="pl-0">
            <Sidebar />
          </Col>
          <Col md="9" lg="10" className="p-0">
            <Switch>
              <Route path={`${path}/dashboard`} component={Dashboard} />
              <Route path={`${path}/add-template`} component={AddTemplate} />
              <Route path={`${path}`} component={Dashboard} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  ) : (
    <Redirect to="/" />
  );
};


const { props, defaultProps } = PrivateRoutesProps;
PrivateRoutes.propTypes = props;
PrivateRoutes.defaultProps = defaultProps;

export default PrivateRoutes;
