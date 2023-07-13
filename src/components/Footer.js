import React from "react";

function Footer() {
  return (
    <footer className="container-fluid" id="footer">
      <div className="row contactF">
        <div className="row mr-auto ml-auto ">
          <a
            href=""
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-globe-asia social fa-2x"></i>
          </a>

          <a
            href=""
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f fa-2x"></i>
          </a>

          <a
            href=""
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in fa-2x"></i>
          </a>

          <a href="" className="social-icon">
            <i className="fa fa-envelope fa-2x" target="_blank"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
