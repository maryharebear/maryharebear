import React from "react";

import "./Contact.css";

import Navbar from "../../components/Navbar/Navbar";


function Contact() {
  return (
      <>
      <Navbar />
    <main className="Contact">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
<div className="contact-container">
  <div className="contact-left">
    <h2>Get In Touch</h2>
    <form className="contact-form">
      <div className="single-row">
        <input type="text" placeholder="First Name" class="form-in mr"/>
        <input type="text" placeholder="Last Name" class="form-in ml"/>
      </div>
      <div className="multiple-row">
        <input type="email" placeholder="Email" className="form-in"/>
        <textarea placeholder="Your Message" className="form-in"></textarea>
        <input type="submit" id="submit"/><label for="submit"><i className="fas fa-paper-plane"></i></label>
      </div>

    </form>
  </div>
  <div className="contact-right">
    <h2>Contact Information</h2>
    <div className="contact-info">
      <p><i className="fas fa-user-alt"></i>Mary Francine Delos Reyes </p>
      <p><i className="fas fa-envelope"></i>francinecabrera07@gmail.com </p>
      <p><i className="fas fa-map-marker-alt"></i> Merced, CA</p>
    </div>

    <div className="social-links">
   
      <a href="https://www.instagram.com/createdmary/"><i className="fab fa-instagram"></i></a>
      <a href="https://www.linkedin.com/in/maryfrancine/"><i className="fab fa-linkedin"></i></a>
      <a href="https://github.com/maryharebear"><i className="fab fa-github"></i></a>
      <a href="https://www.behance.net/createdmary"><i className="fab fa-behance"></i></a>
      <a href="https://drive.google.com/file/d/1LZnrE_CY1I5WKGzWemD_csFLziJxYNaH/view?usp=sharing"><i class="far fa-file-user"></i></a>
    </div>
  </div>
</div>

{/* Credits to:
CodePen 
Neumorphism Contact Form Design
Bipul Lamsal 
https://codepen.io/Bipul_np/pen/PoNyZRG */}

    </main>
    </>
  );
}

export default Contact;