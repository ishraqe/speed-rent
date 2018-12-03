import React from "react";
import { UpArrowIcon, DownArrowIcon } from "../../../component/svgIcon";

const Create = props => {
  return (
    <>
      <div className="input-group">
        <input type="text" placeholder="Property Type" className="input" />
      </div>
      <div className="input-group">
        <input type="text" placeholder="Property Name" className="input" />
      </div>
      <div className="input-group">
        <input type="text" placeholder="Address" className="input" />
      </div>
      <div className="input-group">
        <input type="text" placeholder="Post Code" className="input" />
      </div>
      <div className="input-group">
        <input type="text" placeholder="Price (RM)" className="input" />
      </div>
    </>
  );
};

export default Create;
