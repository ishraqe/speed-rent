import React from "react";
import Button from "../../../component/Button";

const ExtraInfo = props => {
  return (
    <div className="extraInfoContainer">
      <span className="postinfo">Photo successfully uploaded!</span>
      <form>
        <div className="extraInfoInputContainer">
          <div className="input-container">
            <select className="select">
              <option value="">Furnishing</option>
            </select>
            <select className="select">
              <option value="">Bedroom</option>
            </select>
          </div>
          <div className="input-container">
            <select className="select">
              <option value="">Bathroom</option>
            </select>
            <select className="select">
              <option value="">Parking</option>
            </select>
          </div>
          <div className="input-container">
            <label className="custom-selectbox">
              Nearby LRT
              <input type="checkbox" value="Nearby LRT" />
              <span className="checkmark" />
            </label>
          </div>
          <h1 className="heading">Facilities</h1>
          <div className="input-container">
            <div className="each-input">
              <label className="custom-selectbox">
                Swimming pool
                <input type="checkbox" value="Swimming pool" />
                <span className="checkmark" />
              </label>
            </div>
            <div className="each-input">
              <label className="custom-selectbox">
                Gymnasium
                <input type="checkbox" value="Nearby LRT" />
                <span className="checkmark" />
              </label>
            </div>
          </div>
          <div className="input-container">
            <div className="each-input">
              <label className="custom-selectbox">
                Playground
                <input type="checkbox" value="Nearby LRT" />
                <span className="checkmark" />
              </label>
            </div>
            <div className="each-input">
              <label className="custom-selectbox">
                24-hours security
                <input type="checkbox" value="Nearby LRT" />
                <span className="checkmark" />
              </label>
            </div>
          </div>
          <div className="input-container">
            <div className="each-input">
              <label className="custom-selectbox ">
                .....
                <input type="checkbox" value="Nearby LRT" />
                <span className="checkmark" />
              </label>
            </div>
            <div className="each-input">
              <label className="custom-selectbox">
                .....
                <input type="checkbox" value="Nearby LRT" />
                <span className="checkmark" />
              </label>
            </div>
          </div>
          <h1 className="heading">Additional info</h1>
          <div className="input-container">
            <select className="select">
              <option value="">Furnishing</option>
            </select>
            <select className="select">
              <option value="">Bedroom</option>
            </select>
          </div>
          <h1 className="heading">Description</h1>
        </div>
        <div className="buttonContainer">
          <Button title="Upload" onClick={props.handleButton} />
        </div>
      </form>
    </div>
  );
};

export default ExtraInfo;
