import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="Footer">
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
        {/* <!-- Footer navigation --> */}
     
          <div class="navigation">
          <a href="https://www.instagram.com/createdmary/"><i className="far fa-envelope"></i></a>
          <a href="https://www.instagram.com/createdmary/"><i className="fab fa-instagram"></i></a>
      <a href="https://www.linkedin.com/in/maryfrancine/"><i className="fab fa-linkedin"></i></a>
      <a href="https://github.com/maryharebear"><i className="fab fa-github"></i></a>
      <a href="https://www.behance.net/createdmary"><i className="fab fa-behance"></i></a>
      <a href="https://drive.google.com/file/d/1LZnrE_CY1I5WKGzWemD_csFLziJxYNaH/view?usp=sharing"><i class="far fa-file-user"></i></a>
          </div>
          <br></br>
          
      <div className="love">Made with ♡ by Mary Delos Reyes</div>
      </footer>
    </>
  );
}

export default Footer;
