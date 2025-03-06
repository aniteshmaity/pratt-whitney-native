import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, Dimensions } from "react-native";
import Animated, { useSharedValue, useAnimatedScrollHandler, useAnimatedStyle, interpolate, withSpring, runOnJS } from "react-native-reanimated";
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
const loopingData = [...data, ...data, ...data]

const CarouselItem = ({ item, index, currentIndex,itemWidth,scrollX }) => {
  // console.log("currentindex",currentIndex);
  // const animatedStyle = useAnimatedStyle(() => {
  //   const scale = index === currentIndex ? scaleFactor : 0.5; // Scale the current item
  //   return {
  //     transform: [{ scale: withSpring(scale) }],
  //   };
  // });
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollX.value,
      [
        (index - 2) * itemWidth, // Two items before center
        (index - 1) * itemWidth, // One item before center
        index * itemWidth, // Current item (center)
        (index + 1) * itemWidth, // One item after center
        (index + 2) * itemWidth, // Two items after center
      ],
      [0.5, 0.5, 1, 0.5, 0.5], // Scaling effect
      'clamp'
    );

    return { transform: [{ scale }] };
  });

  return (
    <Animated.View style={[{ width: itemWidth }, animatedStyle]}>
  
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
  const scrollX = useSharedValue(0);
  const itemWidth = parentWidth / 5; // Width of each item

  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(data.length); // Start in the middle of duplicated data

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x; // Update shared value
    },
    onMomentumScrollEnd: (event) => {
      const offset = event.contentOffset.x;
      const totalWidth = data.length * itemWidth;

      // Reset to the middle of duplicated data when reaching the end
      if (offset >= totalWidth * 2) {
        flatListRef.current?.scrollToIndex({ index: data.length, animated: false });
      } else if (offset <= 0) {
        flatListRef.current?.scrollToIndex({ index: data.length, animated: false });
      }

      // Update currentIndex
      const index = Math.round(offset / itemWidth);
      setCurrentIndex(index);
    },
  });

  // const handlePrev = () => {
  //   if (currentIndex <= 0) return; // Prevent negative index

  //   const newIndex = currentIndex - 1;
  //   if (newIndex <= 0) return; // Prevent negative index
  //   setCurrentIndex(newIndex);
   
  //   flatListRef.current?.scrollToIndex({ index: newIndex - 1, animated: true });
  // };

  // const handleNext = () => {
  //   if(currentIndex === loopingData.length - 3) return;

  //   const newIndex = currentIndex + 1;
  //   setCurrentIndex(newIndex);

  //   flatListRef.current?.scrollToIndex({ index: newIndex - 1, animated: true });
  // };

  return (
    <View
      className=" relative"  
    >
     
           <Animated.FlatList
        ref={flatListRef}
        data={loopingData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <CarouselItem item={item} index={index} itemWidth={itemWidth} currentIndex={currentIndex} scrollX={scrollX} />
        )}
        onScroll={scrollHandler}
        snapToInterval={itemWidth} // Snap to the width of each item
        decelerationRate="fast" // Smooth scrolling
        contentContainerStyle={{ paddingHorizontal: (parentWidth - itemWidth) / 4 }} 
        initialScrollIndex={data.length} // Start in the middle of duplicated data
        getItemLayout={(data, index) => ({
          length: itemWidth,
          offset: itemWidth * index,
          index,
        })}
       
      />
          
          {/* Navigation Buttons */}
          {/* <View className="absolute top-1/2 -translate-y-1/2 left-3">
    
               <PrevNextButton
                    isColor={currentIndex === 0 ? "grey" : "red"} 
                    isIcon='prev'
                    isPolygon="first"
                    isWidth="small"
                            onPress={handlePrev}
                          />
             
          </View>

          <View className="absolute top-1/2 -translate-y-1/2 right-3">
      
               <PrevNextButton
                    isColor={currentIndex === 0 ? "grey" : "red"} 
                    isIcon='next'
                    isWidth="small"
                            onPress={handleNext}
                          />
            
          </View> */}
      
    </View>
  );
};

export default GalleryCarousel;
