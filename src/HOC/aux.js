import React from "react";
import Header from "../component/StickyHeader";
import MenuBar from "../component/StickyMenuBar";
import Footer from "../component/Footer";

const AUX = props => {
  return (
    <div className="main-component">
      <Header />
      {props.children}
      <Footer />
      <MenuBar />
    </div>
  );
};

export default AUX;
