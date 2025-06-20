import {ActivityIndicator, Dimensions, StyleSheet, Text, TouchableOpacity, View,Image} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import {SafeAreaView} from "react-native-safe-area-context";
import CustomCloseButton from "../components/buttons/CustomCloseButton";
import yearImages from "../constants/yearImages";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, useAnimatedScrollHandler, interpolate, runOnJS, withRepeat, Easing } from 'react-native-reanimated';
import homeImages from '../constants/homeImages';
import homeCardData from '../constants/homeCardData';
import { useLocalSearchParams, useRouter } from 'expo-router';
import MyTextBtn from "../components/buttons/MyTextBtn";
import boxShadow from '../constants/boxShadow';
import RedDotSvg from '../components/RedDotSvg';
import ClippedView from '../components/ClippedView';
import CustomTextButton from '../components/buttons/CustomTextButton';
import { Image as ExpoImage } from 'expo-image';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useEvent } from 'expo';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const CARD_WIDTH = screenWidth / 3; // Width of each card
console.log("scenwidht",screenWidth);
const customheight = (screenHeight/2 - 175) - 80
console.log("cusheight",customheight);
const VISIBLE_CARDS = 5; // Number of visible cards
const LOOP_DATA = homeCardData;
const loopData = LOOP_DATA; 
const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const Card = ({ item, index, scrollX,centeredIndex  }) => {
  const [isLoading, setIsLoading] = useState(true);

 const router = useRouter();
if (item === null) {
    return <View style={{ width: CARD_WIDTH }} />;
  }
    const realIndex = homeCardData.filter((e) => e !== null).indexOf(item);
    console.log("realindex",realIndex);
  const inputRange = [

    (realIndex - 1) * CARD_WIDTH, // One card before
    realIndex * CARD_WIDTH, // Current card
    (realIndex + 1) * CARD_WIDTH, // One card after

  ];

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollX.value,
      inputRange,
      [0.4, 1, 0.4], // Scale middle card to 1, others to 0.2
      'clamp'
    );
    const translateY = interpolate(
      scrollX.value,
      inputRange,
      [ -50, 0, -50], // Move scaled-down cards up by -50px
      'clamp'
    );
    const opacity = interpolate(
      scrollX.value,
      inputRange,
      [ 0.6, 1, 0.6], // Middle card full opacity (1), others at 0.3
      'clamp'
    );
    return {
      transform: [{ scale }, { translateY }],
      opacity
    };
  });
  const videoSource =
item.videoUrl

  const player = useVideoPlayer(videoSource, player => {
      player.loop = true;
      player.muted = true;
      player.play();
  
  
    });





  return (
    <Animated.View
    style={[{width:CARD_WIDTH,...boxShadow("#00000040", 0, 25, 0.25, 50, 10)},animatedStyle]}
    className=" h-[350px]"
  >
    <ClippedView width={CARD_WIDTH} height={350} backgroundColor="white" clipPathId="slidecardFirst1" slug="variant11" />
      {/* Red side bar */}
      <View className="w-[16px] h-[175px] absolute bg-[#E11C37] top-0 -left-[16px]" />

      {/* Main card container */}
      
          {/* Image section */}
          <View className=" w-full h-[175px] ">
            {/* <Image
              className="w-[100%] h-full"
              source={item.imageUrl }
              resizeMode="cover"
            /> */}
            {/* {isLoading && (
        <ActivityIndicator size="small" color="#888" className="absolute w-full h-full z-40 flex-row justify-center items-center" />
      )} */}
            {/* <ExpoImage source={item.videoUrl }
             style={{ width: CARD_WIDTH, height: 175 }}
             onLoad={() => setIsLoading(false)}
        className=' w-full h-full'  transition={1000}  contentFit="cover" /> */}
        <VideoView style={{ width: '100%', height: 175 }}  player={player} nativeControls={false} contentFit="cover" />
      <View>
      
      </View>
          </View>

          {/* Content section */}
          <View className="w-full p-5">
            <View className="pb-2 flex flex-row ">
              <Text className="text-black pr-2 text-[1.6rem] font-ObjektivMk2Black">{item.title.startName}</Text>
              <Text className="text-[#E11C37] text-[1.6rem] font-ObjektivMk2Black ">{item.title.endName}</Text>
            </View>
            <Text className=" text-[0.85rem] font-objektiv pb-5">{item.description}</Text>
  
              
                                      {realIndex === centeredIndex && (
                                        <CustomTextButton
                                        className={"w-[156px] h-[30px]  "}
                                        onPress={() => {
                                          router.push(`${item.link}`);
                                        }}
                                   
                                        title={`${realIndex == 0 ? "View Timeline" : "View"}`}
                                        textClass={" font-[700] text-[0.75rem] font-objektiv tracking-widest "}
                                        boxLeftClass={"w-[15px] h-[15px] -left-[8px]  -top-[8px] bg-white"}
                                        boxRightClass={"w-[15px] h-[15px] -right-[7.5px] -bottom-[7.5px] bg-white"}
                                      />
                                      )} 
                                       
            
          </View>
   
          {centeredIndex !== realIndex && (
        <View className="absolute bottom-[0] left-1/2 -translate-x-1/2 translate-y-[70px]">
          <RedDotSvg width={33} height={34} />
        </View>
      )}
  </Animated.View>

  );
};
  

export default function Home() {
  const translateX = useSharedValue(screenWidth / 2); // Start from the center of the screen (X-axis)
  const translateY = useSharedValue(screenHeight / 3); // Start from the center of the screen (Y-axis)
  const scrollX = useSharedValue(0); // Track scroll position
  const flatListRef = useRef(null);
  const [centeredIndex, setCenteredIndex] = useState(0);  
  const router = useRouter();

  const { targetIndex } = useLocalSearchParams();
  console.log("ttargetindex",targetIndex);

  const rawIndex = Number(targetIndex);
  console.log("rawindex",rawIndex);
  const handleClose = () => {

    router.push("/startScreen");
  }

  useEffect(() => {
    // Animate the image to its initial position (0, 0) when the component mounts
    translateX.value = withTiming(0, { duration: 1000 }); // 1000ms = 1s
    translateY.value = withTiming(0, { duration: 1000 }); // 1000ms = 1s
  }, []);

  // useEffect(() => {
  //   if (targetIndex && flatListRef.current) {
  //     // Small delay ensures FlatList is mounted
  //     setTimeout(() => {
  //       flatListRef.current.scrollToIndex({
  //         index:   parseInt(targetIndex ?? 0),
  //         animated: true,
  //       });
  //     }, 300);
  //   }
  // }, [targetIndex ]);

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
      const index = Math.round(event.contentOffset.x / CARD_WIDTH);
      console.log("indexdex----",index);
      runOnJS(setCenteredIndex)(index);
    },
  });
  const scale = useSharedValue(1);

  // Continuous Scale Animation
  scale.value = withRepeat(
    withTiming(1.1, {
      duration: 3000, // 3 seconds for smooth transition
      easing: Easing.inOut(Easing.ease),
    }),

    true // Reverse direction
  );

  // Animated style
  const animatedTerrainStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));
  useEffect(()=> {
if(flatListRef.current && rawIndex){
  flatListRef.current.scrollToIndex({ 
    index: rawIndex,
    animated: true 

  });
}
  },[rawIndex])
 

  return (
    <SafeAreaView className="w-screen h-screen bg-white">
      <View className="h-[80px] flex-row justify-between items-center w-[90%] m-auto  border-b border-black/5">
        <Animated.Image
          source={yearImages.pwLogo}
          alt="homeLogo"
          className="max-w-[180px] max-h-[50px] relative z-40"
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

      <View className="flex-1 items-start  bg-[#f5f5f5]">


    <View className="h-[350px]  relative " style={{marginTop:customheight}}>
    <View className="absolute top-1/2 translate-y-[70px] h-[2px] w-full bg-[#c1c0c066] "  />
    <Animated.FlatList
        ref={flatListRef}
        data={loopData}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH } // Snap to card width 
        decelerationRate="fast"
        onScroll={scrollHandler}
        // contentContainerStyle={{ paddingHorizontal: (screenWidth - CARD_WIDTH) / 2 }}// Center the first card
      
        renderItem={({ item, index }) => (
          <Card item={item} index={index} scrollX={scrollX} centeredIndex={centeredIndex} />
        )}
        scrollEventThrottle={16}
        getItemLayout={(data, index) => ({
          length: CARD_WIDTH ,
          offset: (CARD_WIDTH ) * index,
          index,
        })}
  
      />
    </View>
    </View>
    <View className="w-screen absolute bottom-0 left-0">
      <Animated.Image source={homeImages.Terrain} className="w-full h-[190px]" alt="terrain" resizeMode='cover' style={animatedTerrainStyle} />
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