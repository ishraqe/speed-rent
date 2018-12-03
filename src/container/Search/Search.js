import React, { Component } from "react";
import Header from "../../component/StickyHeader";
import HeadingTitle from "../../component/HeadingTitle";
import Button from "../../component/Button";

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
                        Price
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
        </div>
      </>
    );
  }
}
