import React, { Component } from "react";
import Header from "../../component/Header";
import HeadingTitle from "../../component/HeadingTitle";
import Button from "../../component/Button";

// Listing Component
import Create from "./Component/create";
import ExtraInfo from "./Component/extraInfo";
import UploadPhoto from "./Component/uploadPhoto";
import { Helmet } from "react-helmet";
export default class Listing extends Component {
  state = {
    stage: 1,
    headingTitle: "create listing",
    createListing: {
      housingTypeExtend: false,
      housingType: "Housing Type"
    },
    extraInfo: {
      furnishing: {
        open: false,
        data: ["Fully Furnish", "Partially Furnish", "No Furnish"]
      },
      bedroom: {
        open: false,
        data: [1, 2, 3]
      },
      parking: {
        open: false,
        data: [1, 2, 3]
      },
      bathroom: {
        open: false,
        data: [1, 2, 3]
      }
    },
    uploadPhotos: []
  };
  handleStage = () => {
    this.setState({
      stage: this.state.stage + 1
    });
  };
  renderSteps = () => {
    return (
      <ul id="progressbar">
        <li
          className={
            this.state.stage === 1 || this.state.stage <= 3 ? "active" : null
          }
        >
          Create Listing
        </li>
        <li
          className={
            this.state.stage <= 3 && this.state.stage > 1 ? "active" : null
          }
        >
          Upload Photo
        </li>
        <li className={this.state.stage == 3 ? "active" : null}>Extra Info</li>
      </ul>
    );
  };
  extendedHousingType = status => {
    this.setState({
      createListing: {
        housingTypeExtend: status
      }
    });
  };

  handleHousingTypeCheckBox = value => {
    this.setState({
      createListing: {
        housingType: value,
        housingTypeExtend: true
      }
    });
  };
  fileUpload = filePath => {
    var reader = new FileReader();
    var url = reader.readAsDataURL(filePath);
    reader.onloadend = function(e) {
      this.setState({
        uploadPhotos: [reader.result]
      });
    }.bind(this);
  };
  removeImageHandler = () => {
    this.setState({
      uploadPhotos: []
    });
  };
  renderStage() {
    if (this.state.stage === 1) {
      return (
        <Create
          housingType={this.extendedHousingType}
          showProperty={this.state.createListing.housingTypeExtend}
          housingTypeValue={this.state.createListing.housingType}
          housingTypeCheckBoxValue={this.handleHousingTypeCheckBox}
          handleButton={this.handleStage}
        />
      );
    } else if (this.state.stage === 2) {
      return (
        <UploadPhoto
          handleButton={this.handleStage}
          fileChangedHandler={this.fileUpload}
          imageUrls={this.state.uploadPhotos}
          removeImage={this.removeImageHandler}
        />
      );
    } else if (this.state.stage === 3) {
      return (
        <ExtraInfo
          housingType={this.extendedHousingType}
          showProperty={this.state.createListing.housingTypeExtend}
          housingTypeValue={this.state.createListing.housingType}
          housingTypeCheckBoxValue={this.handleHousingTypeCheckBox}
          handleButton={this.handleStage}
        />
      );
    }
  }
  render() {
    return (
      <>
        <Helmet>
          <title>Speedrent | Create Listing</title>
        </Helmet>
        <Header {...this.props} info={["home", "create listing"]} />
        <HeadingTitle
          title={
            this.state.stage === 1
              ? "create listing"
              : this.state.stage === 2
              ? "upload photo"
              : "Extra Info"
          }
        />
        <section className="section-listing-progress">
          <div className="container">
            <div className="wrapper">
              <div id="progress">
                <div className="steps">{this.renderSteps()}</div>
                {this.renderStage()}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
