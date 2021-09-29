import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HomePage from "./pages/Home/index";
import ListPage from "./pages/Home/ListPage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="wrapper">
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/listpage" component={ListPage}></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;

ReactDOM.render(
    <App />,
  document.getElementById("root")
);