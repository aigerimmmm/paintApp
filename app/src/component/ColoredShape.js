import * as React from "react";
import { Component } from "react";
import { Path, G, ClipPath, Defs, Use } from "react-native-svg";
import { connect } from "react-redux";

class ColoredShape extends Component {
  render() {
    const { data } = this.props;

    return (
<G>
        <Defs>
            <Path  id={"path" + data.number}
                d = {data.d}
                stroke={data.stroke} 
                strokeWidth="0.8"
                opacity={data.opacity}         
                />

                <Use id={"shape" + data.number} href={"#path" + data.number} />
                <ClipPath id={"clip" + data.number}>
                  <Use transform={{  scale: 5}}  id={"shape" + data.number} href={"#path" + data.number} />
              </ClipPath>         
          </Defs>

         <Use transform={{scale: 5}}   href={"#shape" + data.number}  fill={data.fill} />
         
         <G clipPath={"url(#clip" + data.number + ")"}>
          {
            this.props.colorPenData.paintReducer.listData.map((item, index) =>
            <Path transform={{ scale: 1}}
              key={index}
              d={item.data}
              fill="none"
              stroke={item.color}
              strokeWidth={item.strokeWidth}
              strokeLinejoin="round"
              strokeLinecap="round"
            />)
          }
          <Path
              d={""}
              fill="none"
              stroke={this.props.colorPenData.paintReducer.color}
              //strokeWidth={this.props.paintStore.strokeColor}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
         </G> 
        </G>
    );
  }
}

const mapStateToProps = (state) => ({
  colorPenData: state,
});

export default connect(mapStateToProps)(ColoredShape);
