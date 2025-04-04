import { useState } from 'react';
import { Text, View, Image } from 'react-native';
import Svg, { Defs, ClipPath, Polygon } from 'react-native-svg';
import yearImages from '../../constants/yearImages';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const MyTextBtn = ({ title, onPress, className, textClass, bg }) => {
  const scaleDownAnimation = useSharedValue(1);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

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

  // Handle layout changes to get button dimensions
  const handleLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    setDimensions({ width, height });
  };

  const { width, height } = dimensions;

  // Dynamically calculated polygon points
  const polygonPoints = `${0.09 * width},0 ${width},0 ${width},${height} ${width},${0.65 * height} ${0.91 * width},${height} ${width},${height} 0,${height} 0,${0.36 * height}`;

  return (
    <Animated.View style={animatedStyles}>
      <GestureDetector gesture={scaleHandler}>
        <View
          onLayout={handleLayout}
          className={`relative ${className}`}
        >
          {width > 0 && height > 0 && (
            <Svg width={width} height={height} className="absolute">
              <Defs>
                <ClipPath id="clipPolygon">
                  <Polygon points={polygonPoints} />
                </ClipPath>
              </Defs>
              <Polygon
                points={polygonPoints}
                fill={bg === 'black' ? '#393637' : '#E11C37'}
                clipPath="url(#clipPolygon)"
              />
            </Svg>
          )}
          <View className="absolute inset-0 gap-1 flex flex-row justify-center items-center">
            <Text className={`text-white font-bold ${textClass} font-frutigerReg`}>
              {title}
            </Text>
            <Image
              source={yearImages.tringleArrow}
              className="w-[10px] h-[10px]"
              resizeMode="contain"
            />
          </View>
        </View>
      </GestureDetector>
    </Animated.View>
  );
};

export default MyTextBtn;