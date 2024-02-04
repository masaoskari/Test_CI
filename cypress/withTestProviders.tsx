import React from "react";
import { Provider } from "react-redux";
import store from "../src/App/redux/store";

export const withTestProviders = (Component: JSX.Element) => {
  return <Provider store={store}>{Component}</Provider>;
};
