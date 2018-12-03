import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "../layout/mainLayout";
import Home from "../container/Home";
import Search from "../container/Search/Search";
import Listing from "../container/Listing/Listing";

import Error from "../container/404";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/create-listing" component={Listing} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default Router;
