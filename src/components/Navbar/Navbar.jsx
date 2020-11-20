import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="Navbar">
      <ul class="nav">
        <li class="logo">Portfolio</li>
        <li tabindex="0">
          <i data-feather="home">About Me</i>
        </li>
        <li tabindex="0">
          <i data-feather="users">Design</i>
        </li>
        <li tabindex="0">
          <i data-feather="list">Work</i>
        </li>
        <li tabindex="0">
          <i data-feather="list">Contact</i>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
