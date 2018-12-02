import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHouseDamage,
  faEllipsisH,
  faCommentAlt,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
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
                <a>
                  <FooterMenuPost class="menu-icon" />
                  <span>Post</span>
                </a>
              </li>
              <li className="list">
                <a>
                  <FooterSpeedIcon class="menu-icon" />
                  <span>Speedmanage</span>
                </a>
              </li>
              <li className="list">
                <a>
                  <FooterMoreIcon class="menu-icon" />
                  <span>More</span>
                </a>
              </li>
              <li className="list">
                <a>
                  <FooterChatIcon class="menu-icon" />
                  <span>Chat</span>
                </a>
              </li>
              <li className="list">
                <a>
                  <FooterSearchIcon class="menu-icon" />
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
