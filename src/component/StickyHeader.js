import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header id="sticky-header">
      <div className="container">
        <div className="wrapper">
          <div className="nav-container">
            <FontAwesomeIcon className="logo" icon={faHome} />
            <div className="input-container">
              <input
                type="text"
                placeholder="Search by location, property name"
                className="input"
              />
              <FontAwesomeIcon className="search-icon" icon={faSearch} />
            </div>
          </div>
        </div>
      </div>
      <section className="login-button-container">
        <button className="login-button">Login</button>
      </section>
    </header>
  );
};

export default Header;
