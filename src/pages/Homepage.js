import React, { useContext } from "react";
import UserAuthContext from "../common/UserAuthContext";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Homepage() {

  const { isLoggedIn } = useContext(UserAuthContext);

  return (
    <div className="Homepage">
      <div className="container text-center">
        <h1>Jobly</h1>
        <h5>All the jobs in one, convenient place.</h5>
        {isLoggedIn() ?
          <h3>Welcome Back!</h3>
          :
          <Button variant="primary" as={Link} to="/login">Log in</Button>
        }
      </div>
    </div >
  );
}

export default Homepage;