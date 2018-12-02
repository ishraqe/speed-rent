import React from "react";
import {
  FooterMenuPost,
  FooterChatIcon,
  FooterMoreIcon,
  FooterSearchIcon,
  FooterSpeedIcon
} from "./svgIcon";

const MenuBar = () => {
  return (
    <div id="menuBar">
      <div className="container">
        <div className="wrapper">
          <div className="menu-container">
            <ul className="menu-list">
              <li className="list">
                <a href="#">
                  <FooterMenuPost className="menu-icon" />
                  <span>Post</span>
                </a>
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

export default MenuBar;
