import React, { Component } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { withRouter } from "react-router-dom";

class AUX extends Component {
  render() {
    return (
      <>
        <Header />
        <div>
          <div className="main-component">{this.props.children}</div>
        </div>
        <Footer />
      </>
    );
  }
}

export default withRouter(AUX);
