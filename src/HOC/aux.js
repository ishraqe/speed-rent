import React from "react";
import Header from "../component/StickyHeader";
import MenuBar from "../component/StickyMenuBar";

const AUX = props => {
  return (
    <>
      <Header />
      {props.children}
      <MenuBar />
    </>
  );
};

export default AUX;
