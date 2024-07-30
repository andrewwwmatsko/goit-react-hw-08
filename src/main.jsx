import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { NextUIProvider } from "@nextui-org/system";

import App from "./components/App/App";

import { store } from "./redux/store";

import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
