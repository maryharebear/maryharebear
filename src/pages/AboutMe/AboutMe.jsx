import React from "react";
import "./AboutMe.css";

import Navbar from "../../components/Navbar/Navbar";

import Selfie from "../../assests/selfie-me.png";

function AboutMe() {
  return (
      <>
      <Navbar />
    <main className="AboutMe">
    <section className="Mary">
    <div className="Selfie">
          <img src={Selfie} alt="3D ART" />
        </div>
        <h1>
          👋🏼 Nice to meet you! <br></br> <br></br>
          My name is Mary Francine Delos Reyes. I was born in the Philippines 
          and half-raised in California. I am currently majoring in Computer Science
          and Engineering at University of California, Merced. I am pursuing 
          UI/UX design and currently looking for internships to practice and learn
          more skills in design-related work with tech.
          <br></br> <br></br>
          I am also currently a frontend lead for a hackathon organization at UC Merced,
          called HackMerced. Also, a Design SIG lead for ACM (Association for Computing Machinery)
          where I share resources, host workshops, and help students to explore their creative
          side. I love attending designathons and hosted one with my HackMerced organization named 
          DesignMerced.
          <br></br> <br></br>
          Besides design, I have passion for dancing, gaming, traveling, and creating stuff.
          So let's collaborate and talk more about design and Harry Styles! ♡
        </h1>
       
      </section>
      
    </main>
    </>
  );
}

export default AboutMe;