import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Header from "../component/Header";
import HeadingTitle from "../component/HeadingTitle";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import HomeImage from "../assets/img/Home.png";
import SpeedICon from "../assets/img/speed-withicon.png";

import { Alliang, FooterSearchIcon, ArrowRight } from "../component/svgIcon";

export default class Home extends Component {
  render() {
    return (
      <>
        <Header {...this.props} info={["home"]} />

        <HeadingTitle title="Home" />
        <section className="section-bilboard">
          <div className="container">
            <div className="wrapper">
              <div className="bilboard">
                <div className="col-1-of-2">
                  <div className="bilboard__info">
                    <div className="bilboard__input-container">
                      <form action="#">
                        <div className="bilboard__search-input-container">
                          <input
                            className="bilboard__search-input"
                            type="text"
                            placeholder="Search by location, property name"
                          />
                          <FooterSearchIcon className="bilboard__search-input-icon" />
                        </div>
                      </form>
                    </div>
                    <div className="bilboard__button-container">
                      <div className="bilboard__box">
                        <h2 className="heading-secondary u-margin-bottom-small">
                          Landlord
                        </h2>
                        <h3 className="heading-tertiary u-margin-bottom-small">
                          Rent out secured.
                        </h3>
                        <a
                          href="#"
                          className="link-text  u-margin-bottom-medium"
                        >
                          Learn more
                        </a>
                        <br />
                        <Link
                          to="/create-listing"
                          href="#"
                          className="btn-primary"
                        >
                          Create listing
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="icon-arrow"
                          />
                        </Link>
                      </div>
                      <div className="bilboard__box">
                        <h2 className="heading-secondary u-margin-bottom-small">
                          Tenant
                        </h2>
                        <h3 className="heading-tertiary u-margin-bottom-small">
                          Rent a house with no worries.
                        </h3>
                        <a
                          href="#"
                          className="link-text  u-margin-bottom-medium"
                        >
                          Learn more
                        </a>
                        <br />
                        <a href="#" className="btn-primary">
                          Search house
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="icon-arrow"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-1-of-2">
                  <div className="bilboard__image-container">
                    <img src={HomeImage} alt="" className="bilboard__image" />
                    <div className="bilboard__partners">
                      <img className="bilborad__image" src={SpeedICon} alt="" />
                      <h2 className="heading-secondary">
                        in participation with
                      </h2>
                      <Alliang className="partner-logo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-menu">
          <div className="container">
            <ul className="bigmenu">
              <li className="bigmenu__item">
                <a href="#" className="bigmenu__link">
                  <h2 className="heading-secondary">Blog</h2>

                  <ArrowRight className="bigmenu__icon" />
                </a>
              </li>
              <li className="bigmenu__item">
                <a href="#" className="bigmenu__link">
                  <h2 className="heading-secondary">Hot Areas</h2>

                  <ArrowRight className="bigmenu__icon" />
                </a>
              </li>
              <li className="bigmenu__item">
                <a href="#" className="bigmenu__link">
                  <h2 className="heading-secondary">Media</h2>

                  <ArrowRight className="bigmenu__icon" />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </>
    );
  }
}
