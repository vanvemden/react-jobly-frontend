import React, { useState } from "react";
import LoginForm from "../pages/LoginForm";
import SignupForm from "../pages/SignupForm";


function Auth() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="Auth">
      <div className="d-flex justify-content-end">
        <div className="btn-group">
          <button className={`btn btn-primary ${showLogin && 'active'}`} onClick={() => setShowLogin(true)}>Login</button>
          <button className={`btn btn-primary ${showLogin || 'active'}`} onClick={() => setShowLogin(false)}>Sign up</button>
        </div>
      </div>
      {showLogin ? <LoginForm /> : <SignupForm />}
    </div>
  )
}

export default Auth;