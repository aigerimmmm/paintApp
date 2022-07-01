import React, { Component } from "react";
import { View } from "react-native";
import { AppContainer } from "./src/router/AppRouter";
import NavigationActions from "./src/router/NavigationActions";

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppContainer
          ref={(ref) => NavigationActions.setTopLevelNavigator(ref)}
        />
      </View>
    );
  }
}
