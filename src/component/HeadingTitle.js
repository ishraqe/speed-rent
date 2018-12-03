import React from "react";
import { LeftArrowIcon } from "./svgIcon";
import { makeFirstLetterCap } from "../Utils";
import { withRouter } from "react-router-dom";
const HeadingTitle = props => {
  return (
    <div id="headingTitle">
      <div className="container">
        <div className="wrapper">
          <div className="headingContent">
            <a onClick={() => props.history.goBack()}>
              <LeftArrowIcon className="leftArrow" />
            </a>
            <h1 className="title">{makeFirstLetterCap(props.title)}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(HeadingTitle);
