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
import { useRouter } from 'expo-router'
export default function MapCard({cityData,cardRef,cardclass,handlePrevClick,handleNextClick,index,cityIndex,currentIndex,totalCities }) {
  console.log("currentindex-index",currentIndex.value,index);
console.log("city",cityData);
  const cardOpacity = useSharedValue(0);
  const cardScale = useSharedValue(0.3);
  const translateY = useSharedValue(60);
  const router = useRouter();
  
const handlePress = (mapdata) => {
  console.log("mapdata",mapdata);
  router.push({
    pathname: '/hundred-years/yearEngineDetails',
    query: {
      mapData: JSON.stringify(mapdata),
    }
  });
};



  const isActive = useDerivedValue(() => {
    const active = currentIndex.value === cityIndex;
    // console.log(`Card ${index}: currentIndex = ${currentIndex.value}, isActive = ${active}`);
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
  const { width, height, translateX } = svgConfigurations[index] || {
  width: 120,
  height: 140,
  translateX: -100,
};
  return (
   <View ref={cardRef} className={`w-[400px] ${cardclass}`}>
     <Animated.View className="relative flex gap-2"  style={[cardAnimatedStyle]}>
      {cityData?.data.map((cityData, index) => (
     <View  key={cityData.id}>
        <ClippedView width={400} height={140} backgroundColor="white" clipPathId="mapcard" slug="map1" />
    <View className='w-[16px] h-[80px] absolute bg-[#E11C37] top-0 -left-[16px] ' />
 
    <View
className="h-[140px] p-5 "

>
        <View className='flex-1 flex-row gap-4 h-full '>
        <View className='relative flex-1 '>

<Image className='w-full h-full '   source={homeImages.mapcontent1} resizeMode='cover' />
</View>
<View className='w-full flex-[2] justify-between '>

<Text className='text-[1rem] text-[#D91027]   font-ObjektivMk2Black'>{cityData.header1}</Text>
<Text className='text-[1rem] font-normal  font-ObjektivMk2Black'>{cityData.header2}</Text>


<Text className='text-[0.6rem] font-normal mt-2 font-objektiv'>{cityData.subHeader}</Text>
<Text className='text-[0.4rem] font-normal mt-2 font-objektiv h-[30px] overflow-y-auto w-[80%]'>{cityData.desc}</Text>
<MyTextBtn  
                                        className={"w-[82px]   h-[24px]"}
                                        onPress={() => {
                                  handlePress(cityData.exploreData)
                                        }}
                                        title={"Explore"}
                                        textClass={" font-[700] text-[0.65rem] font-objektiv tracking-widest "}
                                      />
</View>
        </View>
        {/* <View className='m-auto mt-5 w-[120px]'>
       
        </View> */}
      </View>
 

{/* <ReddropSvg /> */
}
{/* <View className="absolute top-2 left-0 -translate-x-[130px] z-40 -rotate-[0deg]" style={{ transform: [{ translateX: translateX }] }}>
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
</View> */}
     </View>
       ))}
  {/* Render the SVG and city data for non-active cards */}
     <View className='absolute -right-[28%] top-0 flex flex-row gap-4'>
 <PrevNextButton
        isColor={currentIndex.value === cityIndex ? "grey" : "red" } 
        isIcon='prev'
        isPolygon="first"
                onPress={handlePrevClick}
              />
        <PrevNextButton
                 isColor={ cityIndex === totalCities-1 ? "grey" : "red"}
                 isIcon='next'
                 onPress={handleNextClick}
               />
</View>
{/* <View className={`absolute z-[400] flex flex-row items-center gap-5 ${cityData?.cityPosition}`} >
        <RedDotSvg width={20} height={20} className=" top-[20%] left-[10px]" />
        <View>
          <Text className="text-[0.96rem] font-ObjektivMk1Bold ">{cityData.name}</Text>
  
        </View>
      </View> */}

{/* <Animated.View className={`absolute z-[400] flex flex-row items-center gap-5 ${cityData?.cityPosition}`} style={[{ transform: [{ translateX: "-100%" }] }, nonActiveContentStyle]}>
        <RedDotSvg width={20} height={20} className=" top-[20%] left-[10px]" />
        <View>
          <Text className="text-[0.96rem] font-ObjektivMk1Bold ">{cityData.name}</Text>
  
        </View>
      </Animated.View> */}

  </Animated.View>
  {/* <Animated.View className="absolute bottom-0 left-0 z-[400] flex flex-row items-center gap-5 " style={[{ transform: [{ translateX: "-100%" }] }, nonActiveContentStyle]}>
        <RedDotSvg width={20} height={20} className=" top-[20%] left-[10px]" />
        <View>
          <Text className="text-[0.96rem] font-ObjektivMk1Bold text-[#E11C37]">{city.name}</Text>
          <Text className="text-[0.76rem] font-frutigerBold">Training Centre</Text>
        </View>
      </Animated.View>  */}
   </View>
  )
}