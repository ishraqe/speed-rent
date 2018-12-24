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
      <div className="section-createListing">
        <form>
          <div className="wrapper">
            <div className="col-1-of-2">
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
                  <DownArrowIcon className="icon down-icon" />
                </a>
                {props.showProperty && (
                  <div className="expendadInput">
                    <label className="ex-container">
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
                    <label className="ex-container">
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
                <input type="text" placeholder="Property Name" />
                <CorrectIcon className="icon" />
              </div>
              <div className="input-group">
                <input type="text" placeholder="Price (RM)" />
                <InCorrectIcon className="icon" />
              </div>
            </div>
            <div className="col-1-of-2">
              <div className="input-group">
                <input type="text" placeholder="Address" />
                <CorrectIcon className="icon" />
              </div>
              <div className="input-group">
                <input type="text" placeholder="Post Code" />
                <InCorrectIcon className="icon" />
              </div>
            </div>
          </div>
          <div className="buttonContainer u-center-text">
            <a
              type="submit"
              onClick={props.handleButton}
              href="#"
              className="btn-listing"
            >
              Create
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Create;
