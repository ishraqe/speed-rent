import React from "react";
import { makeFirstLetterCap } from "../Utils";

const path = data => {
  if (data.info) {
    const { info } = data;
    return info.map((el, i) => {
      return <a key={i}>{makeFirstLetterCap(el)}</a>;
    });
  }
  return null;
};

const Header = props => {
  return (
    <header id="sticky-header">
      <div className="container">
        <div className="wrapper">
          <div className="nav-container">
            <svg
              className="logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 102.887 120"
            >
              <path
                id="Path_199"
                data-name="Path 199"
                className="cls-1"
                d="M50.752,119.986a3.385,3.385,0,0,1-1.834-.5,3.255,3.255,0,0,1-1.562-2.726l-.5-39.785a3.263,3.263,0,0,1,1.977-3.02l17.8-7.842a3.38,3.38,0,0,1,3.181.224,3.223,3.223,0,0,1,1.548,2.726L71.7,96.682A3.354,3.354,0,0,1,65,96.766l-.287-22.618L53.59,79.027l.416,32.641L96.163,92.95,95.59,48.091,66.773,30.016,40.263,65.593l.645,50.7a3.264,3.264,0,0,1-1.82,2.95,3.411,3.411,0,0,1-3.511-.266L1.989,95.117a3.214,3.214,0,0,1-1.376-2.6L0,44.009A3.256,3.256,0,0,1,.771,41.87L29.76,8.012A3.4,3.4,0,0,1,33.872,7.2l18.643,9.38-.086-6.71A3.3,3.3,0,0,1,54.163,6.95L66.386.394A3.414,3.414,0,0,1,69.567.366L75.2,3.245A3.3,3.3,0,0,1,77,6.1l.186,14.175a3.354,3.354,0,0,1-6.706.084L70.327,8.138l-2.278-1.16-8.884,4.767.129,10.2A3.25,3.25,0,0,1,57.7,24.773a3.478,3.478,0,0,1-3.31.126L33.184,14.219,6.718,45.127,7.291,90.8,34.1,109.837l-.573-45.251a3.127,3.127,0,0,1,.645-1.957l29.017-38.96a3.4,3.4,0,0,1,4.528-.825l33,20.7a3.2,3.2,0,0,1,1.533,2.712L102.884,95a3.272,3.272,0,0,1-1.963,3.019L52.085,119.692A3.135,3.135,0,0,1,50.752,119.986Z"
                transform="translate(0.004 0.014)"
              />
            </svg>
            <div className="input-container">
              <input
                type="text"
                placeholder="Search by location, property name"
                className="input"
                onFocus={() => props.history.push("/search")}
              />
            </div>
          </div>
        </div>
      </div>
      <section className="path-button-container">
        <div className="path-container">{path(props)}</div>
        <button className="login-button">Login</button>
      </section>
    </header>
  );
};

export default Header;
