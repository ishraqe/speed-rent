import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HOC from "../HOC/aux";
import Home from "../container/Home";
import Search from "../container/Search/Search";

import Error from "../container/404";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <HOC>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
          </Switch>
        </HOC>
      </BrowserRouter>
    );
  }
}

export default Router;
