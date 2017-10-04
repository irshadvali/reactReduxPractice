/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry } from "react-native";
import App from "./src/App";
import configureStore from "./src/store/configStore";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = configureStore();

export default class reactReduxPractice extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}



AppRegistry.registerComponent('reactReduxPractice', () => reactReduxPractice);
