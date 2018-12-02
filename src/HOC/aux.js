import React, { Component } from "react";
import Header from "../component/StickyHeader";
import MenuBar from "../component/StickyMenuBar";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { checkPath } from "../store/action/index";

class AUX extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.pathChecker();
  }

  render() {
    return (
      <div className="main-component">
        <Header {...this.props} />
        {this.props.children}
        <MenuBar />
      </div>
    );
  }
}
const mapStateToProps = null;

const mapDispatchToProps = dispatch => {
  return {
    pathChecker: () => dispatch(checkPath())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AUX)
);
