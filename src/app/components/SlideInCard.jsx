import React, { useEffect, useRef, useState } from 'react';
import { Text, Dimensions, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import ClippedView from './ClippedView';
import VideoComponent from "../components/VideoComponent";
import ProductCard from './ProductCard';
import { productEngines } from '../constants/productEngineData';
import ProductEngineDetails from './ProductEngineDetails';
import { router } from 'expo-router';


const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const SlideInCard = ({ selectedItem, scrollDirection, middleIndex, handleExploreClick }) => {

  console.log("Select ITEM ", selectedItem);
  const translateY = useSharedValue(SCREEN_HEIGHT * 0.22);
  const opacity = useSharedValue(1);
  const scale = useSharedValue(1);

  useEffect(() => {
  if (!selectedItem?.engine) return;

    translateY.value = scrollDirection === 'up' ? SCREEN_HEIGHT : -SCREEN_HEIGHT;
    opacity.value = 0;
    scale.value = 0.9;

    requestAnimationFrame(() => {
      translateY.value = withTiming(SCREEN_HEIGHT * 0.22, { duration: 200 });
      opacity.value = withTiming(1, { duration: 200 });
      scale.value = withTiming(1, { duration: 200 });
    });
  }, [selectedItem?.engine]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: translateY.value },
      { scale: scale.value },
    ],
    opacity: opacity.value,
  }));

  if (!selectedItem) return null;

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          height: SCREEN_HEIGHT * 0.65,
          width: SCREEN_WIDTH * 0.6,
          right: SCREEN_WIDTH * 0.09,
          // backgroundColor: 'white',
          // borderRadius: 20,
          // shadowColor: '#000',
          // shadowOffset: { width: 0, height: 4 },
          // shadowOpacity: 0.3,
          // shadowRadius: 5,
          // elevation: 8,
          // justifyContent: 'center',
          // alignItems: 'center',
          marginTop: SCREEN_WIDTH * 0.01,
        },
        animatedStyle,
      ]}
    >
      <ClippedView width={SCREEN_WIDTH * 0.6} height={SCREEN_HEIGHT * 0.65} backgroundColor="white" clipPathId="Cardclip" slug="variant9" />
      <VideoComponent videoUrl={selectedItem.video} isPlay={true} videoClass={{ width: '100%', height: 240 }} />
      <View className="w-full py-5 px-6">
        <Text className="text-[2.2rem]   pb-2 font-ObjektivMk1Bold">
          {selectedItem?.engine}
        </Text>
        <Text className="text-[0.95rem] pb-5 font-objektiv">
          {selectedItem?.description}
        </Text>

        <ProductCard handleExploreClick={handleExploreClick} engines={productEngines[middleIndex + 1]?.engines || []} />

      </View>
    </Animated.View>
  );
};

export default SlideInCard;
