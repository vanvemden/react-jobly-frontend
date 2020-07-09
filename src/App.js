import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import JoblyApi from "./JoblyApi";
import Routes from "./Routes";
import NavBar from "./NavBar";
import UserAuthContext from "./UserAuthContext";
import { decode } from 'jsonwebtoken';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [_token, setToken] = useState(localStorage.getItem("token"));
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(function loadUserProfile() {

    async function fetchCurrentUser() {
      if (_token) {
        try {
          const { username } = decode(_token);
          let res = await JoblyApi.getUser(username);
          console.log(res);
          setCurrentUser(res);
        } catch (errors) {
          console.log(errors);
        }
      }
    }
    fetchCurrentUser()
  }, [_token]);

  const userAuth = async data => {
    try {
      const res = await JoblyApi.userAuth(data);
      localStorage.setItem("token", res.token);
      setToken(res.token);
      return { success: true }
    } catch (errors) {
      setToken(false);
      return { success: false, errors };
    }
  }

  const userLogout = () => {
    localStorage.removeItem("token");
    setToken(false);
  }

  function isLoggedIn() {
    return !!_token;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserAuthContext.Provider value={{ currentUser, userAuth, userLogout, isLoggedIn }}>
          <NavBar />
          <div className="col-md-8 offset-md-2">
            <Routes />
          </div>
        </UserAuthContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
