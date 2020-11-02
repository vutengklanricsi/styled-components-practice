import React from "react";
import { render } from "react-dom";
import App from "./App";
import GlobalStyles from "./theme/globalStyles";

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);
