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
                <FontAwesomeIcon className="menu-icon" icon={faHouseDamage} />
                <a>Post</a>
              </li>
              <li className="list">
                <FontAwesomeIcon className="menu-icon" icon={faHome} />
                <a>Speedmanage</a>
              </li>
              <li className="list">
                <FontAwesomeIcon className="menu-icon" icon={faEllipsisH} />
                <a>More</a>
              </li>
              <li className="list">
                <FontAwesomeIcon className="menu-icon" icon={faCommentAlt} />
                <a>Chat</a>
              </li>
              <li className="list">
                <FontAwesomeIcon className="menu-icon" icon={faSearch} />
                <a>Search</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
