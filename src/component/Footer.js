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
    <footer className="section-footer">
      <div className="container">
        <div className="wrapper">
          <div className="col-1-of-2">
            <ul className="main-footer__list">
              <li className="main-footer__item">
                <LanguageIcon className="main-footer__icon" />
                <div className="main-footer__info">
                  <a href="#" className="main-footer_link">
                    <h2 className="heading-tertiary">English</h2>
                  </a>
                </div>
              </li>
              <li className="main-footer__item">
                <MapIcon className="main-footer__icon" />
                <div className="main-footer__info">
                  <a href="#" className="main-footer_link">
                    <h2 className="heading-tertiary">English</h2>
                  </a>
                  <p>
                    1-4, Jalan PJU 1A/41B, Pusat Dagangan NZX, 47301 Petaling
                    Jaya, Selangor, Malaysia.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-1-of-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            officiis, ad nobis veritatis eius veniam repudiandae labore esse
            quaerat. Aspernatur. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Adipisci officiis, ad nobis veritatis eius veniam
            repudiandae labore esse quaerat. Aspernatur. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Adipisci officiis, ad nobis
            veritatis eius veniam repudiandae labore esse quaerat. Aspernatur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            officiis, ad nobis veritatis eius veniam repudiandae labore esse
            quaerat. Aspernatur. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Adipisci officiis, ad nobis veritatis eius veniam
            repudiandae labore esse quaerat. Aspernatur. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Adipisci officiis, ad nobis
            veritatis eius veniam repudiandae labore esse quaerat. Aspernatur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            officiis, ad nobis veritatis eius veniam repudiandae labore esse
            quaerat. Aspernatur.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
