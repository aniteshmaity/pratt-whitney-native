import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, Dimensions } from "react-native";
import Animated, { useSharedValue, useAnimatedScrollHandler, useAnimatedStyle, interpolate, withSpring, runOnJS } from "react-native-reanimated";
import yearImages from "../constants/yearImages";
import PrevNextButton from "./buttons/PrevNextButton";
import VideoComponent from "./VideoComponent";

// import Pdf from "react-native-pdf";


const { width: windowWidth } = Dimensions.get('window');

const scaleFactor = 1;


const data = [
  null,
  { id: 1, img: yearImages.layer1, description: "Card 1 Description" },
  { id: 2, img: yearImages.layer1, description: "Card 2 Description" },
  { id: 3, img: yearImages.layer3, description: "Card 3 Description" },
  { id: 4, img: yearImages.layer2, description: "Card 4 Description" },
  { id: 5, img: yearImages.layer2, description: "Card 5 Description" },
  { id: 6, img: yearImages.layer3, description: "Card 6 Description" },
  { id: 7, img: yearImages.layer3, description: "Card 7 Description" },
  null,
  null,
  null,
  null,
  null
];
// Duplicate the data to create a looping effect


const CarouselItem = ({ item, index, currentIndex, itemWidth, scrollX, galleryData, onImageClick, loopingData }) => {
  // console.log("galleryData",galleryData);
  if (!item) {
    return <View style={{ width: itemWidth }} />; // Empty space
  }
  const filteredData = galleryData.filter(item => item !== null);
  const realIndex = galleryData.filter((e) => e !== null).indexOf(item);
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollX.value,
      [
        (realIndex - 1) * itemWidth, // One item before center
        realIndex * itemWidth, // Current item (center)
        (realIndex + 1) * itemWidth, // One item after center
        (realIndex + 2) * itemWidth, // Two items after center
        (realIndex + 3) * itemWidth, // Two items after center
      ],
      [0.5, 1, 0.5, 0.5, 0.5], // Scaling effect
      'clamp'
    );

    return { transform: [{ scale }] };
  });

  return (
    <Animated.View style={[{ width: itemWidth }, animatedStyle]}>

      <TouchableOpacity
        onPress={() => {
          console.log("onpress clickre----");
          if (galleryData?.length) {
            onImageClick(index, filteredData);
          } else {
            onImageClick(index, filteredData);
          }
        }}>
        {
          item.img && (
            <Image

              source={ item.img}
              alt={`Card ${item.index}`}
              className=" w-full"
              resizeMode="cover"
              style={{ width: '100%', height: 80 }}
            />
          )
        }

        {item.video && (
          <VideoComponent
            videoUrl={item.video}
            videoClass={{ width: '100%', height: 80 }}
            isPlay={false}
          />
        )}
        {/* {item.pdf && (
          <Pdf
            source={item.pdf}
            style={{ width: '100%', height: 80 }}
          />
        )} */}
      </TouchableOpacity>


    </Animated.View>
  );
};
const GalleryCarousel = ({ parentWidth, slideImages, onImageClick }) => {

  // console.log("slideImages", slideImages);
  const scrollX = useSharedValue(0);
  const itemWidth = parentWidth / 5; // Width of each item

  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0); // Start in the middle of duplicated data

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
    onMomentumScrollEnd: (event) => {
      const offset = event.contentOffset.x;
      const index = Math.round(offset / itemWidth);
      setCurrentIndex(index);
    },
  });
  const slideAllImage = [null, ...(Array.isArray(slideImages) ? slideImages : []), null, null, null];

  const loopingData = slideImages?.length ? slideAllImage : data

  const galleryData = [
    null,
    ...slideImages,
    null,
  
  ];
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
          <CarouselItem item={item} index={index} itemWidth={itemWidth} currentIndex={currentIndex} scrollX={scrollX} galleryData={galleryData} onImageClick={onImageClick} loopingData={loopingData} />
        )}
        onScroll={scrollHandler}
        snapToInterval={itemWidth}
        decelerationRate="fast"
        // contentContainerStyle={{ paddingHorizontal: (parentWidth - itemWidth) / 4 }}
        initialScrollIndex={1} // Start on first real item
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
