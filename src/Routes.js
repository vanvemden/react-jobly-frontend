import React from "react";
import { Route, Switch } from "react-router-dom"
import PrivateRoute from "./PrivateRoute";
import CompaniesList from "./CompaniesList";
import CompanyDetail from "./CompanyDetail";
import JobsList from "./JobsList";
import Auth from "./Auth";
import UserProfile from "./UserProfile";
import Homepage from "./Homepage"


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