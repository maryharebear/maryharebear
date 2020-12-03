import React from "react";
import "./Work.css";

import Navbar from "../../components/Navbar/Navbar";
// import Footer from "../../components/Footer/Footer";

// import Selfie from "../../assests/selfie-me.png";

function Work() {
  return (
    <>
      <Navbar />
      <main className="Work">
        <section className="Resume">
          <div class="resume">
            <div class="top">
              <div class="decoration"></div>
              <div class="decoration"></div>
              <div class="myPhoto"></div>
              <div class="nameCircle"></div>
              <div class="myName">
                <h1>Mary Delos Reyes</h1>
                <h2>Second-Year CSE Undergraduate </h2>
              </div>
            </div>
            <div class="content">
              <div class="left">
                <h3>Summary</h3>
                <p>
                  I am currently learning UI/UX design and more skills to
                  improve my frontend-work experience. I am pursuing to be in
                  design-tech related field
                </p>
                <div class="buttons">
                  <a
                    class="btn fill"
                    href="https://www.behance.net/createdmary"
                    target="_blank"
                  >
                    Behance
                  </a>
                  <a
                    class="btn"
                    href="https://www.linkedin.com/in/maryfrancine/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </div>
                <div class="block">
                  <h4>Passion</h4>
                  <ul class="listPassion">
                    <li>
                      <div class="circle circle-image1"></div>
                      Dance
                    </li>
                    <li>
                      <div class="circle circle-image2"></div>
                      Calligraphy
                    </li>
                    <li>
                      <div class="circle circle-image3"></div>
                      Painting and Art
                    </li>
                    <li>
                      <div class="circle circle-image4"></div>
                      Travel
                    </li>
                  </ul>
                </div>
              </div>
              <div class="right">
                <div class="block">
                  <h4>Skills</h4>
                  <ul class="listSkill">
                    <li>
                      <h5>Graphic Design</h5>
                    </li>
                    <ul>
                      <li>
                        <div class="skillLevel">
                          {/* <!-- <div class="littleCircle">AI</div> --> */}
                          AI
                        </div>
                      </li>
                      <li>
                        <div class="skillLevel">
                          {/* <!-- div class="littleCircle">PS</div> --> */}
                          PS
                          <div class="level1"></div>
                        </div>
                      </li>
                    </ul>
                    <li>
                      <h5>Motion Picture</h5>
                    </li>
                    <ul>
                      <li>
                        <div class="skillLevel">
                          AE
                          <div class="level2"></div>
                          <div class="level1"></div>
                        </div>
                      </li>
                    </ul>
                    <li>
                      <h5>Front-End</h5>
                    </li>
                    <ul>
                      <li>
                        <div class="skillLevel">
                          HTML
                          <div class="level1"></div>
                        </div>
                      </li>
                      <li>
                        <div class="skillLevel">
                          CSS
                          <div class="level1"></div>
                        </div>
                      </li>
                      <li>
                        <div class="skillLevel">
                          JS
                          <div class="level2"></div>
                          <div class="level1"></div>
                        </div>
                      </li>
                      <li>
                        <div class="skillLevel">
                          {/* <!-- <div class="littleCircle">AI</div> --> */}
                          React.js
                        </div>
                      </li>
                    </ul>
                  </ul>
                  <h4>Award</h4>
                  <ul class="listAward">
                    <li>
                     2020 CITRIS and the Banatao Institute - 1st Place Award in Tech for Social Good
                    </li>
                    <li>
                      2020 HackMerced Leadership 2020 - Program of the Year Award 
                    </li>
                    <li>
                      2020 HackMerced Leadership 2020 - Organization of the Year Award
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="footer">
              <h4>Experience</h4>
              <div class="footerCircle"></div>
              <div class="time">
                <div class="decorationLine">March - May 2020</div>
                <div class="decorationCircle"></div>
                <div class="decorationLine">June - June 2020</div>
                <div class="decorationCircle"></div>
                <div class="decorationLine">September - November 2020</div>
                <div class="decorationCircle"></div>
              </div>
              {/* <!--       <div class="footerCircle circle1"></div>
      <div class="footerCircle circle2"></div> --> */}
              <ul class="listExperience">
                <li class="year">
                  <h5>PhinesChen</h5>
                  <h6>UI/UX Design & Frontend</h6>
                  <ul>
                    <li>CITRIS and the Banatao Institute</li>
                    <li>
                      Collaborated with two UC Merced students and our group was
                      called PhinesTech, where we used React.js, Node.js,
                      Express, MongoDB and Tailwind.
                    </li>
                    <li>
                      Built an admin panel to allow Merced County Food Bank to
                      easily and efficiently catalog and manage imports and
                      exports of goods
                    </li>
                  </ul>
                </li>
                <li class="year">
                  <h5>Inspirely </h5>
                  <h6>UI/UX Designer</h6>
                  <ul>
                    <li>
                      CreateSC, Virtual Designathon at USC with two UC Merced students.
                    </li>
                    <li>
                      Inspirely is a project based on building a prototype
                      mobile application using Adobe XD
                    </li>
                    <li>
                      Aimed to increase our target audience and use UX research
                      to solve a prompt solution.
                    </li>
                  </ul>
                </li>
                <li class="year">
                  <h5>DesignMerced</h5>
                  <h6>Frontend Lead</h6>
                  <ul>
                    <li>
                    Managed a front-end team to work with a dedicated design team in prototyping components for the DesignMerced site.
                    </li>
                    <li>
                    Used Figma to prototype and design the layout page for the event and used React.js to implement the design on the website
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// Credits To Codepen:
// Cuber Yang
// https://codepen.io/Cuber_Yang/pens/

export default Work;
