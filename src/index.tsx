import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "App";
import { GlobalStyles } from "ui";
import { store } from "store";
import { Provider } from "react-redux";
import { Title } from "components";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <Provider store={store}>
    <GlobalStyles />
    <Title />
    <App />
  </Provider>,
);
