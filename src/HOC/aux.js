import React from "react";
import Header from "../component/StickyHeader";
import MenuBar from "../component/StickyMenuBar";

const AUX = props => {
  return (
    <div className="main-component">
      <Header />
      {props.children}
      <MenuBar />
    </div>
  );
};

export default AUX;
