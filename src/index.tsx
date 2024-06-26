import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/main.scss";
import App from "./App";
import { Provider } from "react-redux";
import { setupStore } from "./store";

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
