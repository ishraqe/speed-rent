import React, { Component } from "react";
import Header from "../../component/Header";
import HeadingTitle from "../../component/HeadingTitle";
import Button from "../../component/Button";
import { HelpIcon, DownArrowIcon } from "../../component/svgIcon";
import { Helmet } from "react-helmet";
export default class SearchContainer extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Speedrent | Search Property</title>
        </Helmet>
        <Header {...this.props} info={["home", "search house"]} />
        <HeadingTitle title="search house" />
        <div className="section-search">
          <div className="container">
            <form action="#" className="search">
              <ul className="search__list">
                <li className="search__item">
                  <h2 className="heading-secondary-sub">
                    Location / property name
                  </h2>
                  <div className="search__input-container">
                    <input
                      type="text"
                      className="search__input"
                      placeholder="Type by location, property name"
                    />
                    <HelpIcon className="search__help__icon" />
                  </div>
                </li>
                <li className="search__item">
                  <h2 className="heading-secondary-sub">Housing Type</h2>
                  <div className="search__input-container">
                    <div className="input-group">
                      <input
                        type="text"
                        placeholder="Housing Type"
                        className="input"
                        // disabled={props.showProperty}
                      />
                      <a>
                        <DownArrowIcon className="icon down-icon" />
                      </a>

                      <div className="expendadInput">
                        <label className="ex-container">
                          Landed
                          <input type="checkbox" value="Landed" />
                          <span className="checkmark" />
                        </label>
                        <label className="ex-container">
                          High rise
                          <input type="checkbox" value="High Rise" />
                          <span className="checkmark" />
                        </label>
                      </div>
                    </div>

                    <HelpIcon className="search__help__icon" />
                  </div>
                </li>
                <li className="search__item">
                  <h2 className="heading-secondary-sub">Price (RM)</h2>
                  <div className="search__input-container">
                    <div className="search_range-container">
                      <input
                        type="text"
                        className="search_range__input"
                        placeholder="0"
                      />
                      <span className="search_range-text">to</span>
                      <input
                        type="text"
                        className="search_range__input"
                        placeholder="5000"
                      />
                    </div>
                  </div>
                </li>
                <li className="search__item">
                  <h2 className="heading-secondary-sub"> &nbsp; </h2>
                  <div className="search__input-container">
                    <a type="submit" href="#" className="btn-listing">
                      Search
                    </a>
                  </div>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </>
    );
  }
}
