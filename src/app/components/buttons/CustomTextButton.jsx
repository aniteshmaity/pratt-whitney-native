import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {Gesture, GestureDetector} from "react-native-gesture-handler";
import Animated, {useAnimatedStyle, useSharedValue, withSpring} from 'react-native-reanimated'

export default function CustomTextButton({
  title,
  className,
  onPress,
  textClass,
  num
})
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
          className={`relative ${className}`}
          activeOpacity={1}
        >
          <View className={`w-full h-full border border-[#A10000] bg-[#D91027] text-white font-bold text-lg flex justify-center items-center rounded-br rounded-tl z-0 shadow shadow-red-400`}>
            <View className={`w-[18px] absolute ${num=== 0 ? "-right-[9px] border-b" : "-left-[9px] "} -top-[9px]  h-[18px] bg-white rotate-45  border-[#A10000] z-10`}/>
            <View className={`w-[18px] absolute -bottom-[9px] ${num=== 0 ? "-left-[9px] border-t" : "-right-[9px] "} h-[18px] bg-white rotate-45  border-[#A10000] z-10`}/>
            <Text className={`text-white ${textClass}`}>
              {title}
            </Text>
          </View>
        </TouchableOpacity>
      </GestureDetector>
    </Animated.View>
  )
}