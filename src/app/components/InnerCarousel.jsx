import React, { useRef, useState } from 'react';
import { View, Image, FlatList, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
import PrevNextButton from './buttons/PrevNextButton';
import { LinearGradient } from "expo-linear-gradient"

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width / 6;
const VISIBLE_ITEMS = 7;

export default function InnerCarousel({ images,onImageClick }) {
    // console.log("width",width);
    const flatListRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0); // Track index state
    const scrollX = useSharedValue(0); // Shared value for animations
// console.log("currentindex",currentIndex);
// console.log("images-length",images.length);
    // Handle Next Slide
    const handleNextClick = () => {
        if(currentIndex + 1 === images.length - VISIBLE_ITEMS) return;
        if (flatListRef.current && currentIndex < images.length - 1) {
            const nextIndex = currentIndex + 1;
            flatListRef.current.scrollToIndex({
                index: nextIndex,
                animated: true,
            });
            setCurrentIndex(nextIndex);
            scrollX.value = withTiming(nextIndex * ITEM_WIDTH - 6 );
        }
    };

    // Handle Previous Slide
    const handlePrevClick = () => {
        if (flatListRef.current && currentIndex > 0) {
            const prevIndex = currentIndex - 1;
            flatListRef.current.scrollToIndex({
                index: prevIndex,
                animated: true,
            });
            setCurrentIndex(prevIndex);
            scrollX.value = withTiming(prevIndex * ITEM_WIDTH );
        }
    };
   

    return (
        <View className="relative flex justify-center">
            {images?.length > 7 && (
               <>
                <View className=" absolute -left-5 z-50">
                    <PrevNextButton     isColor={currentIndex === 0 ? "grey" : "red"}  isIcon='prev' isPolygon="first" isWidth="small" onPress={handlePrevClick} />            
                </View>
                <View className=" absolute -right-5 z-50">
                    <PrevNextButton     isColor={currentIndex + 1 >= images.length - VISIBLE_ITEMS ? "grey" : "red"}  isIcon='next' isWidth="small" onPress={handleNextClick} />
                </View>
               </>
            )}

            {/* Gradient Overlay for Smooth Fade Effect */}
            {/* <Animated.View className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-[#f3f3f3] to-transparent z-20" />
            <Animated.View className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-[#f3f3f3] to-transparent z-20" /> */}
            {/* <View
          className={`h-full w-full z-30 bg-slate-500 absolute top-0 ${images?.length > 6 ? 'opacity-100' : 'opacity-0'} `}
          style={{
            background: "linear-gradient(270deg, #f3f3f3, transparent)",
          }}
        ></View> */}
        {/* <LinearGradient start={{ x: 1, y: 0 }}  end={{ x: 0, y: 0 }}  colors={['#f3f3f3', 'transparent']} className={`h-full w-full z-30  absolute top-0 ${images?.length > 6 ? 'opacity-100' : 'opacity-0'} `}  /> */}
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
  <FlatList
    ref={flatListRef}
    horizontal
    data={images}
    keyExtractor={(item, index) => index.toString()}
    showsHorizontalScrollIndicator={false}
    keyboardShouldPersistTaps="handled"
    renderItem={({ item, index }) => (
      <TouchableOpacity
        onPress={() => {
          console.log('All images:', images);
          onImageClick(index, images);
        }}
        style={{ marginRight: 6 }}
      >
        <Image
          source={item?.img}
          style={{
            width: 42,
            height: 42,
            opacity: Math.max(0.1, 1 - index * 0.1),
          }}
          resizeMode="cover"
        />
      </TouchableOpacity>
    )}
  />
</ScrollView>

        </View>
    );
}
