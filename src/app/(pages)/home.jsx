import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect, useRef } from 'react';
import {SafeAreaView} from "react-native-safe-area-context";
import CustomCloseButton from "../components/buttons/CustomCloseButton";
import yearImages from "../constants/yearImages";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, useAnimatedScrollHandler, interpolate } from 'react-native-reanimated';
import homeImages from '../constants/homeImages';
import homeCardData from '../constants/homeCardData';
import { useRouter } from 'expo-router';
import MyTextBtn from "../components/buttons/MyTextBtn";
import boxShadow from '../constants/boxShadow';
import RedDotSvg from '../components/RedDotSvg';
import ClippedView from '../components/ClippedView';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const CARD_WIDTH = screenWidth / 3; // Width of each card
console.log("scenwidht",screenWidth);

const VISIBLE_CARDS = 5; // Number of visible cards
const LOOP_DATA = homeCardData;
const loopData = [...LOOP_DATA, ...LOOP_DATA, ...LOOP_DATA]; 
const Card = ({ item, index, scrollX }) => {
  // console.log("item,i",item);
 const router = useRouter();

  const inputRange = [
    (index - 2) * CARD_WIDTH, // Two cards before
    (index - 1) * CARD_WIDTH, // One card before
    index * CARD_WIDTH, // Current card
    (index + 1) * CARD_WIDTH, // One card after
    (index + 2) * CARD_WIDTH, // Two cards after
  ];

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollX.value,
      inputRange,
      [0.4,0.4, 1, 0.4,0.4], // Scale middle card to 1, others to 0.2
      'clamp'
    );
    const translateY = interpolate(
      scrollX.value,
      inputRange,
      [-50, -50, 0, -50, -50], // Move scaled-down cards up by -50px
      'clamp'
    );
    return {
      transform: [{ scale }, { translateY }],
    };
  });

  return (
    <Animated.View
    style={[{width:CARD_WIDTH,...boxShadow("#00000040", 0, 25, 0.25, 50, 10)},animatedStyle]}
    className=" h-[350px] "
  >
    <ClippedView width={430} height={350} backgroundColor="white" clipPathId="slidecardFirst1" slug="variant11" />
      {/* Red side bar */}
      <View className="w-[16px] h-[175px] absolute bg-[#E11C37] top-0 -left-[16px]" />

      {/* Main card container */}
      
          {/* Image section */}
          <View className=" w-full h-[175px] ">
            <Image
              className="w-[100%] h-full"
              source={item.imageUrl }
              resizeMode="cover"
            />
          </View>

          {/* Content section */}
          <View className="w-full p-5">
            <Text className="pb-2">
              <Text className="text-black pr-2 text-[1.6rem] font-objectiveBlk">{item.title.startName}</Text>
              <Text className="text-[#E11C37] text-[1.6rem] font-objectiveBlk">{item.title.endName}</Text>
            </Text>
            <Text className=" text-[0.85rem] font-objektiv pb-5">{item.description}</Text>
  
              
                               <MyTextBtn  
                                        className={"w-[156px] h-[30px]"}
                                        onPress={() => {
                                          router.push(`${item.link}`);
                                        }}
                                        title={"View Timeline"}
                                        textClass={" font-[700] text-[0.65rem] font-objektiv tracking-widest "}
                                      />
            
          </View>
   
        <View className="absolute bottom-[0] left-1/2 -translate-x-1/2 translate-y-[100px]"><RedDotSvg /></View>
  </Animated.View>

  );
};


export default function Home() {
  const translateX = useSharedValue(screenWidth / 2); // Start from the center of the screen (X-axis)
  const translateY = useSharedValue(screenHeight / 3); // Start from the center of the screen (Y-axis)
  const scrollX = useSharedValue(0); // Track scroll position
  const flatListRef = useRef(null);
  const handleClose = () => {
    console.log("ok");
  }

  useEffect(() => {
    // Animate the image to its initial position (0, 0) when the component mounts
    translateX.value = withTiming(0, { duration: 1000 }); // 1000ms = 1s
    translateY.value = withTiming(0, { duration: 1000 }); // 1000ms = 1s
  }, []);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value }, // Use screen dimensions for translation
        { translateY: translateY.value },
      ],
    };
  });

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
    // onEndDrag: (event) => {
    //   const offset = event.contentOffset.x;
    //   const index = Math.round(offset / (CARD_WIDTH));
    //   flatListRef.current?.scrollToIndex({ index, animated: true });
    // },
  });

 

  return (
    <SafeAreaView className="w-screen h-screen bg-[#f5f5f5]">
      <View className="h-[80px] flex-row justify-between items-center w-[90%] m-auto  border-b border-black/5">
        <Animated.Image
          source={yearImages.pwLogo}
          alt="homeLogo"
          className="max-w-[180px] max-h-[50px]"
          resizeMode="contain"
          style={imageAnimatedStyle}
        />
        <View className="flex-row items-center gap-4">
          <View className="flex-row">
            <Text className="text-red-600 text-[1.1rem]  pr-2 font-objectiveBlk">
              INDIA
            </Text>
            <Text className="text-black text-[1.1rem]  font-objectiveBlk">
              INTERACTIVE
            </Text>
          </View>
          <CustomCloseButton onPress={handleClose} />
        </View>
      </View>

      <View className="flex-1 justify-center items-center mt-[100px]">
<View className="absolute top-1/2 -translate-y-[20px] h-[1px] w-full bg-gray-900" />

      <Animated.FlatList
        ref={flatListRef}
        data={loopData}
        keyExtractor={(item, index) => `${item.id}-${index}`} // Unique key for duplicated items
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH } // Snap to card width 
        decelerationRate="fast"
        onScroll={scrollHandler}
        contentContainerStyle={{ paddingHorizontal: (screenWidth - CARD_WIDTH) / 2 }}// Center the first card
      
        renderItem={({ item, index }) => (
          <Card item={item} index={index} scrollX={scrollX} />
        )}
        initialScrollIndex={LOOP_DATA.length} // Start in the middle for looping effect
        getItemLayout={(data, index) => ({
          length: CARD_WIDTH ,
          offset: (CARD_WIDTH ) * index,
          index,
        })}
        onMomentumScrollEnd={(event) => {
          const offset = event.nativeEvent.contentOffset.x;
          const totalWidth = LOOP_DATA.length * (CARD_WIDTH);
          if (offset >= totalWidth * 2) {
            // If scrolled to the end of the duplicated data, reset to the middle
            flatListRef.current?.scrollToIndex({ index: LOOP_DATA.length, animated: false });
          } else if (offset <= 0) {
            // If scrolled to the start of the duplicated data, reset to the middle
            flatListRef.current?.scrollToIndex({ index: LOOP_DATA.length, animated: false });
          }
        }}
      />
    </View>
    <View className="w-screen absolute bottom-0 left-0">
      <Image source={homeImages.Terrain} className="w-full h-[190px]" alt="terrain" resizeMode='cover' />
      <Image source={homeImages.groupAero} className="absolute bottom-[60px] right-[10%] w-[360px] h-[80px]" resizeMode='cover' />
      <Image
        source={homeImages.building}
        className="absolute right-[20%] top-[56%] -z-10"
        alt="building-1"
      />
    </View>
    </SafeAreaView>
  ); 
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   flatListContent: {
//     paddingHorizontal: (screenWidth - CARD_WIDTH) / 2, // Center the first card
//   },
//   card: {
//     width: CARD_WIDTH,
//     height: 400,
//     // backgroundColor: '#6200ee',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',

//   },
//   cardText: {
//     color: 'white',
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
// });