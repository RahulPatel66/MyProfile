import React from "react";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import ContectMe from "./ContectMe";
import Nav from "./Nav";

const AllPages=()=>{
    return(
        <>
          <Nav />
      <Home />
      <About style={{ "width": "100%", "background": "darkslategray" }} />
      <Project />
      <ContectMe />
        </>
    )
}

export default AllPages;