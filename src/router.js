import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout.jsx";
import List from "./pages/list.jsx";
import Detail from "./pages/detail.jsx";

export default function Base(props) {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <BaseLayout>
            <Switch>
              <Route exact path="/">
                <List />
              </Route>
              <Route path="/detail">
                <Detail />
              </Route>
            </Switch>
          </BaseLayout>
        </Route>
      </Switch>
    </Router>
  );
}
