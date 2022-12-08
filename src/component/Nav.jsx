import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink } from "react-router-dom";

const Nav=()=>{
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top " style={{ "fontFamily": "Carter One,cursive", "fontSize": "1.2rem", "width": "100%", "fontWeight": "bolder","background":" linear-gradient(darkblue 90%,red ,yellow )"}}>
  <div className="container-fluid">
    <a classNames="navbar-brand  " href="/" style={{"textDecoration":"none","color":"yellow"}}>Portfolio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 " style={{"marginLeft":"2rem"}}>
        <li className="nav-item">
          <NavLink className="nav-link active text-white" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="/AboutMe">AboutMe</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="/Projects">Projects</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="/Contact">Contact Me</NavLink>
        </li>
        </ul>
       
    </div>
  </div>
</nav>
        </> 
    )
};

export default Nav;