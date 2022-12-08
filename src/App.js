import React from "react";

import About from "./component/About";
import Project from "./component/Project";
import ContectMe from "./component/ContectMe";
import AllPages from "./component/AllPages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<AllPages />} />
          <Route exact path="/AboutMe" element={<About />} />
          <Route exact path="/Contact" element={<ContectMe />} />
          <Route exact path="/Projects" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;