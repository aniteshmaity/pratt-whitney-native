
import React, { useRef } from 'react'
import { View, Image, TouchableOpacity, FlatList, StyleSheet, Dimensions } from "react-native";

import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
import PrevNextButton from './PrevNextButton';
const { width } = Dimensions.get("window");
const ITEM_WIDTH = width / 6;

export default function InnerCarousel({ images }) {
    console.log("images",images);
    const flatListRef = useRef(null);
    const scrollX = useSharedValue(0); // Shared value for animations
  
    // Handle Next Slide
    const handleNextClick = () => {
      if (flatListRef.current) {
        flatListRef.current.scrollToOffset({
          offset: scrollX.value + ITEM_WIDTH,
          animated: true,
        });
        scrollX.value = withTiming(scrollX.value + ITEM_WIDTH);
      }
    };
  
    // Handle Previous Slide
    const handlePrevClick = () => {
      if (flatListRef.current) {
        flatListRef.current.scrollToOffset({
          offset: Math.max(scrollX.value - ITEM_WIDTH, 0),
          animated: true,
        });
        scrollX.value = withTiming(Math.max(scrollX.value - ITEM_WIDTH, 0));
      }
    }
  return (
    <View className="relative  flex justify-center">
    {images?.length > 7 && (
      <>
      
                      <View className="flex-row  justify-between w-[110%] absolute left-1/2 transform -translate-x-1/2  top-1/2 -translate-y-1/2 z-50">
                            
                                <View>
                                <PrevNextButton
                                isColor="red"
                                isIcon='prev'
                                isPolygon="first"
                                isWidth ="small"
                                onPress={  handlePrevClick }
                                      />
                        
                                </View>
                                <View>
                                <PrevNextButton
                                        isColor="red"
                                        isIcon='next'
                                        isWidth ="small"
                                        onPress={handleNextClick}
                                      />
                        
                                </View>
                              
                              </View>
      </>
    )}

    {/* Gradient Overlay for Smooth Fade Effect */}
    <Animated.View className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-[#f3f3f3] to-transparent z-20" />
    <Animated.View className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-[#f3f3f3] to-transparent z-20" />

    {/* FlatList for Image Slider */}
    <FlatList
      ref={flatListRef}
      horizontal
      data={images}
      keyExtractor={(item, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 10 }}
      renderItem={({ item }) => (
        <Animated.View className=" flex flex-row items-center mx-[4px]">
          <Image source={item?.img} className="w-full h-[42px] object-cover" resizeMode='cover' style={{width:42, height:42}} />
        </Animated.View>
      )}
    />
  </View>
  )
}