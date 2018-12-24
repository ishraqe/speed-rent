import React, { Component } from "react";
import Header from "../../component/Header";
import HeadingTitle from "../../component/HeadingTitle";
import Button from "../../component/Button";
import { HelpIcon } from "../../component/svgIcon";
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
        <div classname="searchContainer">
          <div className="container">
            <form action="#">
              <div className="wrapper">
                <div className="col-1-of-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                  tempore!
                </div>
                <div className="col-1-of-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                  tempore!
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
