import { View } from 'react-native';
import React from 'react';
import yearImages from '../../constants/yearImages';
import Svg, { Image as SvgImage, ClipPath, Defs, Polygon, Rect } from 'react-native-svg';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export default function PrevNextButton({ onPress, isColor, isIcon, isPolygon, isWidth }) {
  const scaleDownAnimation = useSharedValue(1);

  // Tap gesture handler
  const scaleHandler = Gesture.Tap()
    .onBegin(() => {
      'worklet';
      scaleDownAnimation.value = withSpring(0.9); // Scale down on tap begin
    })
    .onEnd(() => {
      'worklet';
      scaleDownAnimation.value = withSpring(1); // Scale back to original size
      runOnJS(onPress)(); // Execute the onPress function
    });

  // Animated styles for scaling
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ scale: scaleDownAnimation.value }],
  }));

  // Determine background color based on `isColor`
  const bgColor = isColor === 'red' ? '#D91027' : isColor === 'grey' ? '#918F8F' : 'transparent';

  // Determine icon based on `isIcon`
  const Icon = isIcon === 'prev' ? yearImages.leftArrow : isIcon === 'next' ? yearImages.rightArrow : null;

  // Dynamic width & height
  const size = isWidth === 'small' ? 16 : 27;
  const arrowSize = isWidth === 'small' ? 10 : 12;

  // Define clipPath points based on `isPolygon`
  const clipPathPoints =
    isPolygon === 'first'
      ? `0,0 ${size},0 ${size},${size} ${size * 0.2},${size} 0,${size * 0.8}` // Polygon for "first"
      : `0,0 ${size * 0.8},0 ${size},${size * 0.2} ${size},${size} 0,${size}`; // Polygon for "second"

  return (
    <Animated.View style={animatedStyles}>
      <GestureDetector gesture={scaleHandler}>
        <View
          style={{
            width: size,
            height: size,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Svg width={size} height={size}>
            <Defs>
              <ClipPath id="clip">
                <Polygon points={clipPathPoints} />
              </ClipPath>
            </Defs>
            {/* Apply Clipped Background */}
            <Rect width={size} height={size} fill={bgColor} clipPath="url(#clip)" />
            {/* Render the icon if it exists */}
            {Icon && (
              <SvgImage
                href={Icon}
                width={arrowSize}
                height={arrowSize}
                clipPath="url(#clip)"
                x={(size - arrowSize) / 2} // Center the image horizontally
                y={(size - arrowSize) / 2} // Center the image vertically
              />
            )}
          </Svg>
        </View>
      </GestureDetector>
    </Animated.View>
  );
}