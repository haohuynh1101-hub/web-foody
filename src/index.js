import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import axios from "axios";
import "./i18n";

axios.defaults.headers.common["Accept-language"] =
  localStorage.getItem("lang") || "en";
const store = configureStore();
ReactDOM.render(
  <Suspense fallback={<h2>...Loading</h2>}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
