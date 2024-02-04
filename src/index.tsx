import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.scss";
import { Provider } from "react-redux";
import store from "./App/redux/store";

const isDev = process.env.NODE_ENV === "development";

const checkMocking = async () => {
  if (isDev) {
    // Only import the mock service worker when in development mode
    // TODO: When we get a proper dev server we can add an environment variable to enable/disable this
    const { worker } = await import("./mocks/browser");

    return worker
      .start({
        onUnhandledRequest: "bypass",
      })
      .catch((error) =>
        console.error("Error setting up mock service worker: ", error),
      );
  }
};

const root = document.getElementById("root");
if (root) {
  checkMocking().then(() => {
    createRoot(root).render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });
} else {
  console.error("Root element not found.");
}
