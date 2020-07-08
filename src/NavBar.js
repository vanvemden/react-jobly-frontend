import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  return (
    <div className="NavBar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/companies" className="nav-link">Companies</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/jobs" className="nav-link">Jobs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/profile" className="nav-link">Profile</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;