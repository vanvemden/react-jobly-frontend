import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import NavBar from "./NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="col-md-8 offset-md-2">
          <Routes />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
