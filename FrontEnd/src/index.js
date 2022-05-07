import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import React from "react";
import store from "./Store";
import ThemeProvider from "./components/Dashboard/theme";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider >
    <HelmetProvider>
    <Provider store={store}>
      <App />
    </Provider>
    </HelmetProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
