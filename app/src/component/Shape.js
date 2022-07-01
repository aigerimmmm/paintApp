import * as React from "react";
import { Component } from "react";
import * as d3 from "d3";
import { Path, G, ClipPath, Defs, Use } from "react-native-svg";
import { listDataPush, pathDataPush } from "../actions/index";
import { connect } from "react-redux";

class Shape extends Component {
  constructor(props) {
    super(props);
  }

  Press(e, data) {
    if (data.isColor && this.props.isPaint) {
      this.props.pathDataPush({
        x: e.nativeEvent.locationX,
        y: e.nativeEvent.locationY,
      });
    }
  }

  Move(e, data) {
    if (data.isColor && this.props.isPaint) {
      this.props.pathDataPush({
        x: e.nativeEvent.locationX,
        y: e.nativeEvent.locationY,
      });
    }
  }

  Release(e, data, dataPath) {
    if (this.props.isPaint) {
      this.props.colorPenData.paintReducer.path = [];
      this.props.listDataPush({
        color: this.props.colorPenData.paintReducer.color,
        data: dataPath,
        strokeWidth: this.props.colorPenData.paintReducer.widthColor,
      });
    }
  }

  render() {
    const { data } = this.props;

    const lineFunction = d3
      .line()
      .x(function (p) {
        return p.x;
      })
      .y(function (p) {
        return p.y;
      })
      .curve(d3.curveCatmullRom.alpha(0.5));

    const dataPath = lineFunction(this.props.colorPenData.paintReducer.path);
    return (
      <G>
        <Defs>
            <Path  id={"path" + data.number}
                d = {data.d}
                stroke={"none"} 
                strokeWidth="0.8"
                opacity={data.opacity}         
                />

                <Use id={"shape" + data.number} href={"#path" + data.number} />
                <ClipPath id={"clip" + data.number}>
                  <Use transform={{  scale: 5}}  id={"shape" + data.number} href={"#path" + data.number} />
              </ClipPath>         
          </Defs>
          <Use  transform={{scale: 5}}   href={"#shape" + data.number}  fill="none" onMoveShouldSetResponder={() => true} onStartShouldSetResponder={() => true} onResponderMove={(e) => this.Move(e, data)} onResponderGrant={(e) => this.Press(e, data)} onResponderRelease={(e) => this.Release(e, data, dataPath)} />
        </G>


    );
  }
}

const mapStateToProps = (state) => ({
  colorPenData: state,
});
const mapDispatchToProps = {
  listDataPush,
  pathDataPush,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shape);
