import React from "react";
import { CameraIcon, PlusIcon } from "../../../component/svgIcon";
import Button from "../../../component/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
const UploadPhoto = props => {
  return (
    <div className="uploadPhotosContainer">
      <span className="uploadInfo">
        Photo guideline: No watermark, minimum 4 interior photos and HD quality
        photos.
      </span>
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
            <input type="file" />
            <CameraIcon className="camera-icon" />
          </div>
          <div class="box ">
            <input type="file" />
            <CameraIcon className="camera-icon" />
          </div>
          <div class="box ">
            <input type="file" />
            <CameraIcon className="camera-icon" />
          </div>
          <div class="box ">
            <input type="file" />
            <CameraIcon className="camera-icon" />
          </div>
          <div class="box ">
            <input type="file" />
            <div className="more">
              <PlusIcon className="more-icon" />
              <span className="more-text">Add more photos</span>
            </div>
          </div>
        </div>
        <div className="buttonContainer">
          <Button title="Upload" onClick={props.handleButton} />
        </div>
      </form>
    </div>
  );
};

export default UploadPhoto;
