import React, { memo } from 'react';
import { Link } from 'react-router-dom';

// images
import home from 'assets/images/home.svg';
import user from 'assets/images/user.svg';
import message from 'assets/images/message.svg';
import logout from 'assets/images/logout.svg';

// TODO:
//  1. Add proptypes support,
//  2. create a css file and move it's style from dashboard to corresponding css file,
//  3. dynamic navigation
// props
// import { SidebarProps } from 'props';

function Sidebar() {
  return(
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
            <Link to="/app/add-template/" className="nav-link">
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
  );
}

// const { props, defaultProps } = SidebarProps;
// Sidebar.propTypes = props;
// Sidebar.defaultProps = defaultProps;

export default memo(Sidebar);
