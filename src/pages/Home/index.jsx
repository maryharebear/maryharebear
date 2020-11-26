import React from "react";
import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";
import ThreeMe from "../../components/ThreeMe/ThreeMe";

function Home() {
  return (
    <div className="Home">
        <Navbar />
        <ThreeMe />
    </div>
  );
}

export default Home;
