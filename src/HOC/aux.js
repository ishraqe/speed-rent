import React from "react";
import Header from "../component/StickyHeader";
import MenuBar from "../component/StickyMenuBar";
import Footer from "../component/Footer";
import { withRouter } from "react-router-dom";

const AUX = props => {
  return (
    <div className="main-component">
      <Header {...props} />
      {props.children}
      <Footer />
      <MenuBar />
    </div>
  );
};

export default withRouter(AUX);
