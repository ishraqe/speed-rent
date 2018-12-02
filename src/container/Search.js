import React, { Component } from "react";
import Header from "../component/StickyHeader";

export default class SearchContainer extends Component {
  state = {
    hello: "he"
  };
  render() {
    return (
      <>
        <div id="searchContainer" className="default-margin-top">
          <section id="main-content">
            <div className="container">
              <div className="wrapper">search</div>
            </div>
          </section>
        </div>
      </>
    );
  }
}
