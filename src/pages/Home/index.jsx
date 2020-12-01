import React from "react";
import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";
import ThreeMe from "../../components/ThreeMe/ThreeMe";
import Introduction from "../../components/Introduction/Introduction";

function Home() {
  return (
    <div className="Home">
        <Navbar />
        <Introduction />
        <ThreeMe />
    </div>
  );
}

export default Home;
