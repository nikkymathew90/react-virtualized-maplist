import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./component/Layout";
import Dashboard from "./containers/Dashboard/Dashboard";

function App() {
  let routes = (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Redirect to="/" />
    </Switch>
  );
  return (
    <div className="App">
      <Layout>{routes}</Layout>
    </div>
  );
}

export default App;
