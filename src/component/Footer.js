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
  TelephoneIcon,
  RSSICON,
  COPYRIGHT_ICON
} from "../component/svgIcon";

const Footer = props => {
  return (
    <footer className="section-footer">
      <div className="container">
        <div className="wrapper">
          <div className="lang-change">
            <LanguageIcon className="lang-change__icon" />
            <span className="lang-change__selectcontainer">
              <select name="" id="" className="lang-change__selectbox">
                <option value="">English</option>
              </select>
            </span>
          </div>
          <div className="secction-about-speed">
            <div className="col-1-of-3">
              <div className="div-flex">
                <MapIcon className="lang-change__icon about-container__icon" />
                <div className="about-container">
                  <h2 className="footer-heading">Speedrent</h2>
                  <ul className="about-container__list">
                    <li className="about-container__item">
                      1-4, Jalan PJU 1A/41B,
                    </li>
                    <li className="about-container__item">
                      Pusat Dagangan NZX,
                    </li>
                    <li className="about-container__item">
                      47301 Petaling Jaya,
                    </li>
                    <li className="about-container__item">
                      Selangor, Malaysia.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="div-flex">
                <TelephoneIcon className="lang-change__icon about-container__icon" />
                <div className="about-container">
                  <span className="footer-heading-sub">+6018 7777 650</span>
                </div>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="div-flex">
                <EnvelopeIcon className="lang-change__icon about-container__icon" />
                <div className="about-container">
                  <span className="footer-heading-sub">
                    hello@speedrent.com
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="secction-about-speed">
            <h2 className="footer-heading">Company</h2>
            <div className="wrapper u-margin-top-big">
              <div className="col-1-of-4">
                <ul className="footer__list">
                  <li className="footer__list__item">
                    <a href="#" className="footer__list__link">
                      About Us
                    </a>
                  </li>
                  <li className="footer__list__item">
                    <a href="#" className="footer__list__link">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-1-of-4">
                <ul className="footer__list">
                  <li className="footer__list__item">
                    <a href="#" className="footer__list__link">
                      Landlord FAQ
                    </a>
                  </li>
                  <li className="footer__list__item">
                    <a href="#" className="footer__list__link">
                      Sitemap
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-2-of-4">
                <ul className="footer__list">
                  <li className="footer__list__item">
                    <a href="#" className="footer__list__link">
                      Career
                    </a>
                  </li>
                  <li className="footer__list__item">
                    <a href="#" className="footer__list__link">
                      Tenant FAQ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="secction-about-speed">
            <h2 className="footer-heading">Hot Areas</h2>
            <div className="wrapper u-margin-top-big">
              <div className="col-1-of-4">
                <ul className="footer__list">
                  <li className="footer__list__item">
                    <a href="#" className="footer__list__link">
                      Cyberjaya
                    </a>
                  </li>
                  <li className="footer__list__item">
                    <a href="#" className="footer__list__link">
                      Petaling Jaya
                    </a>
                  </li>
                  <li className="footer__list__item">
                    <a href="#" className="footer__list__link">
                      Shah Alam
                    </a>
                  </li>
                  <li className="footer__list__item">
                    <a href="#" className="footer__list__link">
                      Cheras
                    </a>
                  </li>
                  <li className="footer__list__item">
                    <a href="#" className="footer__list__link">
                      Sentul
                    </a>
                  </li>
                  <li className="footer__list__item">
                    <a href="#" className="footer__list__link">
                      Bangsar
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-1-of-4">
                <ul className="footer__list">
                  <li className="footer__list__item">
                    <a href="#" className="footer__list__link">
                      Ampang
                    </a>
                  </li>
                  <li className="footer__list__item">
                    <a href="#" className="footer__list__link">
                      Puchong
                    </a>
                  </li>
                  <li className="footer__list__item">
                    <a href="#" className="footer__list__link">
                      Subang Jaya
                    </a>
                  </li>
                  <li className="footer__list__item">
                    <a href="#" className="footer__list__link">
                      Kajang
                    </a>
                  </li>
                  <li className="footer__list__item">
                    <a href="#" className="footer__list__link">
                      Klang
                    </a>
                  </li>
                  <li className="footer__list__item">
                    <a href="#" className="footer__list__link">
                      Damansara
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-1-of-4">
                <ul className="footer__list">
                  <li className="footer__list__item">
                    <a href="#" className="footer__list__link">
                      Ara Damansara
                    </a>
                  </li>
                  <li className="footer__list__item">
                    <a href="#" className="footer__list__link">
                      Bandar Utama
                    </a>
                  </li>
                  <li className="footer__list__item">
                    <a href="#" className="footer__list__link">
                      Bukit Jalil
                    </a>
                  </li>
                  <li className="footer__list__item">
                    <a href="#" className="footer__list__link">
                      Gombak
                    </a>
                  </li>
                  <li className="footer__list__item">
                    <a href="#" className="footer__list__link">
                      Wangsa Maju
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-1-of-4">
                <ul className="footer__list">
                  <li className="footer__list__item">
                    <a href="#" className="footer__list__link">
                      Kelana Jaya
                    </a>
                  </li>
                  <li className="footer__list__item">
                    <a href="#" className="footer__list__link">
                      Kepong
                    </a>
                  </li>
                  <li className="footer__list__item">
                    <a href="#" className="footer__list__link">
                      Kota Damansara
                    </a>
                  </li>
                  <li className="footer__list__item">
                    <a href="#" className="footer__list__link">
                      Old Klang Road
                    </a>
                  </li>
                  <li className="footer__list__item">
                    <a href="#" className="footer__list__link">
                      Kuala Lumpur
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="secction-about-speed">
            <div className="wrapper">
              <div className="col-1-of-2">
                <h2 className="footer-heading u-margin-bottom-medium">
                  Subscribe to get exclusive insights!
                </h2>
                <div className="footer_input-container u-margin-bottom-big">
                  <input
                    type="text"
                    className="footer_input-container__input"
                    placeholder="Your email address"
                  />
                  <span className="footer_input-container-icon-wrap">
                    <RSSICON className="footer_input-container-icon" />
                  </span>
                </div>
                <div className="footer_social-container">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="footer_social-container-icon footer_social-container-fb"
                  />
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="footer_social-container-icon footer_social-container-in"
                  />
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="footer_social-container-icon footer_social-container-insta"
                  />
                </div>
              </div>
              <div className="col-1-of-2">
                <h2 className="footer-heading u-margin-bottom-medium">
                  Download the App here!
                </h2>
                <div className="download-store-container">
                  <img src={require("../assets/img/AppStore.png")} alt="" />
                  <img src={require("../assets/img/GooglePlay.png")} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-container">
            <span className="copyright">
              <COPYRIGHT_ICON className="copyright__icon" /> 2018 Speedrent
            </span>
            <p>
              All images are the property of their respective owner | Privacy
              Policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
