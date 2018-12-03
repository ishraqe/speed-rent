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
    <div id="menuBar">
      {props.location.pathname != "/" ? (
        <section className="know-more">
          <div className="container">
            <div className="wrapper">
              <div className="info">
                <Link to="/">
                  <HelpIconOutline
                    style={{ fill: "#fff" }}
                    className="label-icon"
                  />
                  <span>Want to know more ?</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <div className="container">
        <div className="wrapper">
          <div className="menu-container">
            <ul className="menu-list">
              <li className="list">
                <Link to="/create-listing">
                  <FooterMenuPost className="menu-icon" />
                  <span>Post</span>
                </Link>
              </li>
              <li className="list">
                <a href="#">
                  <FooterSpeedIcon className="menu-icon" />
                  <span>Speedmanage</span>
                </a>
              </li>
              <li className="list">
                <a href="#">
                  <FooterMoreIcon className="menu-icon" />
                  <span>More</span>
                </a>
              </li>
              <li className="list">
                <a href="#">
                  <FooterChatIcon className="menu-icon" />
                  <span>Chat</span>
                </a>
              </li>
              <li className="list">
                <a href="#">
                  <FooterSearchIcon className="menu-icon" />
                  <span>Search</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MenuBar);
