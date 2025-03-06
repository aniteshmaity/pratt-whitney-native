import React from "react";
import { View } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

const RedDotSvg = ({width,height,className}) => {
  return (
    <View className={className}>
      <Svg width={width} height={height} viewBox="0 0 13 14" fill="none">
      <Ellipse cx={6.487} cy={7.139} rx={6.253} ry={6.25} fill="black" fillOpacity={0.1} />
      <Ellipse cx={6.488} cy={7.139} rx={3.474} ry={3.472} fill="#D91027" />
    </Svg>
    </View>
  );
};

export default RedDotSvg;