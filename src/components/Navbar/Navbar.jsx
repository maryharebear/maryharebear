import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import Logo from "../../assests/logo.jpg";
import Signature from "../../assests/signature.jpg";

function Navbar() {
  return (
    <nav className="Navbar">
      <ul className="nav">
        <li className="logo">
          <Link to="/">
            <img className="logo" src={Logo} alt="Logo" />
          </Link>
        </li>
        <img className="signature" src={Signature} alt="Signature" />
        {/* <li tabIndex="0">
          <i data-feather="home">About Me</i>
        </li>
        <li tabIndex="0">
          <i data-feather="users">Design</i>
        </li>
        <li tabIndex="0">
          <i data-feather="list">Work</i>
        </li> */}
        <li tabIndex="0">
          <Link to="/contact">
            <i data-feather="list">Contact </i>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
