import { View, Text, Image } from 'react-native'
import React from 'react'
import ClippedView from './ClippedView'
import yearImages from '../constants/yearImages'
import MyTextBtn from './buttons/MyTextBtn'
import PrevNextButton from './buttons/PrevNextButton'
import Animated, { useSharedValue, useAnimatedStyle, withSpring, useDerivedValue } from "react-native-reanimated";
import Svg, { Path } from 'react-native-svg'
import RedDotSvg from './RedDotSvg'
import homeImages from '../constants/homeImages'
export default function MapCard({city,cardRef,cardclass,handlePrevClick,handleNextClick,index,currentIndex }) {
  console.log("currentindex-index",currentIndex.value,index);

  const cardOpacity = useSharedValue(0);
  const cardScale = useSharedValue(0.3);
  const translateY = useSharedValue(60);
  const isActive = useDerivedValue(() => {
    const active = currentIndex.value === index;
    console.log(`Card ${index}: currentIndex = ${currentIndex.value}, isActive = ${active}`);
    return active;
  });

  // Animated styles
  const cardAnimatedStyle = useAnimatedStyle(() => {
    // Update shared values based on isActive
    return {
      opacity: withSpring(isActive.value ? 1 : 0, { damping: 12, stiffness: 80 }),
      transform: [
        { scale: withSpring(isActive.value ? 1 : 0.3, { damping: 12, stiffness: 80 }) },
        { translateY: withSpring(isActive.value ? 0 : 60, { damping: 10, stiffness: 80 }) },
      ],
    };
  });
  const nonActiveContentStyle = useAnimatedStyle(() => {
    return {
      display: isActive.value ? 'none' : 'flex', // Hide if active, show if not active
    };
  });
  const svgConfigurations = [
    { width: 120, height: 143, translateX: -130 }, // Configuration for index 0
    { width: 120, height: 143, translateX: -130 }, // Configuration for index 1
    { width: 80, height: 83, translateX: -80 },  // Configuration for index 2
    // Add more configurations as needed
  ];
  const { width, height, translateX } = svgConfigurations[index];
  return (
   <View ref={cardRef} className={`w-[360px] ${cardclass}`}>
     <Animated.View   style={[cardAnimatedStyle]}>
       <ClippedView width={360} height={140} backgroundColor="white" clipPathId="mapcard" slug="map1" />
    <View className='w-[16px] h-[80px] absolute bg-[#E11C37] top-0 -left-[16px] ' />
 
    <View
className="h-[140px] p-5 "

>
        <View className='flex-1 flex-row gap-4 h-full '>
        <View className='relative flex-1 '>

<Image className='w-full h-full '   source={homeImages.mapcontent1} resizeMode='cover' />
</View>
<View className='w-full flex-[2] justify-between '>
<View>
<Text className='text-[1.2rem] font-[600] font-objektiv'>Corporate headquaters</Text>
<Text className='text-[0.8rem] font-normal mt-2 font-objektiv'>{city.name}</Text>
</View>
<MyTextBtn  
                                        className={"w-[82px]   h-[24px]"}
                                        onPress={() => {
                                      console.log("clicked");
                                        }}
                                        title={"Explore"}
                                        textClass={" font-[700] text-[0.65rem] font-objektiv tracking-widest "}
                                      />
</View>
        </View>
        {/* <View className='m-auto mt-5 w-[120px]'>
       
        </View> */}
      </View>
 
<View className='absolute -right-[28%] top-0 flex flex-row gap-4'>
 <PrevNextButton
        isColor={"grey" } 
        isIcon='prev'
        isPolygon="first"
                onPress={handlePrevClick}
              />
        <PrevNextButton
                 isColor={ "red"}
                 isIcon='next'
                 onPress={handleNextClick}
               />
</View>
{/* <ReddropSvg /> */}<View className="absolute top-2 left-0 -translate-x-[130px] z-40 -rotate-[0deg]" style={{ transform: [{ translateX: translateX }] }}>
<RedDotSvg width={30} height={30} className="absolute -bottom-[10px] left-[10px]" />
<View className="">
<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 138 183"
  >
    <Path stroke="#D91027" d="M25.695 182.442 89.11 33.722l48.586-16.28"></Path>
    <Path
      stroke="#D91027"
      strokeWidth="5"
      d="m73.61 76.723 17.499-41 19-6.5"
    ></Path>
  </Svg>
</View>
</View>
  {/* Render the SVG and city data for non-active cards */}
     

  </Animated.View>
  <Animated.View className="absolute bottom-0 left-0 z-[400] flex flex-row gap-5" style={[{ transform: [{ translateX: "-100%" }] }, nonActiveContentStyle]}>
        <RedDotSvg width={30} height={30} className=" -bottom-[10px] left-[10px]" />
        <View>
          <Text className="text-[0.96rem] font-objektiv text-[#E11C37]">{city.name}</Text>
        </View>
      </Animated.View> 
   </View>
  )
}