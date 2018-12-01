import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default class Home extends Component {
  render() {
    return (
      <div id="home">
        <section id="main-content">
          <div className="container">
            <div className="wrapper">
              <div className="content-container">
                <div className="image-container">
                  <img
                    src={require("../assets/img/home.png")}
                    alt=""
                    srcset=""
                  />
                </div>
                <div className="info-container">
                  <div className="each-info">
                    <h1 className="each-info__title">Landloard</h1>
                    <p className="each-info__desc">
                      Rent out and <br /> get secured part.
                    </p>
                    <a className="each-info__link">Learn more</a>
                    <button className="each-info__button">
                      Create listing
                      <FontAwesomeIcon
                        className="each-info__button-icon"
                        icon={faArrowRight}
                      />
                    </button>
                  </div>
                  <div className="each-info">
                    <h1 className="each-info__title">Tenant</h1>
                    <p className="each-info__desc">
                      Rent a house <br />
                      with no deposit.
                    </p>
                    <a className="each-info__link">Learn more</a>
                    <button className="each-info__button">
                      Search house
                      <FontAwesomeIcon
                        className="each-info__button-icon"
                        icon={faArrowRight}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="border" />
          </div>
        </section>
        <section id="main-buttons">
          <div className="container">
            <div className="wrapper">
              <ul className="mainButton-lists">
                <li className="mainButton-lists__item">
                  <a className="mainButton-lists__item-link">Blog</a>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="mainButton-lists__item-icon"
                  />
                </li>
                <li className="mainButton-lists__item">
                  <a className="mainButton-lists__item-link">Hot Areas</a>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="mainButton-lists__item-icon"
                  />
                </li>
                <li className="mainButton-lists__item">
                  <a className="mainButton-lists__item-link">Media</a>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="mainButton-lists__item-icon"
                  />
                </li>
                <li className="mainButton-lists__item">
                  <a className="mainButton-lists__item-link">Browse</a>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="mainButton-lists__item-icon"
                  />
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
