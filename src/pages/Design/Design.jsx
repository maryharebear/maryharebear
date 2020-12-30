import React from "react";
import "./Design.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import Inspirely from "../../assests/inspirely.png";
import FoodBank from "../../assests/tsg-title.png";
import SlideButton from "../../assests/slidebutton.png";
import DesignMerced from "../../assests/designmerced.png";
import Dashboard from "../../assests/dashboard.jpg";


function Design() {
  return (
    <>
      <Navbar />
      <main className="Design">
            <div class="container">
              <div class="rotator">
                <div class="items">
                  <img
                    src={Inspirely}
                    alt="Inspirely"
                  />
                </div>
                <div class="items">
                  <img
                    src={FoodBank}
                    alt="Slide Button"
                  />
                </div>
                <div class="items">
                  <img
                    src={SlideButton}
                    alt="items photo"
                  />
                </div>
                <div class="items">
                  <img
                    src={DesignMerced}
                    alt="items photo"
                  />
                </div>
                <div class="items">
                  <img
                    src={Dashboard}
                    alt="items photo"
                  />
                </div>
                <div class="items">
                  <img
                    src="https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__340.jpg"
                    alt="items photo"
                  />
                </div>
                <div class="items">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__340.jpg"
                    alt="items photo"
                  />
                </div>
                <div class="items">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539__340.jpg"
                    alt="items photo"
                  />
                </div>
                <div class="items">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636__340.jpg"
                    alt="items photo"
                  />
                </div>
              </div>
            </div>
      </main>
      <Footer />
    </>
  );
}

export default Design;
