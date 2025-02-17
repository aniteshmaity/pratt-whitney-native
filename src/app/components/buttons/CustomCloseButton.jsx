import React from 'react'
import {TouchableOpacity, View} from 'react-native'
import {Gesture, GestureDetector} from "react-native-gesture-handler";
import Animated, {useAnimatedStyle, useSharedValue, withSpring} from "react-native-reanimated";
import {Path, Svg} from "react-native-svg";
// import {useStore} from "zustand/react";
import CrossSvg from "../CrossSvg";

export default function CustomCloseButton({onPress,type})
{

  const scaleDownAnimation = useSharedValue(1);

  const scaleHandler = Gesture.Tap()
    .onBegin(() =>
    {
      "worklet";
      scaleDownAnimation.value = withSpring(0.9);
    })
    .onFinalize(() =>
    {
      "worklet";
      scaleDownAnimation.value = withSpring(1);
    });

  const animatedStyles = useAnimatedStyle(() => (
    {
      transform: [{ scale: scaleDownAnimation.value }],
    }
  ))

  return (
    <Animated.View style={animatedStyles}>
      <GestureDetector gesture={scaleHandler}>
        <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.9}
 
        >
          <View className="relative my-auto">
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="24"
              fill="none"
              viewBox="0 0 44 32"
            >
              <Path
                fill={type == 2 ? "#918F8F33" : "#918F8F"}
                d="M0 0h44v23l-9.5 9H0z"
              ></Path>
            </Svg>
            <View className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <CrossSvg/>
            </View>
          </View>
        </TouchableOpacity>
      </GestureDetector>
    </Animated.View>
  )
}