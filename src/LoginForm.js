import React, { useState } from "react";

function LoginForm({ userLogin }) {

  const [formData, setFormData] = useState({})
  const handleSubmit = evt => {
    evt.preventDefault();
    userLogin(formData);
    setFormData({});
  }

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({ ...fData, [name]: value }));
  }

  return (
    <div className="LoginForm card">
      <div className="card-body">
        <form>
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
          <button type="submit" className="btn btn-primary float-right">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm;