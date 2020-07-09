import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserAuthContext from "../common/UserAuthContext";
import Alert from "react-bootstrap/Alert";

const INITIAL_STATE = { username: "", password: "" };

function LoginForm() {

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [formErrors, setFormErrors] = useState([]);
  const { userAuth } = useContext(UserAuthContext);
  const history = useHistory();

  const handleSubmit = async evt => {
    evt.preventDefault();
    let data = {
      action: "login",
      inputs: formData
    }
    const result = await userAuth(data);
    console.log(result);
    if (result.success) {
      setFormData(INITIAL_STATE);
      history.push("/jobs");
    } else {
      setFormErrors(result.errors);
      console.log(result);
    }
  }

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({ ...fData, [name]: value }));
  }

  return (
    <div className="LoginForm card">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text"
              name="username"
              className="form-control"
              value={formData.username}
              onChange={handleChange}
              id="username" />
          </div>
          <div className="form-group">
            <label htmlFor="username">Password</label>
            <input type="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              id="password" />
          </div>

          {formErrors.length
            ? <Alert variant="danger"><ul>{formErrors.map(msg => <li>{msg}</li>)}</ul></Alert>
            : null}

          <button type="submit" className="btn btn-primary float-right">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm;