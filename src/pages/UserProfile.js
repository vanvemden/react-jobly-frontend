import React, { useContext, useState } from "react";
import Alert from "react-bootstrap/Alert";
import UserAuthContext from "../common/UserAuthContext";

function UserProfile() {
  const { currentUser, updateUserProfile } = useContext(UserAuthContext);
  const [formErrors, setFormErrors] = useState([]);

  const [formData, setFormData] = useState({
    first_name: currentUser.first_name,
    last_name: currentUser.last_name,
    email: currentUser.email,
    photo_url: currentUser.photo_url || "",
    password: ""
  });

  const handleSubmit = async evt => {
    evt.preventDefault();
    const result = await updateUserProfile(currentUser.username, formData);
    if (result.success) {
      setFormData(fData => ({ ...fData, password: "" }));
    } else {
      setFormErrors(result.errors);
    }
  }

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({ ...fData, [name]: value }));
  }

  return (
    <div className="UserProfile">
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <p>{currentUser.username}</p>
        <label htmlFor="first_name">First Name</label>
        <input type="text"
          name="first_name"
          id="first_name"
          onChange={handleChange}
          value={formData.first_name}></input>
        <label htmlFor="last_name">Last Name</label>
        <input type="text"
          name="last_name"
          id="last_name"
          onChange={handleChange}
          value={formData.last_name}></input>
        <label htmlFor="email">Email</label>
        <input type="text"
          name="email"
          id="email"
          onChange={handleChange}
          value={formData.email}></input>
        <label htmlFor="photo_url">Photo URL</label>
        <input type="text"
          name="photo_url"
          id="photo_url"
          onChange={handleChange}
          value={formData.photo_url}></input>
        <label htmlFor="password">Re-enter Password</label>
        <input type="password"
          name="password"
          id="password"
          onChange={handleChange}
          value={formData.password}></input>

        {formErrors.length
          ? <Alert variant="danger"><ul>{formErrors.map(msg => <li>{msg}</li>)}</ul></Alert>
          : null}

        <button>Save Changes</button>
      </form>
    </div>
  );
}

export default UserProfile;