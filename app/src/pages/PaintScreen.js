import React, { Component } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Button,
  ImageBackground,
} from "react-native";
import Svg from "react-native-svg";
import PenColor from "../component/PenColor";
import Shape from "../component/Shape";
import ColoredShape from "../component/ColoredShape";
import { COLOR_DATA } from "../../Constant";
import BackIcon from "../component/BackIcon";
import { setColor, setColorPen } from "../actions/index";
import { connect } from "react-redux";
import * as MediaLibrary from "expo-media-library";
import ViewShot from "react-native-view-shot";

class PaintScreen extends Component {
  render() {
    const { navigation } = this.props;
    const item = navigation.getParam("item");
    const paint = navigation.getParam("paint");

    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/star.jpg")}
          style={styles.backgroundImage}
        >
          <BackIcon />
          <View style={styles.header}>
            <Button
              color="#FFFFFF"
              onPress={() => this.onPressTakePhoto()}
              title="Save"
            />
          </View>
          <ViewShot ref="viewShot" options={{ format: "jpg", quality: 0.9 }}>
            <View>
              <View style={styles.aika}>
              <Svg width={400} height={400}>
                {item.data.map((itemData, index) => (
                  <ColoredShape paint={paint} data={itemData} key={index} />
                ))}
              </Svg>
              <View style={styles.img}>
                <Svg width={400} height={400}>
                  {item.data.map((itemData, index) => (
                    <Shape
                      paint={paint}
                      data={itemData}
                      isPaint={true}
                      key={index}
                    />
                  ))}
                </Svg>
              </View>
              </View>
            </View>
          </ViewShot>

          <View style={styles.color}>
            <FlatList
              data={COLOR_DATA}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              numColumns={1}
              renderItem={this.renderItemPen}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }

  onPressTakePhoto = () => {
    this.refs.viewShot.capture().then((uri) => {
      MediaLibrary.saveToLibraryAsync(uri);
    });
  };

  renderItemPen = ({ item, index }) => {
    let source = item.img;
    return (
      <PenColor
        source={source}
        id={item.id}
        onPress={this.onPress(item)}
        key={index}
      />
    );
  };

  onPress(item) {
    return () => {
      this.props.setColor(item.color);
      this.props.setColorPen(item.id);
    };
  }
}

const mapDispatchToProps = {
  setColor,
  setColorPen,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    position: "absolute",
    height: 350,
    width: 100,
  },
  color: {
    height: 200,
    position: "absolute",
    bottom: 0,
    left: 30,
  },
  penColor: {
    flex: 1,
    paddingBottom: 150,
    height: 100,
    alignItems: "center",
  },
  header: {
    position: "absolute",
    right: 0,
    top: 80,
    backgroundColor: "#E11584",
    borderRadius: 40,
    height: 36,
    width: 66,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  aika: {
    top: 10,
    left: 50,
  },
});

export default connect(null, mapDispatchToProps)(PaintScreen);
