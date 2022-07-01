import React, { Component } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import { ROCKET_DATA } from "../../Constant";
import NavigationActions from "../router/NavigationActions";

export default class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/backg.jpg")}
          style={styles.backgroundImage}
        >
          {this.renderAnimals()}
        </ImageBackground>
      </View>
    );
  }

  renderAnimals = () => {
    return (
      <FlatList
        data={ROCKET_DATA}
        numColumns={1}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this.renderItemAnimal}
      />
    );
  };

  renderItemAnimal = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this.onPressAnimal({ item })}>
        <Image source={item.url} style={styles.rocketImage} />
      </TouchableOpacity>
    );
  };

  onPressAnimal = ({ item }) => {
    NavigationActions.navigate("Paint", {
      paint: item.paint,
      item: item,
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  rocketImage: {
    position: "absolute",
    top: 250,
    left: 80,
  },
});
