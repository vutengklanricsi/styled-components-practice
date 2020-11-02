import React from "react";
import { render } from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./theme/globalStyles";
import Theme from "./theme/theme";

render(
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
