import React, { Component } from "react";
import Header from "../../component/StickyHeader";
import HeadingTitle from "../../component/HeadingTitle";
import Button from "../../component/Button";

// Listing Component
import Create from "./Component/create";
import ExtraInfo from "./Component/extraInfo";
import UploadPhoto from "./Component/uploadPhoto";

export default class Listing extends Component {
  state = {
    stage: 1,
    headingTitle: "create listing",
    createListing: {
      housingTypeExtend: false,
      housingType: "Housing Type"
    }
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
    console.log(value);
    this.setState({
      createListing: {
        housingType: value,
        housingTypeExtend: true
      }
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
        />
      );
    } else if (this.state.stage === 2) {
      return <UploadPhoto />;
    } else if (this.state.stage === 3) {
      return <ExtraInfo />;
    }
  }
  render() {
    return (
      <>
        <Header {...this.props} info={["home", "create listing"]} />
        <div id="ListingContainer" className="default-margin-top">
          <HeadingTitle
            title={
              this.state.stage === 1
                ? "create listing"
                : this.state.stage === 2
                ? "upload photo"
                : "Extra Info"
            }
          />
          <section className="main-content">
            <div className="container">
              <div className="wrapper">
                <div className="FormContent">
                  <div className="steps">{this.renderSteps()}</div>
                  <form>{this.renderStage()}</form>
                  <div className="buttonContainer">
                    <Button title="Create" onClick={() => this.handleStage()} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}
