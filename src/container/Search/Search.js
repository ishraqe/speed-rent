import React, { Component } from "react";
import Header from "../../component/StickyHeader";
import HeadingTitle from "../../component/HeadingTitle";
import Button from "../../component/Button";
import { HelpIcon, HelpIconOutline } from "../../component/svgIcon";

export default class SearchContainer extends Component {
  render() {
    return (
      <>
        <Header {...this.props} info={["home", "search house"]} />
        <div id="searchContainer" className="default-margin-top">
          <HeadingTitle title="search house" />
          <section className="main-content">
            <div className="container">
              <div className="wrapper">
                <div className="searchContent">
                  <form>
                    <div className="input-group">
                      <label htmlFor="" className="label">
                        Location / property name
                        <HelpIcon
                          style={{ fill: "none" }}
                          className="label-icon"
                        />
                      </label>
                      <input
                        type="text"
                        placeholder="Type by location, property name"
                        className="form-input"
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="" className="label">
                        Housing Type
                        <HelpIcon
                          style={{ fill: "none" }}
                          className="label-icon"
                        />
                      </label>
                      <select name="" id="" className="form-select">
                        <option value="">Any</option>
                        <option value="">Another</option>
                        <option value="">Second</option>
                        <option value="">Make me</option>
                      </select>
                    </div>
                    <div className="input-group">
                      <label htmlFor="" className="label">
                        Price (RM)
                      </label>
                      <div className="range-input-container">
                        <input
                          className="range-input"
                          type="text"
                          placeholder="0"
                        />
                        <span className="diff">to</span>
                        <input
                          className="range-input"
                          type="text"
                          placeholder="5,000"
                        />
                      </div>
                    </div>
                    <div className="button-contaner">
                      <Button title="Search" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <section className="know-more">
            <div className="container">
              <div className="wrapper">
                <div className="info">
                  <a>
                    <HelpIconOutline
                      style={{ fill: "#fff" }}
                      className="label-icon"
                    />
                    <span>Want to know more ?</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}
