import React, { memo } from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// styles
import './styles/dashboard.scss';

// images
import home from 'assets/images/home.svg';
import user from 'assets/images/user.svg';
import message from 'assets/images/message.svg';
import logout from 'assets/images/logout.svg';
import profile from 'assets/images/user-profile.png';

function Dashboard() {
  return (
    <Container fluid>
      <Row>
        <Col md="3" lg="2" className="pl-0">
          <nav className="sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link to="/" className="nav-link active">
                    <img src={home} alt="Home Icon"/>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    <img src={user} alt="User Icon"/>
                    Users List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    <img src={user} alt="User Icon"/>
                    Templates
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    <img src={message} alt="Message Icon"/>
                    Messages
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    <img src={logout} alt="Logout Icon"/>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </Col>
        <Col md="9" lg="10" className="p-0">
          <div className="content-area">
            <div className="pt-4 d-flex justify-content-between align-items-center user-list">
              <h2 className="mb-0">Users List</h2>
              <Button variant="primary pt-2"> Add New</Button>
            </div>
            <Table responsive>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Cloth type</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <img src={profile} alt="" width="50" height="50" />
                      <div className="pl-3">
                        <h4 className="mb-0">Name Surname</h4>
                        <span>@johndoe</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="item-container">Sharwani</span>
                  </td>
                  <td>4 April 2020</td>
                  <td>cell</td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <img src={profile} alt="" width="50" height="50" />
                      <div className="pl-3">
                        <h4 className="mb-0">Name Surname</h4>
                        <span>@johndoe</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="item-container">Sharwani</span>
                  </td>
                  <td>4 April 2020</td>
                  <td>cell</td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <img src={profile} alt="" width="50" height="50" />
                      <div className="pl-3">
                        <h4 className="mb-0">Name Surname</h4>
                        <span>@johndoe</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="item-container">Sharwani</span>
                  </td>
                  <td>4 April 2020</td>
                  <td>cell</td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <img src={profile} alt="" width="50" height="50" />
                      <div className="pl-3">
                        <h4 className="mb-0">Name Surname</h4>
                        <span>@johndoe</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="item-container">Sharwani</span>
                  </td>
                  <td>4 April 2020</td>
                  <td>cell</td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <img src={profile} alt="" width="50" height="50" />
                      <div className="pl-3">
                        <h4 className="mb-0">Name Surname</h4>
                        <span>@johndoe</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="item-container">Sharwani</span>
                  </td>
                  <td>4 April 2020</td>
                  <td>cell</td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <img src={profile} alt="" width="50" height="50" />
                      <div className="pl-3">
                        <h4 className="mb-0">Name Surname</h4>
                        <span>@johndoe</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="item-container">Sharwani</span>
                  </td>
                  <td>4 April 2020</td>
                  <td>cell</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default memo(Dashboard);
