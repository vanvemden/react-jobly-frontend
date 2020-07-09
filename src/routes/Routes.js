import React from "react";
import { Route, Switch } from "react-router-dom"
import PrivateRoute from "./PrivateRoute";
import CompaniesList from "../pages/CompaniesList";
import CompanyDetail from "../pages/CompanyDetail";
import JobsList from "../pages/JobsList";
import Auth from "../common/Auth";
import UserProfile from "../pages/UserProfile";
import Homepage from "../pages/Homepage"


function Routes() {

  return (
    <div className="Routes">
      <Switch>
        <Route exact path="/login">
          <Auth />
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
        <PrivateRoute exact path="/companies">
          <CompaniesList />
        </PrivateRoute>
        <PrivateRoute exact path="/companies/:handle">
          <CompanyDetail />
        </PrivateRoute>
        <PrivateRoute exact path="/jobs">
          <JobsList />
        </PrivateRoute>
        <PrivateRoute exact path="/profile">
          <UserProfile />
        </PrivateRoute>
      </Switch>
    </div>
  )
}

export default Routes;