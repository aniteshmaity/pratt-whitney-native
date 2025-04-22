import React from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native'
import {Gesture, GestureDetector} from "react-native-gesture-handler";
import Animated, {useAnimatedStyle, useSharedValue, withSpring} from 'react-native-reanimated'
import yearImages from '../../constants/yearImages';

export default function CustomTextButton({
  title,
  className,
  onPress,
  textClass,
  boxLeftClass ="w-[18px] h-[18px] -left-[9px]  -top-[9px] bg-white",
  boxRightClass="w-[18px] h-[18px] -right-[9px] -bottom-[9px] bg-white",
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
          <View className={`relative w-full h-full border rounded border-[#A10000] bg-[#D91027] text-white font-bold text-lg flex flex-row justify-center items-center gap-2 rounded-br rounded-tl z-0 shadow shadow-red-400`}>
            <View className={`  ${boxLeftClass} absolute border-r    rotate-45  border-[#A10000] z-10 `}/>
            <View
  className={`${boxRightClass} absolute   rotate-45 border-[#A10000] border-l z-10 `}
//   style={{

//     borderTopWidth: num === 0 ? 1 : 0, 
//     borderLeftWidth: num === 0 ? 0 : 1, 
// borderColor:"#595858"
//   }}
/>
            <Text className={`text-white ${textClass} font-frutigerReg`}>
              {title}
            </Text>
            {num!==0 && (
              <Image
                          source={yearImages.tringleArrow}
                          className="w-[10px] h-[10px]"
                          resizeMode="contain"
                        />
            )}
              
          </View>
        </TouchableOpacity>
      </GestureDetector>
    </Animated.View>
  )
}