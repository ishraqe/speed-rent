import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div id="home">
        <div className="container">
          <div className="wrapper">
            <section className="login-button-container">
              <button className="login-button">Login</button>
            </section>
            <section className="main-content">
              <div className="content-container">
                <div
                  className="image-container"
                  style={{
                    backgroundImage: `url(${"https://upload.wikimedia.org/wikipedia/commons/9/96/Vasskertentrance.jpg"})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                  }}
                />
                <div className="info-container">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quaerat, eaque?
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
