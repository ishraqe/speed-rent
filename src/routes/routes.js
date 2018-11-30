import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import HOC from "../HOC/aux";
import Home from "../container/Home";
import Error from "../container/404";

class Router extends Component {
  render() {
    return (
      <HOC>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </HOC>
    );
  }
}

export default Router;
