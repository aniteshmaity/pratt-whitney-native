import { useEffect, useState } from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import Svg, { Defs, ClipPath, Polygon, Path } from "react-native-svg";
import yearImages from "../../constants/yearImages";
import {Gesture, GestureDetector} from "react-native-gesture-handler";
import Animated, {useAnimatedStyle, useSharedValue, withSpring} from 'react-native-reanimated'


const MapTextBtn = ({ title, onPress, className, textClass, isActive }) => {

    const scale = useSharedValue(isActive ? 1.3 : 1);
    const textPosition = useSharedValue(isActive ? 50 : 0);
    const textPositionY = useSharedValue( 50);
  
  useEffect(() => {
      scale.value = isActive ? withSpring(1.3) : withSpring(1);
      textPosition.value = isActive ? withSpring(50) : withSpring(0);
      textPositionY.value = withSpring(50);
    }, [isActive]);
  

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const handleLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    setDimensions({ width, height });
  };

  const { width, height } = dimensions;

  // Dynamically calculated polygon points
  const polygonPoints = `${0.09 * width},0 ${width},0 ${width},${height} ${width},${0.65 * height} ${0.91 * width},${height} ${width},${height} 0,${height} 0,${0.36 * height}`;

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scaleX: scale.value }, // Scale only expands right
        { scaleY: scale.value }, // Scale expands up/down
        { translateX: (scale.value - 1) * width / 2 }, // Push right instead of center
      ],
    };
  });  

    
      // Text animation (moves from left to center)
     
const textAnimatedStyle = useAnimatedStyle(() => ({
    left: `${textPosition.value}%`, // Keep left for initial position
    transform: [{ translateX: `-${textPosition.value}%` },{ translateY: `-${textPositionY.value}%` }], // Use translateX for animation
  }));
  

  return (
      <Animated.View style={animatedStyle} className="w-[140px]">
  
    <TouchableOpacity
      onPress={onPress}
      className={`relative ${className} `}
      onLayout={handleLayout}
    >
      {width > 0 && height > 0 && (
        <Svg width={width} height={height} className="absolute">
          <Defs>
            <ClipPath id="clipPolygon">
              <Polygon points={polygonPoints} />
            </ClipPath>
          </Defs>
          <Polygon points={polygonPoints} fill= {isActive ? "#E11C37" : "white"} clipPath="url(#clipPolygon)" />
        </Svg>
      )}
      {/* <Text className={`text-white font-bold ${textClass} font-frutigerReg`}>{title}</Text> */}
     <Animated.View className="absolute  gap-1  flex flex-row items-center justify-center top-1/2 " style={[textAnimatedStyle]}>
     {/* <Image source={yearImages.tringleArrow} className="w-[10px] h-[10px]" resizeMode="contain" /> */}
     <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="8"
    height="9"
    fill="none"
    viewBox="0 0 8 9"
  >
    <Path fill={isActive ? "white" : "#D91027"} d="M8 4.5.5.17v8.66z"></Path>
  </Svg>
        <Text className={`${isActive ? "text-white" : ""} font-bold ${textClass} font-frutigerReg `}>{title}</Text>
      
      </Animated.View> 

    </TouchableOpacity>

        </Animated.View>
  );
};

export default MapTextBtn;