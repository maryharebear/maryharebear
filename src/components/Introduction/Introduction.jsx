import React from "react";
import "./Introduction.css";

import ART from "../../assests/test-3d.png";

function Introduction() {
  return (
    <section className="Landing">
      <div className="Introduction">
        <h1>
          🌵 Hi! I'm Mary (she/her), a second-year Computer Science and
          Engineering student. I am also an aspring Web Designer passionate
          about UI/UX design.{" "}
        </h1>
        <div className="Art">
          <img src={ART} alt="3D ART" />
        </div>
      </div>
      <a href="#" className="scroll-down">
        <div class="scroll">
          <span class="scroll-dot"></span>
        </div>
        <div class="arrow-down"></div>
      </a>
    </section>
  );
}

export default Introduction;
