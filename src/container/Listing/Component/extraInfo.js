import React from "react";
import Button from "../../../component/Button";
import {
  UpArrowIcon,
  DownArrowIcon,
  CorrectIcon,
  InCorrectIcon
} from "../../../component/svgIcon";
const ExtraInfo = props => {
  return (
    <div className="extraInfoContainer">
      <div className="u-center-text u-margin-bottom-small">
        <span className="listingInfo_span">Photo successfully uploaded!</span>
      </div>
      <div className="section-createListing">
        <form>
          <div className="wrapper">
            <div className="col-1-of-2">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Furnishing"
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
                      Fully Furnish
                      <input
                        type="checkbox"
                        onChange={e =>
                          props.housingTypeCheckBoxValue(e.target.value)
                        }
                        value="Fully Furnish"
                        checked={props.housingTypeValue == "Fully Furnish"}
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="ex-container">
                      Partially Furnish
                      <input
                        type="checkbox"
                        onChange={e =>
                          props.housingTypeCheckBoxValue(e.target.value)
                        }
                        value="Partially Furnish"
                        checked={props.housingTypeValue == "Partially Furnish"}
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="ex-container">
                      No Furnish
                      <input
                        type="checkbox"
                        onChange={e =>
                          props.housingTypeCheckBoxValue(e.target.value)
                        }
                        value="No Furnish"
                        checked={props.housingTypeValue == "No Furnish"}
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                )}
              </div>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Furnishing"
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
                      Fully Furnish
                      <input
                        type="checkbox"
                        onChange={e =>
                          props.housingTypeCheckBoxValue(e.target.value)
                        }
                        value="Fully Furnish"
                        checked={props.housingTypeValue == "Fully Furnish"}
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="ex-container">
                      Partially Furnish
                      <input
                        type="checkbox"
                        onChange={e =>
                          props.housingTypeCheckBoxValue(e.target.value)
                        }
                        value="Partially Furnish"
                        checked={props.housingTypeValue == "Partially Furnish"}
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="ex-container">
                      No Furnish
                      <input
                        type="checkbox"
                        onChange={e =>
                          props.housingTypeCheckBoxValue(e.target.value)
                        }
                        value="No Furnish"
                        checked={props.housingTypeValue == "No Furnish"}
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                )}
              </div>
            </div>

            <div className="col-1-of-2">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Furnishing"
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
                      Fully Furnish
                      <input
                        type="checkbox"
                        onChange={e =>
                          props.housingTypeCheckBoxValue(e.target.value)
                        }
                        value="Fully Furnish"
                        checked={props.housingTypeValue == "Fully Furnish"}
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="ex-container">
                      Partially Furnish
                      <input
                        type="checkbox"
                        onChange={e =>
                          props.housingTypeCheckBoxValue(e.target.value)
                        }
                        value="Partially Furnish"
                        checked={props.housingTypeValue == "Partially Furnish"}
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="ex-container">
                      No Furnish
                      <input
                        type="checkbox"
                        onChange={e =>
                          props.housingTypeCheckBoxValue(e.target.value)
                        }
                        value="No Furnish"
                        checked={props.housingTypeValue == "No Furnish"}
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                )}
              </div>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="No. of Bathroom"
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
                      1
                      <input
                        type="checkbox"
                        onChange={e =>
                          props.housingTypeCheckBoxValue(e.target.value)
                        }
                        value="Fully Furnish"
                        checked={props.housingTypeValue == "Fully Furnish"}
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="ex-container">
                      2
                      <input
                        type="checkbox"
                        onChange={e =>
                          props.housingTypeCheckBoxValue(e.target.value)
                        }
                        value="Partially Furnish"
                        checked={props.housingTypeValue == "Partially Furnish"}
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="ex-container">
                      3
                      <input
                        type="checkbox"
                        onChange={e =>
                          props.housingTypeCheckBoxValue(e.target.value)
                        }
                        value="No Furnish"
                        checked={props.housingTypeValue == "No Furnish"}
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>
          <label className="ex-container">
            Nearby LRT
            <input type="checkbox" value="No Furnish" />
            <span className="checkmark" />
          </label>

          <div className="extrasection-container u-margin-bottom-medium">
            <h2 className="heading-secondary u-margin-bottom-small">
              Facilities
            </h2>
            <div className="wrapper">
              <div className="col-1-of-2">
                <ul>
                  <li>
                    <label className="ex-container">
                      Swimming Pool
                      <input type="checkbox" value="Swimming Pool" />
                      <span className="checkmark" />
                    </label>
                  </li>
                  <li>
                    <label className="ex-container">
                      Playground
                      <input type="checkbox" value="No Furnish" />
                      <span className="checkmark" />
                    </label>
                  </li>
                  <li>
                    <label className="ex-container">
                      ...
                      <input type="checkbox" value="No Furnish" />
                      <span className="checkmark" />
                    </label>
                  </li>
                </ul>
              </div>
              <div className="col-1-of-2">
                <ul>
                  <li>
                    <label className="ex-container">
                      Gymnasium
                      <input type="checkbox" value="Swimming Pool" />
                      <span className="checkmark" />
                    </label>
                  </li>
                  <li>
                    <label className="ex-container">
                      24-hours security
                      <input type="checkbox" value="No Furnish" />
                      <span className="checkmark" />
                    </label>
                  </li>
                  <li>
                    <label className="ex-container">
                      ...
                      <input type="checkbox" value="No Furnish" />
                      <span className="checkmark" />
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="extrasection-container u-margin-bottom-medium">
            <h2 className="heading-secondary u-margin-bottom-small">
              Additional Info
            </h2>
            <div className="wrapper">
              <div className="col-1-of-2">
                <div className="input-group">
                  <input type="text" placeholder="Floor Level" />
                </div>
              </div>
              <div className="col-1-of-2">
                <label className="ex-container">
                  Gymnasium
                  <input type="checkbox" value="Swimming Pool" />
                  <span className="checkmark" />
                </label>
              </div>
            </div>
          </div>
          <div className="extrasection-container u-margin-bottom-medium">
            <h2 className="heading-secondary u-margin-bottom-small">
              Description
            </h2>
            <textarea name="" id="" cols="30" rows="20" />
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
    </div>
  );
};

export default ExtraInfo;
