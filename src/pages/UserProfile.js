import React, { useContext, useState } from "react";
import Alert from "react-bootstrap/Alert";
import UserAuthContext from "../common/UserAuthContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"

function UserProfile() {
  const { currentUser, updateUserProfile } = useContext(UserAuthContext);
  const [formMessages, setFormMessages] = useState({ messages: [] });

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
      setFormMessages(result);
    } else {
      setFormMessages(result);
    }
  }

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({ ...fData, [name]: value }));
  }

  return (
    <div className="UserProfile">
      <h1>Profile</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control plaintext readOnly defaultValue={currentUser.username}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="first_name">First Name</Form.Label>
          <Form.Control type="text"
            name="first_name"
            id="first_name"
            onChange={handleChange}
            value={formData.first_name}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="last_name">Last Name</Form.Label>
          <Form.Control type="text"
            name="last_name"
            id="last_name"
            onChange={handleChange}
            value={formData.last_name}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control type="text"
            name="email"
            id="email"
            onChange={handleChange}
            value={formData.email}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="photo_url">Photo URL</Form.Label>
          <Form.Control type="text"
            name="photo_url"
            id="photo_url"
            onChange={handleChange}
            value={formData.photo_url}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Re-enter Password</Form.Label>
          <Form.Control type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={formData.password}></Form.Control>
        </Form.Group>

        {formMessages.messages.length
          && <Alert variant={formMessages.success ? 'success' : 'danger'}>
            <ul>
              {formMessages.messages.map(msg => <li>{msg}</li>)}
            </ul>
          </Alert>
        }

        <Button variant="primary" type="submit">Save Changes</Button>
      </Form>
    </div>
  );
}

export default UserProfile;