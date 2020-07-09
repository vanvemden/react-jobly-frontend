import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import UserAuthContext from "../common/UserAuthContext";

const INITIAL_STATE = {
  username: "",
  password: "",
  first_name: "",
  last_name: "",
  email: ""
};

function SignupForm() {

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [formErrors, setFormErrors] = useState([]);
  const history = useHistory();

  const { userAuth } = useContext(UserAuthContext);

  const handleSubmit = async evt => {
    evt.preventDefault();
    let data = {
      action: "signup",
      inputs: formData
    }
    const result = await userAuth(data);
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
    <div className="SignupForm card">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" className="form-control" value={formData.username} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" className="form-control" value={formData.password} onChange={handleChange} />
          </div>
          <div>
            <div className="form-group">
              <label htmlFor="first_name">First name</label>
              <input type="text" id="first_name" name="first_name" className="form-control" value={formData.first_name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="last_name">Last name</label>
              <input type="text" id="last_name" name="last_name" className="form-control" value={formData.last_name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleChange} />
            </div>
          </div>

          {formErrors.length
            ? <Alert variant="danger"><ul>{formErrors.map(msg => <li>{msg}</li>)}</ul></Alert>
            : null}

          <button type="submit" className="btn btn-primary float-right">Submit</button>
        </form>
      </div>
    </div>)
}

export default SignupForm;