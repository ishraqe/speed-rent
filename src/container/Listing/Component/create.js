import React from "react";
import {
  UpArrowIcon,
  DownArrowIcon,
  CorrectIcon,
  InCorrectIcon
} from "../../../component/svgIcon";

const Create = props => {
  return (
    <>
      <div className="input-group">
        <input type="text" placeholder="Property Type" className="input" />
        <DownArrowIcon className="input-icon" />
        <div className="expendadInput">
          <label class="container">
            One
            <input type="checkbox" />
            <span class="checkmark" />
          </label>
        </div>
      </div>
      <div className="input-group">
        <CorrectIcon className="input-icon" />
        <input type="text" placeholder="Property Name" className="input" />
      </div>
      <div className="input-group">
        <CorrectIcon className="input-icon" />
        <input type="text" placeholder="Address" className="input" />
      </div>
      <div className="input-group">
        <InCorrectIcon className="input-icon" />
        <input type="text" placeholder="Post Code" className="input" />
      </div>
      <div className="input-group">
        <InCorrectIcon className="input-icon" />
        <input type="text" placeholder="Price (RM)" className="input" />
      </div>
    </>
  );
};

export default Create;
