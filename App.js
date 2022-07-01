import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./app/src/reducers";
import App from "./app/App";

const store = createStore(rootReducer);

export default function AppProvider() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
