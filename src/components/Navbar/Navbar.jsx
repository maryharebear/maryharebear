import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";

import Logo from "../../assests/logo.jpg";
import Signature from "../../assests/signature.jpg";

function Navbar() {
  return (
    <nav className="Navbar">
      <ul class="nav">

        <li class="logo">
          <img className="logo" src={Logo}></img>
            <Link to="/" ></Link></li>

        <img className="signature" src={Signature}></img>
        {/* <li tabindex="0">
          <i data-feather="home">About Me</i>
        </li>
        <li tabindex="0">
          <i data-feather="users">Design</i>
        </li>
        <li tabindex="0">
          <i data-feather="list">Work</i>
        </li> */}
        <li tabindex="0">
          <i data-feather="list">Contact</i>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
