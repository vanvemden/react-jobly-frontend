import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
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
        <Route exact path="/companies">
          <CompaniesList />
        </Route>
        <Route exact path="/companies/:handle">
          <CompanyDetail />
        </Route>
        <Route exact path="/jobs">
          <JobsList />
        </Route>
        <Route exact path="/login">
          <Auth />
        </Route>
        <Route exact path="/profile">
          <UserProfile />
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  )
}

export default Routes;