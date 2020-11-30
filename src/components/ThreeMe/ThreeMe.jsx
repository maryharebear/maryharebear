import React from "react";
import { Link } from "react-router-dom";

import AboutMe from "../../assests/about-me.jpg";
import Designs from "../../assests/designs1.jpg";
import Work from "../../assests/work.jpg";

import "./ThreeMe.css";

// import Logo from "../../assests/logo.jpg";
// import Signature from "../../assests/signature.jpg";

function ThreeMe() {
  return (
    <main className="ThreeBoxes wrapper">
      <section className="slider">
        <Link to="/aboutme" className="images">
            <div className="image">
              <img src={AboutMe} />
            </div>
        </Link>
        <Link to="/aboutme" className="images">
            <div className="image">
              <img src={Designs} />
            </div>
        </Link>
        <Link to="/aboutme" className="images">
            <div className="image">
              <img src={Work} />
            </div>
        </Link>
      </section>
    </main>
  );
}

export default ThreeMe;
