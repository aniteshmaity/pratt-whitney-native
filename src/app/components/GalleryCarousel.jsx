import React, { useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, Dimensions } from "react-native";
import Animated, { useSharedValue, useAnimatedScrollHandler, useAnimatedStyle, interpolate, withSpring } from "react-native-reanimated";
import yearImages from "../constants/yearImages";
import PrevNextButton from "./buttons/PrevNextButton";


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
// Duplicate the data to create a looping effect
const loopingData = [...data, ...data, ...data].map((item, index) => ({
  ...item,
  uniqueId: `${item.id}-${index}`, // Add a unique identifier
}));

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
                  alt={`Card ${item.uniqueId}`}
                  className="h-[100px] w-full"
                  resizeMode="cover"
                  style={{width:'100%', height:60}}
                />
                <Text className=" w-full  bg-opacity-50 text-white text-center text-[0.6rem] p-1">
                  {item.description}
                </Text>

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
    if(currentIndex === loopingData.length - 3) return;

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
        data={loopingData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.uniqueId.toString()}
        renderItem={({ item, index }) => (
          <CarouselItem item={item} index={index} itemWidth={itemWidth} currentIndex={currentIndex} />
        )}

        snapToInterval={itemWidth} // Snap to the width of each item
        decelerationRate="fast" // Smooth scrolling
       
      />
          
          {/* Navigation Buttons */}
          <View className="absolute top-1/2 -translate-y-1/2 left-3">
            {/* <TouchableOpacity onPress={handlePrev} className="bg-red-600 p-2 rounded-full shadow-lg">
              <Text className="text-white">P</Text>
            </TouchableOpacity> */}
               <PrevNextButton
                    isColor={currentIndex === 0 ? "grey" : "red"} 
                    isIcon='prev'
                    isPolygon="first"
                    isWidth="small"
                            onPress={handlePrev}
                          />
             
          </View>

          <View className="absolute top-1/2 -translate-y-1/2 right-3">
            {/* <TouchableOpacity onPress={handleNext} className="bg-red-600 p-2 rounded-full shadow-lg">
              <Text className="text-white">N</Text>
            </TouchableOpacity> */}
               <PrevNextButton
                    isColor={currentIndex === 0 ? "grey" : "red"} 
                    isIcon='next'
                    isWidth="small"
                            onPress={handleNext}
                          />
            
          </View>
      
    </View>
  );
};

export default GalleryCarousel;
