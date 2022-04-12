import React from "react";
import { Link } from "react-scroll/modules";
import "../css/MainNav.css";

function MainNav() {
  return (
    <nav className="main_nav">
      <Link to="HOME" spy="true" smooth={true}>
        <span>&lt; HYEMI JANG /&gt;</span>
      </Link>
      <Link to="PROJECT" spy="true" smooth={true} offset={-100}>
        <span>PROJECT</span>
      </Link>
      <Link to="ABOUT" spy="true" smooth={true} offset={-100}>
        <span>ABOUT</span>
      </Link>
      <Link to="CONTACT" spy="true" smooth={true}>
        <span>CONTACT</span>
      </Link>
    </nav>
  );
}

export default MainNav;
