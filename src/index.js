import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ContactUsForm from "../src/pages/ContactUsForm";
import Login from "../src/pages/login";
import Administration from "../src/pages/administration";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { Provider } from "react-redux";
import store from "./redux/redux_store";

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={ContactUsForm} />
        <Route path="/login" component={Login} />
        <Route path="/administration" component={Administration} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("root")
);
