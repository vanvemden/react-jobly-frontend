import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserAuthContext from "./UserAuthContext";

function PrivateRoute({ exact, path, children }) {

  const { currentUser } = useContext(UserAuthContext);

  console.log(
    "PrivateRoute",
    "exact=", exact,
    "path=", path,
    "currentUser=", currentUser,
  );

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  )
}

export default PrivateRoute;