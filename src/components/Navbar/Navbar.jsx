import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <ul class="nav">

        <li class="logo">
            <Link to="/" >Portfolio</Link></li>

        <div class="name">Mary Delos Reyes</div>
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
