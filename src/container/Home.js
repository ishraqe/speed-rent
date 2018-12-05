import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "../component/Footer";
import Header from "../component/StickyHeader";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
export default class Home extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Speedrent | Rent a housing</title>
        </Helmet>
        <Header {...this.props} />
        <div id="home" className="default-margin-top">
          <section id="main-content">
            <div className="container">
              <div className="wrapper">
                <div className="content-container">
                  <div className="image-container">
                    <img src={require("../assets/img/home.png")} />
                    <div className="partnaership">
                      <div className="company">
                        <div className="logo-container">
                          <svg
                            className="logo"
                            id="Group_344"
                            data-name="Group 344"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 380.512 91.13"
                          >
                            <defs />
                            <g
                              id="Group_317"
                              data-name="Group 317"
                              transform="translate(0 0)"
                            >
                              <path
                                id="Path_315"
                                data-name="Path 315"
                                className="cls-1"
                                d="M37.676,91.205a2.442,2.442,0,0,1-1.333-.363,2.826,2.826,0,0,1-1.211-2.059L34.768,58.5a2.569,2.569,0,0,1,1.454-2.3l13.2-5.936a2.536,2.536,0,0,1,3.634,2.181L53.3,73.4a2.484,2.484,0,1,1-4.967.121l-.242-17.2-8.238,3.755.363,24.834L71.475,70.732,70.99,36.569,49.548,22.759,29.922,49.9l.485,38.524a2.6,2.6,0,0,1-1.333,2.3,2.4,2.4,0,0,1-2.665-.242L1.454,72.307a2.529,2.529,0,0,1-.969-1.938L0,33.42a2.3,2.3,0,0,1,.606-1.575l21.442-25.8a2.435,2.435,0,0,1,3.029-.606l13.81,7.147L38.766,7.5A2.288,2.288,0,0,1,40.1,5.314L49.184.348a2.566,2.566,0,0,1,2.3,0l4.24,2.059a2.413,2.413,0,0,1,1.333,2.181l.121,10.782a2.484,2.484,0,0,1-4.967.121l-.121-9.328-1.7-.848L43.854,8.949l.121,7.753a2.707,2.707,0,0,1-1.211,2.181A2.475,2.475,0,0,1,40.341,19L24.592,10.887,4.967,34.268l.485,34.768L25.319,83.573l-.485-34.4a2.115,2.115,0,0,1,.485-1.454L46.883,18.156a2.483,2.483,0,0,1,3.392-.606L74.746,33.3a2.38,2.38,0,0,1,1.09,2.059l.485,36.828a2.569,2.569,0,0,1-1.454,2.3L38.645,90.963a2.851,2.851,0,0,1-.969.242"
                                transform="translate(0 -0.075)"
                              />
                              <path
                                id="Path_316"
                                data-name="Path 316"
                                className="cls-1"
                                d="M82.1,45.705l1.575-1.817c3.513,3.271,6.784,4.846,11.63,4.846s8.117-2.665,8.117-6.421v-.121c0-3.392-1.817-5.451-9.086-6.905-7.753-1.575-10.9-4.24-10.9-9.086V26.08c0-4.846,4.361-8.48,10.418-8.48a16.317,16.317,0,0,1,11.024,3.877L103.3,23.415a13.686,13.686,0,0,0-9.691-3.634c-4.725,0-7.874,2.665-7.874,6.057v.121c0,3.392,1.7,5.451,9.449,7.026,7.511,1.575,10.661,4.24,10.661,8.965v.121c0,5.209-4.482,8.843-10.661,8.843-5.209,0-9.207-1.817-13.083-5.209"
                                transform="translate(17.359 3.63)"
                              />
                              <path
                                id="Path_317"
                                data-name="Path 317"
                                className="cls-1"
                                d="M107.9,18h11.751c7.147,0,11.993,3.634,11.993,9.934v.121c0,6.784-5.815,10.3-12.6,10.3h-8.722V50.345H107.9Zm11.266,18.05c6.057,0,10.055-3.15,10.055-8v-.121c0-5.088-4-7.753-9.813-7.753h-9.086V36.05Z"
                                transform="translate(22.814 3.715)"
                              />
                              <path
                                id="Path_318"
                                data-name="Path 318"
                                className="cls-1"
                                d="M132.9,18h23.017v2.181H135.323V32.9h18.535v2.181H135.323V48.044H156.16v2.3H132.9Z"
                                transform="translate(28.1 3.715)"
                              />
                              <path
                                id="Path_319"
                                data-name="Path 319"
                                className="cls-1"
                                d="M158.1,18h23.017v2.181H160.523V32.9h18.414v2.181H160.523V48.044h20.716v2.3H158.1Z"
                                transform="translate(33.428 3.715)"
                              />
                              <path
                                id="Path_320"
                                data-name="Path 320"
                                className="cls-1"
                                d="M183.2,18h10.782c10.176,0,17.2,7.026,17.2,16.112v.121c0,9.086-7.026,16.112-17.2,16.112H183.2Zm10.782,30.044c8.965,0,14.658-6.178,14.658-13.81v-.121c0-7.632-5.694-13.932-14.658-13.932h-8.359V48.044Z"
                                transform="translate(38.735 3.715)"
                              />
                              <path
                                id="Path_321"
                                data-name="Path 321"
                                className="cls-1"
                                d="M211.9,18h14.78c4.119,0,7.269,1.211,9.449,3.271a10.151,10.151,0,0,1,2.786,7.39v.121a10.106,10.106,0,0,1-6.905,10.055l7.874,11.509h-8.359l-6.905-10.3h-5.573v10.3H211.9V18Zm14.295,15.749c3.513,0,5.451-1.817,5.451-4.6v-.121c0-3.029-2.181-4.6-5.573-4.6h-7.026v9.328Z"
                                transform="translate(44.803 3.715)"
                              />
                              <path
                                id="Path_322"
                                data-name="Path 322"
                                className="cls-1"
                                d="M239,18h24.471v6.3H246.147v6.542H261.29v6.421H246.147v6.784h17.566v6.3H239Z"
                                transform="translate(50.533 3.715)"
                              />
                              <path
                                id="Path_323"
                                data-name="Path 323"
                                className="cls-1"
                                d="M264.2,18h6.542l15.143,19.868V18h7.026V50.345h-6.057L271.226,29.751V50.345H264.2Z"
                                transform="translate(55.861 3.715)"
                              />
                              <path
                                id="Path_324"
                                data-name="Path 324"
                                className="cls-1"
                                d="M301.813,24.542H292V18h26.773v6.542H308.96v25.8h-7.147Z"
                                transform="translate(61.739 3.715)"
                              />
                            </g>
                          </svg>

                          <span className="sub">in partnership with</span>
                        </div>
                      </div>
                      <div className="partner">
                        <svg
                          className="logo"
                          id="Group_341"
                          data-name="Group 341"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 279.515 72.085"
                        >
                          <defs />
                          <g
                            id="Group_340"
                            data-name="Group 340"
                            transform="translate(0 0)"
                          >
                            <path
                              id="Path_331"
                              data-name="Path 331"
                              className="cls-1"
                              d="M24.862,34.78H15.594l5-16.33ZM10.739,53.17l3.236-10.886h12.5L29.423,53.17H41.045L29.423,11.831C28.834,9.477,27.363,8.3,24.715,8.3H8.385v3.825H9.709c1.765,0,2.648.736,2.648,2.06a10.18,10.18,0,0,1-.883,3.678L0,53.17Z"
                              transform="translate(0 3.91)"
                            />
                            <path
                              id="Path_332"
                              data-name="Path 332"
                              className="cls-1"
                              d="M41.84,53.122V11.784C41.84,9.577,40.663,8.4,38.6,8.4h-10v3.825h.736c1.765,0,2.5.736,2.5,2.5V53.27h10Z"
                              transform="translate(13.474 3.958)"
                            />
                            <path
                              id="Path_333"
                              data-name="Path 333"
                              className="cls-1"
                              d="M54.14,53.122V11.784C54.14,9.577,52.963,8.4,50.9,8.4h-10v3.825h.736c1.765,0,2.5.736,2.5,2.5V53.27h10Z"
                              transform="translate(19.269 3.958)"
                            />
                            <path
                              id="Path_334"
                              data-name="Path 334"
                              className="cls-1"
                              d="M66.34,12.608c0-2.942-2.06-4.708-5.737-4.708s-5.737,1.765-5.737,4.708,2.207,4.708,5.737,4.708C64.281,17.315,66.34,15.55,66.34,12.608Zm0,40.75V22.906c0-2.207-1.177-3.531-3.236-3.531h-10v4.119h.588c1.765,0,2.5.736,2.5,2.5V53.358H66.34Z"
                              transform="translate(25.017 3.722)"
                            />
                            <path
                              id="Path_335"
                              data-name="Path 335"
                              className="cls-1"
                              d="M83.406,33.648v6.473c-1.765,1.765-3.825,2.942-5.737,2.942s-2.5-.883-2.5-3.384.588-3.678,2.354-4.413A26.945,26.945,0,0,1,83.406,33.648Zm-13.829-7.8A25.407,25.407,0,0,1,79.729,23.2c2.8,0,3.825,1.03,3.825,3.972v.736c-4.119.736-5.443.883-7.8,1.471a16.8,16.8,0,0,0-3.825,1.324c-4.119,1.618-6.032,5-6.032,10,0,6.326,2.648,9.415,8.238,9.415a15.588,15.588,0,0,0,5.443-1.03,17.387,17.387,0,0,0,4.413-2.942v.441c0,2.06,1.03,3.236,3.089,3.236h9.562V46.005h-.441c-1.765,0-2.5-.736-2.5-2.8V27.175c0-8.533-2.942-11.475-11.328-11.475a36.521,36.521,0,0,0-7.944.883,30.479,30.479,0,0,0-7.061,2.648Z"
                              transform="translate(31.048 7.397)"
                            />
                            <path
                              id="Path_336"
                              data-name="Path 336"
                              className="cls-1"
                              d="M101.54,49.824v-22.8a7.724,7.724,0,0,1,5.885-2.8c2.354,0,2.942.883,2.942,4.266V49.972h10.151V26.728c0-5.3-.441-7.061-2.06-8.974-1.471-1.618-3.531-2.354-6.326-2.354-4.119,0-7.061,1.324-11.033,5.149V19.225c0-2.207-1.03-3.384-3.089-3.384H88.3v4.119h.588c1.765,0,2.5.736,2.5,2.5V49.824H101.54Z"
                              transform="translate(41.601 7.255)"
                            />
                            <path
                              id="Path_337"
                              data-name="Path 337"
                              className="cls-1"
                              d="M139.892,42.68H125.475L139.3,23.114V16.2H117.531c-2.5,0-3.531,1.177-3.531,3.678v6.032h4.119v-.588c0-1.471.736-2.354,2.5-2.354h7.356L114,42.68v6.767h26.039V42.68Z"
                              transform="translate(53.709 7.632)"
                            />
                            <path
                              id="Path_338"
                              data-name="Path 338"
                              className="cls-1"
                              d="M182.062,55.02V17.654c0-2.942-1.03-3.972-3.825-3.972h-8.385v3.972h1.324a1.272,1.272,0,0,1,.883.441c.441.441.441.883.441,1.912V54.873h9.562Zm4.708,0h9.562V26.627c0-2.8-1.03-3.972-3.972-3.972h-5.59Zm-18.242,0V22.655h-5.59c-2.8,0-3.825,1.177-3.825,3.972V55.02Zm37.367-18.978c0,16.918-12.063,29.276-28.54,29.276s-28.54-12.358-28.54-29.276,12.063-29.276,28.54-29.276S205.894,19.125,205.894,36.043Zm6.767,0C212.661,15.447,197.509,0,177.354,0,157.053,0,141.9,15.447,141.9,36.043c0,20.743,15.153,36.043,35.454,36.043C197.509,72.085,212.661,56.639,212.661,36.043Z"
                              transform="translate(66.854)"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="info-container">
                    <div className="each-info">
                      <h1 className="each-info__title">Landloard</h1>
                      <p className="each-info__desc">
                        Rent out and <br /> get secured part.
                      </p>
                      <a className="each-info__link">Learn more</a>
                      <Link to="/create-listing" className="each-info__button">
                        Create listing
                        <FontAwesomeIcon
                          className="each-info__button-icon"
                          icon={faArrowRight}
                        />
                      </Link>
                    </div>
                    <div className="each-info">
                      <h1 className="each-info__title">Tenant</h1>
                      <p className="each-info__desc">
                        Rent a house <br />
                        with no deposit.
                      </p>
                      <a className="each-info__link">Learn more</a>
                      <button className="each-info__button">
                        Search house
                        <FontAwesomeIcon
                          className="each-info__button-icon"
                          icon={faArrowRight}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border" />
            </div>
          </section>
          <section id="main-buttons">
            <div className="container">
              <div className="wrapper">
                <ul className="mainButton-lists">
                  <li className="mainButton-lists__item">
                    <a className="mainButton-lists__item-link">Blog</a>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="mainButton-lists__item-icon"
                    />
                  </li>
                  <li className="mainButton-lists__item">
                    <a className="mainButton-lists__item-link">Hot Areas</a>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="mainButton-lists__item-icon"
                    />
                  </li>
                  <li className="mainButton-lists__item">
                    <a className="mainButton-lists__item-link">Media</a>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="mainButton-lists__item-icon"
                    />
                  </li>
                  <li className="mainButton-lists__item">
                    <a className="mainButton-lists__item-link">Browse</a>
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="mainButton-lists__item-icon"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </>
    );
  }
}
