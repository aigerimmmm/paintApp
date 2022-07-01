import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";

class ColorPen extends Component {
  render() {
    const { source, id, onPress } = this.props;
    let isShow = this.props.colorPenData.paintReducer.colorPen[id].isColor;

    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        style={[
          styles.circles,
          isShow ? styles.containerShowColor : styles.containerHideColor,
        ]}
      >
        <Image source={source} style={styles.img} />
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = (state) => ({
  colorPenData: state,
});

const styles = StyleSheet.create({
  containerHideColor: {
    marginHorizontal: -10,
  },
  containerShowColor: {
    marginTop: -35,
    marginHorizontal: 5,
  },
  img: {
    resizeMode: "center",
    width: 100,
    height: 70,
  },
  circles: {
    top: 100,
  },
});

export default connect(mapStateToProps)(ColorPen);
