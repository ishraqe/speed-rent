import React from "react";
import ReactDOM from "react-dom";
import "./assets/index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./store/reducer";
import Favicon from "react-favicon";
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <>
        <Favicon url="./assets/img/logo.svg" />
        <App />
      </>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
