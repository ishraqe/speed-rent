import React, { Component } from "react";
import MenuBar from "../component/StickyMenuBar";
import { withRouter } from "react-router-dom";

class AUX extends Component {
  render() {
    return (
      <div className="main-component">
        {this.props.children}
        <MenuBar />
      </div>
    );
  }
}

export default withRouter(AUX);
