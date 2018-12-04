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
    stageOne: {
      housingTypeExtend: false
    }
  };
  extendedHousingType = status => {
    this.setState({
      stageOne: {
        housingTypeExtend: status
      }
    });
  };
  renderStage() {
    if (this.state.stage === 1) {
      return (
        <Create
          housingType={this.extendedHousingType}
          showProperty={this.state.stageOne.housingTypeExtend}
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
          <HeadingTitle title="create listing" />
          <section className="main-content">
            <div className="container">
              <div className="wrapper">
                <div className="FormContent">
                  <div className="steps">
                    <ul id="progressbar">
                      <li class="active">Create Listing</li>
                      <li class="active">Upload Photo</li>
                      <li>Extra Info</li>
                    </ul>
                  </div>
                  <form>{this.renderStage()}</form>
                  <div className="buttonContainer">
                    <Button title="Create" />
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
