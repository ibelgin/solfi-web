import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from "./Home/";
import About from "./About/";

const App = () => {
  return (
    <>
        <Routes>
          <Route path='/solfi-web' element={<Home/>} />
          <Route path='/solfi-web/about' element={<About />} />
        </Routes>
    </>
  );
}

export default App;
