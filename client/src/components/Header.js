import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <h1 className="logo-header">Regyster</h1>
      <nav className="main-nav">
        <ul className="menus">
          <li>
            <Link to="/">Check-in</Link>
          </li>
          <li>
            <Link to="/present">Present (#)</Link>
          </li>
          <li>
            <Link to="/members">Members</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
