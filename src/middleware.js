import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "./component/landing-page/Index";

class Middleware extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" render={() => <LandingPage />} />
       
            <Route exact path="*" component={LandingPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Middleware;
