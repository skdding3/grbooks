import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/antd.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import create from "./redux/create";
import { Provider } from "react-redux";

const store = create();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
