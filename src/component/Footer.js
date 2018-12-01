import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Footer = props => {
  return (
    <section id="footer">
      <div className="container">
        <div className="wrapper pad-top-2">
          <div className="each-footer-content language">
            <h1 className="each-footer-content__title">
              <FontAwesomeIcon icon={faArrowRight} />
              English
            </h1>
          </div>
          <div className="each-footer-content about">
            <h1 className="each-footer-content__title">English</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
