import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import JoblyApi from "./common/JoblyApi";
import Routes from "./routes/Routes"
import NavBar from "./common/NavBar";
import UserAuthContext from "./common/UserAuthContext";
import { decode } from 'jsonwebtoken';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [_token, setToken] = useState(localStorage.getItem("token"));
  const [currentUser, setCurrentUser] = useState();
  const [infoLoaded, setInfoLoaded] = useState(false);

  useEffect(function loadUserProfile() {

    async function fetchCurrentUser() {
      if (_token) {
        try {
          const { username } = decode(_token);
          let res = await JoblyApi.getUser(username);
          setCurrentUser(res);
        } catch (errors) {
          console.log(errors);
        }
      }
      setInfoLoaded(true);
    }
    fetchCurrentUser()
  }, [_token, setCurrentUser]);

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

  const updateUserProfile = async (username, data) => {
    try {
      await JoblyApi.userProfileUpdate(username, data);
      const updatedUser = await JoblyApi.getUser(username);
      setCurrentUser(updatedUser);
      return { success: true, messages: ["Profile has been updated"] }
    } catch (errors) {
      return { success: false, messages: errors };
    }
  }

  const updateUserJobs = async id => {
    try {
      await JoblyApi.userJobApplication(id);
      const updatedUser = await JoblyApi.getUser(currentUser.username);
      setCurrentUser(updatedUser);
    } catch (errors) {
      console.log(errors);
    }
  }

  const userLogout = () => {
    localStorage.removeItem("token");
    setToken(false);
  }

  function isLoggedIn() {
    return !!_token;
  }

  if (!infoLoaded) { return "Loading...." }

  return (
    <div className="App">
      <BrowserRouter>
        <UserAuthContext.Provider value={{ currentUser, userAuth, userLogout, updateUserProfile, updateUserJobs, isLoggedIn }}>
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
