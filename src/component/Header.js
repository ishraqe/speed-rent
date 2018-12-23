import React from "react";
import { makeFirstLetterCap } from "../Utils";
import { Link } from "react-router-dom";
import {
  MainIcon,
  SpeedIconOnly,
  FooterSearchIcon,
  FooterMoreIcon
} from "../component/svgIcon";

const path = data => {
  if (data.info) {
    const { info } = data;
    return info.map((el, i) => {
      return <a key={i}>{makeFirstLetterCap(el)}</a>;
    });
  }
  return null;
};

const Header = props => {
  return (
    <>
      <header className="section-heading">
        <div className="main-heading">
          <div className="wrapper">
            <div className="heading">
              <div className="nav">
                <div className="heading__nav-list-container">
                  <Link to="/" className="heading__login-container">
                    <SpeedIconOnly className="heading__logo" />
                  </Link>
                  <form action="#">
                    <div className="heading__search-input-container ">
                      <input
                        className="heading__search-input"
                        type="text"
                        placeholder="Search by location, property name"
                      />
                      <FooterSearchIcon className="heading__search-input-icon" />
                    </div>
                  </form>
                </div>
              </div>
              <div className="heading__btn-container">
                <ul className="heading__nav--list">
                  <li className="heading__nav--item">
                    <a
                      className="heading__nav--link heading__nav--link-border"
                      href="#"
                    >
                      List your Property
                    </a>
                  </li>
                  <li className="heading__nav--item">
                    <a className="heading__nav--link" href="#">
                      SpeedImage
                    </a>
                  </li>
                  <li className="heading__nav--item">
                    <a className="heading__nav--link" href="#">
                      Chat
                    </a>
                  </li>
                  <li className="heading__nav--item">
                    <a className="heading__nav--link" href="#">
                      Help
                    </a>
                  </li>
                  <li className="heading__nav--item">
                    <a className="heading__nav--link" href="#">
                      <FooterMoreIcon className="heading__nav--link-icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <section className="sub-heading">
          <div className="wrapper">
            <div className="breadcrumb">
              <ul className="breadcrump__list">
                <li className="breadcrumb__item">
                  <a href="#" className="breadcrumb__link">
                    Home |
                  </a>
                </li>
                <li className="breadcrumb__item">
                  <a href="#" className="breadcrumb__link">
                    About |
                  </a>
                </li>
                <li className="breadcrumb__item">
                  <a href="#" className="breadcrumb__link">
                    Something
                  </a>
                </li>
              </ul>
              <a href="#" className="btn-text">
                Login
              </a>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;