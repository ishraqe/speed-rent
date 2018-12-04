import React from "react";
import { CameraIcon, PlusIcon } from "../../../component/svgIcon";
import Button from "../../../component/Button";
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
