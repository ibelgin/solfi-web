// import logo from './logo.svg';
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const MainPage = () => {
  return (
    <div className="App">
      <Link to={{ pathname: "/solfi-web/about" }}>NavigateNow</Link>
    </div>
  );
};

export default MainPage;
