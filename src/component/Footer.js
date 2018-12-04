import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRss, faCopyright } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import AppStore from "../assets/img/AppStore.png";
import PlayStore from "../assets/img/GooglePlay.png";

import {
  LanguageIcon,
  MapIcon,
  EnvelopeIcon,
  TelephoneIcon
} from "../component/svgIcon";

const Footer = props => {
  return (
    <section id="footer">
      <div className="container">
        <div className="wrapper pad-top-4">
          <div className="each-row">
            <div className="each-content lang horizontal">
              <LanguageIcon className="icon" />
              <div className="info-container">
                <h1 className="title">English</h1>
              </div>
            </div>
            <div className="each-content horizontal">
              <MapIcon className="icon" />
              <div className="info-container">
                <h1 className="title">Speedrent</h1>
                <ul className="list">
                  <li className="item">
                    <p className="info">1-4, Jalan PJU 1A/41B,</p>
                  </li>
                  <li className="item">
                    <p className="info">Pusat Dagangan NZX,</p>
                  </li>
                  <li className="item">
                    <p className="info">47301 Petaling Jaya,</p>
                  </li>
                  <li className="item">
                    <p className="info">Selangor, Malaysia.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="each-content horizontal">
              <TelephoneIcon className="icon" />
              <div className="info-container">
                <h1 className="sub-title">+6018 7777 650</h1>
              </div>
            </div>
            <div className="each-content horizontal">
              <EnvelopeIcon className="icon" />
              <div className="info-container">
                <h1 className="sub-title">hello@speedrent.com</h1>
              </div>
            </div>
          </div>
          <div className="each-row">
            <div className="each-content">
              <h1 className="title">Company</h1>
              <div className="company-info">
                <a href="/" className="link">
                  About Us
                </a>
                <a href="#" className="link">
                  Landlord FAQ
                </a>
              </div>
              <div className="company-info">
                <a href="#" className="link">
                  Career
                </a>
                <a href="#" className="link">
                  Tenant FAQ
                </a>
              </div>
              <div className="company-info">
                <a href="#" className="link">
                  Contact Us
                </a>
                <a href="#" className="link">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
          <div className="each-row">
            <div className="each-content">
              <h1 className="title">Hot Areas</h1>
              <div className="company-info">
                <a href="#" className="link">
                  Cyberjaya
                </a>
                <a href="#" className="link">
                  Ampang
                </a>
              </div>
              <div className="company-info">
                <a href="#" className="link">
                  Petaling Jaya
                </a>
                <a href="#" className="link">
                  Puchong
                </a>
              </div>
              <div className="company-info">
                <a href="#" className="link">
                  Shah Alam
                </a>
                <a href="#" className="link">
                  Subang Jaya
                </a>
              </div>
            </div>
          </div>
          <div className="each-row">
            <div className="each-content">
              <h1 className="title">
                Subscribe to get
                <br />
                exclusive insights!
              </h1>
              <div className="subscription ">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="sub-email"
                />
                <FontAwesomeIcon icon={faRss} className="sub-icon" />
              </div>
            </div>
            <div className="each-content">
              <h1 className="title">Download the App here!</h1>
              <div className="company-info">
                <a href="#" className="link">
                  <img src={AppStore} alt="" />
                </a>
                <a href="#" className="link">
                  <img src={PlayStore} alt="" />
                </a>
              </div>
              <div className="each-content">
                <div className="social-info">
                  <a href="#" className="link">
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className="social-icon fb"
                    />
                  </a>
                  <a href="#" className="link">
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className="social-icon linkedin"
                    />
                  </a>
                  <a href="#" className="link">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="social-icon insta"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <span className="company">
              <FontAwesomeIcon icon={faCopyright} className="copyright-icon" />
              2018 Speedrent
            </span>
            <span className="info">
              All images are the property of their respective owner |
              <a href="#"> Privacy Policy</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
