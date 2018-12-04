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
        <input
          type="text"
          placeholder="Housing Type"
          className="input "
          // disabled={props.sho}
          onFocus={() => props.housingType(true)}
          // onBlur={() => props.propertyType(false)}
        />
        <DownArrowIcon className="input-icon housingTypeIcon" />
        {props.showProperty && (
          <div className="expendadInput">
            <label className="container">
              Landed
              <input
                type="checkbox"
                onChange={e => console.log(e.target.value)}
                value="handling"
              />
              <span className="checkmark" />
            </label>
            <label className="container">
              High rise
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
          </div>
        )}
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
