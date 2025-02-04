import React, { useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, Dimensions } from "react-native";
import Animated, { useSharedValue, useAnimatedScrollHandler, useAnimatedStyle, interpolate, withSpring } from "react-native-reanimated";
import yearImages from "../constants/yearImages";


const { width: windowWidth } = Dimensions.get('window');
const itemWidth = windowWidth / 5; // Width of each item
const scaleFactor = 1.5;

const data = Array.from({ length: 20 }, (_, i) => ({ id: i, text: `Item ${i + 1}` }));

const CarouselItem = ({ item, index, currentIndex }) => {
  const animatedStyle = useAnimatedStyle(() => {
    const scale = index === currentIndex ? scaleFactor : 1; // Scale the current item
    return {
      transform: [{ scale: withSpring(scale) }],
    };
  });

  return (
    <Animated.View style={[ animatedStyle]}>
   <View className="w-[40px] h-[40px] bg-red-900">
   <Text className="">{item.text}</Text>
   </View>
    </Animated.View>
  );
};
const GalleryCarousel = () => {

  const [currentIndex, setCurrentIndex] = useState(1); // Track the current focused item
  const flatListRef = useRef(null);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      flatListRef.current.scrollToIndex({ index: currentIndex - 1, animated: true });
    }
  };

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
      flatListRef.current.scrollToIndex({ index: currentIndex + 1, animated: true });
    }
  };
  return (
    <View
      className="items-center relative"  
    >
     
           <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <CarouselItem item={item} index={index} currentIndex={currentIndex} />
        )}

        snapToInterval={itemWidth} // Snap to the width of each item
        decelerationRate="fast" // Smooth scrolling
        onMomentumScrollEnd={(event) => {
          const offset = event.nativeEvent.contentOffset.x;
          const newIndex = Math.round(offset / itemWidth);
          setCurrentIndex(newIndex);
        }}
      />
          
          {/* Navigation Buttons */}
          <View className="absolute top-1/2 -translate-y-1/2 left-3">
            <TouchableOpacity onPress={handlePrev} className="bg-red-600 p-2 rounded-full shadow-lg">
              <Text className="text-white">P</Text>
            </TouchableOpacity>
          </View>

          <View className="absolute top-1/2 -translate-y-1/2 right-3">
            <TouchableOpacity onPress={handleNext} className="bg-red-600 p-2 rounded-full shadow-lg">
              <Text className="text-white">N</Text>
            </TouchableOpacity>
          </View>
      
    </View>
  );
};

export default GalleryCarousel;
