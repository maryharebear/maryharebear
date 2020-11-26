import React from "react";
import "./ThreeMe.css";
import { Link } from "react-router-dom";

import AboutMe from "../../assests/about-me.jpg";
import Designs from "../../assests/designs.jpg";
import Work from "../../assests/work.jpg";

// import Logo from "../../assests/logo.jpg";
// import Signature from "../../assests/signature.jpg";

function ThreeMe() {
  return (
    <main className="ThreeBoxes wrapper">
      <section class="slider">
        <div class="images">
          <div class="image">
            {" "}
            <img
              src={AboutMe}
              
            />
          </div>{" "}
        </div>
        <div class="images">
          <div class="image">
            {" "}
            <img
              src={Designs}
              
            />
          </div>{" "}
        </div>
        <div class="images">
          <div class="image">
            {" "}
            <img
              src={Work}
              
            />
          </div>{" "}
        </div>
      </section>
    </main>
  );
}

export default ThreeMe;
