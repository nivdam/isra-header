import { StrictMode } from "react";
import ReactDOM from "react-dom";

import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import App from "./App";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin]
});

const theme = createTheme({
  direction: "rtl", // Both here and <body dir="rtl">
  palette: {
    primary: {
      main: "#17a19a" //
    },
    secondary: {
      main: "#662083"
    }
  },
  typography: {
    htmlFontSize: 18,
    fontFamily: "'Assistant', sanse-serif",
    fontSize: 14
  }
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CacheProvider value={cacheRtl}>
        <App />
      </CacheProvider>
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
