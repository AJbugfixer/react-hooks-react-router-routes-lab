import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const styleMenu = {
  display: "inline-block",
  font: "Arial",
  margin:"0 5px 5px",
  padding: "10px",
  border: "solid white",    
  background: "IndianRed",
  textDecoration:"underline",
  color : "silver",
  fontsize: "20px",

  }

  return(
    <div className="navbar">
      <NavLink to="/" exact style={styleMenu}>
        Home
      </NavLink>
      <NavLink to="/movies" style={styleMenu}>
        Movies
      </NavLink>
      <NavLink to="/directors" style={styleMenu}>
        Directors
      </NavLink>
      <NavLink to="/actors" style={styleMenu}>
        Actors
      </NavLink>
    </div>
  )
}

export default NavBar;
