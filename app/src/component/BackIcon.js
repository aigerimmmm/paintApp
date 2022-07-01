import React, { Component } from "react";
import NavigationActions from "../router/NavigationActions";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

export default class BackIcon extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.onPress}>
        <Image source={require("../assets/ic_back.png")} />
      </TouchableOpacity>
    );
  }

  onPress = () => {
    const { onPress } = this.props;
    if (onPress) {
      onPress();
    } else {
      NavigationActions.goBack();
    }
  };
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    backgroundColor: "#E11584",
    borderRadius: 40,
    height: 36,
    width: 36,
    justifyContent: "center",
    alignItems: "center"
  },
});
