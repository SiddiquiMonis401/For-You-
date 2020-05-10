import React, { memo } from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';

// images
import logo from 'assets/images/top-logo.png';
import bell from 'assets/images/bell.svg';
import profile from 'assets/images/user-profile.png';

// styles
import './styles/top-bar.scss';

function TopBar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand href="#home">
        <img
          src={logo}
          width="180"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav className="align-items-center">
          <Nav.Link href="#" className="bell-icon">
            <img
              src={bell}
              width="20"
              height="24"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <span className="badge" />
          </Nav.Link>
          <Nav.Link href="#">
            <img
              src={profile}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <span className="user-id">ID: <span>18404744</span></span>
          </Nav.Link>
          <NavDropdown title="User Name" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default memo(TopBar);
