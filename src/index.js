import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Router from "./router";

import Styles from "./core/globalStyles";
import reducers from './store/reducers';

const store = createStore(reducers, applyMiddleware(thunk));

const App = () => (
  <BrowserRouter>
    <Styles />
    <Router />
  </BrowserRouter>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);