import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1 className="logo-header">Regyster</h1>
        </Link>
        <nav className="main-nav">
          <ul className="menu">
            <li>
              <Link to="/">Check-in</Link>
            </li>
            <li>
              <Link to="/present">Present ({props.presentCount})</Link>
            </li>
            <li>
              <Link to="/members">Members</Link>
            </li>
            <li>
              <Link to="/login">Logout</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
