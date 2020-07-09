import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav";
import UserAuthContext from "./UserAuthContext";

function NavBar() {
  const { isLoggedIn, userLogout } = useContext(UserAuthContext);

  return (
    <div className="NavBar mb-4">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand><NavLink exact to="/">Jobly</NavLink></Navbar.Brand>
        {isLoggedIn() ?
          <Nav className="mr-auto">
            <ul className="navbar-nav">
              <li className="nav-item"><NavLink className="nav-link" exact to="/">Home</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" exact to="/companies">Companies</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" exact to="/jobs">Jobs</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" exact to="/profile">Profile</NavLink></li>
              <li className="nav-item"><Link className="nav-link" to="/" onClick={userLogout}>Logout</Link></li>
            </ul>
          </Nav>
          :
          <Nav className="mr-auto">
            <ul className="navbar-nav">
              <li className="nav-item"><NavLink className="nav-link" exact to="/login">Login/Sign up</NavLink></li>
            </ul>
          </Nav>
        }
      </Navbar>
    </div>
  );
}

export default NavBar;