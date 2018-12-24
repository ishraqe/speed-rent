import React from "react";
import { LeftArrowIcon, CROSS_ICON } from "./svgIcon";
import { makeFirstLetterCap } from "../Utils";
import { withRouter } from "react-router-dom";
const HeadingTitle = props => {
  // if (props.location.pathname == "/") {
  //   return null;
  // }
  return (
    <div className="section-headingTitle">
      <div className="container">
        <div className="wrapper">
          <div className="headingContent">
            <a onClick={() => props.history.goBack()}>
              <LeftArrowIcon className="icon" />
            </a>
            <h1 className="heading-secondary">
              {makeFirstLetterCap(props.title)}
            </h1>
            <a onClick={() => props.history.goBack()}>
              <CROSS_ICON className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(HeadingTitle);
