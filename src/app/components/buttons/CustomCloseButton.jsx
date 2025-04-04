import React from 'react';
import { Image, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Path, Svg } from 'react-native-svg';
import CrossSvg from '../CrossSvg';
import homeImages from '../../constants/homeImages';

export default function CustomCloseButton({ onPress, type, bgOpacity }) {
  const scaleDownAnimation = useSharedValue(1);

  const scaleHandler = Gesture.Tap()
    .onBegin(() => {
      'worklet';
      scaleDownAnimation.value = withSpring(0.9);
    })
    .onEnd(() => {
      'worklet';
      scaleDownAnimation.value = withSpring(1);
      runOnJS(onPress)(); // Execute the onPress function
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ scale: scaleDownAnimation.value }],
  }));

  return (
    <Animated.View style={animatedStyles}>
      <GestureDetector gesture={scaleHandler}>
        <View className="relative my-auto">
          {type === 2 ? (
            <Svg xmlns="http://www.w3.org/2000/svg" width="34" height="24" fill="none" viewBox="0 0 44 32">
              <Path fill="#918F8F" fillOpacity={bgOpacity === 'true' ? '0.2' : '1'} d="M44 0H0v23l9.5 9H44z"></Path>
            </Svg>
          ) : type === 3 ? (
            <Svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="none" viewBox="0 0 44 32">
              <Path fill="#918F8F" fillOpacity="1" d="M44 0H0v23l9.5 9H44z"></Path>
            </Svg>
          ) : (
            <Svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="none" viewBox="0 0 44 32">
              <Path fill={type == 2 ? '#918F8F33' : '#918F8F'} d="M0 0h44v23l-9.5 9H0z"></Path>
            </Svg>
          )}
          <View className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            {type === 3 ? (
              <Image source={homeImages.leftCroppedLogo} className="h-[10px] w-[10px]" />
            ) : (
              <CrossSvg />
            )}
          </View>
        </View>
      </GestureDetector>
    </Animated.View>
  );
}