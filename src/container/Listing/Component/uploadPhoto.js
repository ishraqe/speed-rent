import React from "react";
import { CameraIcon, PlusIcon } from "../../../component/svgIcon";
import Button from "../../../component/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
const UploadPhoto = props => {
  return (
    <div className="uploadPhotosContainer">
      <div className="u-center-text u-margin-bottom-small">
        <span className="listingInfo_span">
          Photo guideline: No watermark, minimum 4 interior <br /> photos and HD
          quality photos.
        </span>
      </div>
      <form>
        <div className="uploadPhotoInputContainer">
          <div class="box ">
            {props.imageUrls.length === 0 ? (
              <>
                <input
                  type="file"
                  onChange={e => props.fileChangedHandler(e.target.files[0])}
                />
                <CameraIcon className="camera-icon" />
              </>
            ) : (
              <div className="prevImageContainer">
                <img className="previewImage" src={props.imageUrls[0]} alt="" />
                <a onClick={props.removeImage}>
                  <FontAwesomeIcon
                    className="remove-icon"
                    icon={faTimesCircle}
                  />
                </a>
              </div>
            )}
          </div>
          <div class="box ">
            {props.imageUrls.length === 0 ? (
              <>
                <input
                  type="file"
                  onChange={e => props.fileChangedHandler(e.target.files[0])}
                />
                <CameraIcon className="camera-icon" />
              </>
            ) : (
              <div className="prevImageContainer">
                <img className="previewImage" src={props.imageUrls[0]} alt="" />
                {/* <a onClick={props.removeImage}>
                  <FontAwesomeIcon
                    className="remove-icon"
                    icon={faTimesCircle}
                  />
                </a> */}
              </div>
            )}
          </div>
          <div class="box ">
            {props.imageUrls.length === 0 ? (
              <>
                <input
                  type="file"
                  onChange={e => props.fileChangedHandler(e.target.files[0])}
                />
                <CameraIcon className="camera-icon" />
              </>
            ) : (
              <div className="prevImageContainer">
                <img className="previewImage" src={props.imageUrls[0]} alt="" />
                {/* <a onClick={props.removeImage}>
                  <FontAwesomeIcon
                    className="remove-icon"
                    icon={faTimesCircle}
                  />
                </a> */}
              </div>
            )}
          </div>
          <div class="box ">
            {props.imageUrls.length === 0 ? (
              <>
                <input
                  type="file"
                  onChange={e => props.fileChangedHandler(e.target.files[0])}
                />
                <CameraIcon className="camera-icon" />
              </>
            ) : (
              <div className="prevImageContainer">
                <img className="previewImage" src={props.imageUrls[0]} alt="" />
                {/* <a onClick={props.removeImage}>
                  <FontAwesomeIcon
                    className="remove-icon"
                    icon={faTimesCircle}
                  />
                </a> */}
              </div>
            )}
          </div>
        </div>
        <div className="buttonContainer u-center-text u-margin-top-big">
          <a
            type="submit"
            onClick={props.handleButton}
            href="#"
            className="btn-listing"
          >
            Upload
          </a>
        </div>
      </form>
    </div>
  );
};

export default UploadPhoto;
