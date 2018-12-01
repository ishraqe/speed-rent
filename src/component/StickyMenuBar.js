import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHouseDamage,
  faEllipsisH,
  faCommentAlt,
  faSearch
} from "@fortawesome/free-solid-svg-icons";

const MenuBar = () => {
  return (
    <div id="menuBar">
      <div className="container">
        <div className="wrapper">
          <div className="menu-container">
            <ul className="menu-list">
              <li className="list">
                <a>
                  <FontAwesomeIcon className="menu-icon" icon={faHouseDamage} />
                  <span>Post</span>
                </a>
              </li>
              <li className="list">
                <a>
                  <FontAwesomeIcon className="menu-icon" icon={faHome} />
                  <span>Speedmanage</span>
                </a>
              </li>
              <li className="list">
                <a>
                  <FontAwesomeIcon className="menu-icon" icon={faEllipsisH} />
                  <span>More</span>
                </a>
              </li>
              <li className="list">
                <a>
                  <FontAwesomeIcon className="menu-icon" icon={faCommentAlt} />
                  <span>Chat</span>
                </a>
              </li>
              <li className="list">
                <a>
                  <FontAwesomeIcon className="menu-icon" icon={faSearch} />
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
