import React, { useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, Dimensions } from "react-native";
import Animated, { useSharedValue, useAnimatedScrollHandler, useAnimatedStyle, interpolate, withSpring } from "react-native-reanimated";
import yearImages from "../constants/yearImages";


const { width: windowWidth } = Dimensions.get('window');

const scaleFactor = 1;


const data = [
  { id: 1, image: yearImages.layer1, description: "Card 1 Description" },
  { id: 2, image: yearImages.layer1, description: "Card 2 Description" },
  { id: 3, image: yearImages.layer3, description: "Card 3 Description" },
  { id: 4, image: yearImages.layer2, description: "Card 4 Description" },
  { id: 5, image: yearImages.layer2, description: "Card 5 Description" },
  { id: 6, image: yearImages.layer3, description: "Card 6 Description" },
  { id: 7, image: yearImages.layer3, description: "Card 7 Description" },
];

const CarouselItem = ({ item, index, currentIndex,itemWidth }) => {
  console.log("currentindex",currentIndex);
  const animatedStyle = useAnimatedStyle(() => {
    const scale = index === currentIndex ? scaleFactor : 0.5; // Scale the current item
    return {
      transform: [{ scale: withSpring(scale) }],
    };
  });

  return (
    <Animated.View style={[{ width: itemWidth,  marginHorizontal: 5 }, animatedStyle]}>
  
  <Image
                  source={item.image}
                  alt={`Card ${item.id}`}
                  className="h-[100px] w-full object-cover"
                  style={{width:'100%', height:60}}
                />
                <View className=" w-full  bg-opacity-50 text-white text-center text-[0.6rem] p-1">
                  {item.description}
                </View>

    </Animated.View>
  );
};
const GalleryCarousel = ({ parentWidth }) => {
  const itemWidth = parentWidth / 5; // Width of each item
  const [currentIndex, setCurrentIndex] = useState(1); // Track the current focused item
  const flatListRef = useRef(null);

  const handlePrev = () => {
    if (currentIndex <= 0) return; // Prevent negative index

    const newIndex = currentIndex - 1;
    if (newIndex <= 0) return; // Prevent negative index
    setCurrentIndex(newIndex);
   
    flatListRef.current?.scrollToIndex({ index: newIndex - 1, animated: true });
  };

  const handleNext = () => {
    if (currentIndex === data.length - 4) return; // Prevent overflow

    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);

    flatListRef.current?.scrollToIndex({ index: newIndex - 1, animated: true });
  };

  return (
    <View
      className=" relative"  
    >
     
           <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <CarouselItem item={item} index={index} itemWidth={itemWidth} currentIndex={currentIndex} />
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
