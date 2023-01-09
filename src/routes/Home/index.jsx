// import logo from './logo.svg';
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const MainPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>Home Screen</p>
        <div>
          <Link to={{ pathname: "/solfi-web/about" }}>NavigateNow</Link>
        </div>
      </header>
    </div>
  );
};

export default MainPage;
