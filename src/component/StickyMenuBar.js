import React from "react";
import {
  FooterMenuPost,
  FooterChatIcon,
  FooterMoreIcon,
  FooterSearchIcon,
  FooterSpeedIcon
} from "./svgIcon";
import { HelpIconOutline } from "./svgIcon";
import { withRouter, Link } from "react-router-dom";

const MenuBar = props => {
  return (
    <section className="section-menubar">
      <div className="container">
        <div className="wrapper">
          <div className="sticky-menu">
            <ul className="sticky-menu__list">
              <li className="sticky-menu__item">
                <a href="#" className="sticky-menu__link">
                  <FooterMenuPost className="sticky-menu__link-icon" />
                  <span className="sticky-menu__link-text">Post</span>
                </a>
              </li>
              <li className="sticky-menu__item">
                <a href="#" className="sticky-menu__link">
                  <FooterSpeedIcon className="sticky-menu__link-icon" />
                  <span className="sticky-menu__link-text">Speedmanage</span>
                </a>
              </li>
              <li className="sticky-menu__item">
                <a href="#" className="sticky-menu__link">
                  <FooterMoreIcon className="sticky-menu__link-icon more-icon" />
                  <span className="sticky-menu__link-text">More</span>
                </a>
              </li>
              <li className="sticky-menu__item">
                <a href="#" className="sticky-menu__link">
                  <FooterChatIcon className="sticky-menu__link-icon" />
                  <span className="sticky-menu__link-text">Chat</span>
                </a>
              </li>
              <li className="sticky-menu__item">
                <a href="#" className="sticky-menu__link">
                  <FooterSearchIcon className="sticky-menu__link-icon" />
                  <span className="sticky-menu__link-text">Search</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(MenuBar);
