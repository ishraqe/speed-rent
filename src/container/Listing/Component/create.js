import React from "react";
import {
  UpArrowIcon,
  DownArrowIcon,
  CorrectIcon,
  InCorrectIcon
} from "../../../component/svgIcon";
import Button from "../../../component/Button";

const Create = props => {
  return (
    <>
      <div className="createListing">
        <form>
          <div className="input-group">
            <input
              type="text"
              placeholder="Housing Type"
              className="input"
              // disabled={props.showProperty}
              onFocus={() => props.housingType(true)}
              value={props.housingTypeValue}
            />
            <a onClick={() => props.housingType(false)}>
              <DownArrowIcon className="input-icon housingTypeIcon" />
            </a>
            {props.showProperty && (
              <div className="expendadInput">
                <label className="container">
                  Landed
                  <input
                    type="checkbox"
                    onChange={e =>
                      props.housingTypeCheckBoxValue(e.target.value)
                    }
                    value="Landed"
                    checked={props.housingTypeValue == "Landed"}
                  />
                  <span className="checkmark" />
                </label>
                <label className="container">
                  High rise
                  <input
                    type="checkbox"
                    onChange={e =>
                      props.housingTypeCheckBoxValue(e.target.value)
                    }
                    value="High Rise"
                    checked={props.housingTypeValue == "High Rise"}
                  />
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
          <div className="buttonContainer">
            <Button title="Create" onClick={props.handleButton} />
          </div>
        </form>
      </div>
    </>
  );
};

export default Create;
