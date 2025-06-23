import { View, Text, SafeAreaView, Image, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import yearImages from '../constants/yearImages'
import CustomCloseButton from '../components/buttons/CustomCloseButton'
import { Svg, Circle, Path } from 'react-native-svg';
import { useRef } from 'react';
import CustomTextButton from '../components/buttons/CustomTextButton';
import MyTextBtn from '../components/buttons/MyTextBtn';
import mapData from '../constants/mapData';

import Animated, { useSharedValue, useAnimatedStyle, withSpring, useDerivedValue, withTiming, runOnJS } from "react-native-reanimated";
import MapTextBtn from '../components/buttons/MapTextBtn';
import MapSvg from '../components/MapSvg';
import MapCard from '../components/MapCard';
import BlurSvg from '../components/BlurSvg';
import homeImages from '../constants/homeImages';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { mapaImages } from '../constants/mapImages';
import SlidingCard from '../components/inIndia/SlidingCard';
import RedDotSvg from '../components/RedDotSvg';
import ClippedView from '../components/ClippedView';
import GalleryCarousel from '../components/GalleryCarousel';
import IndiaCarousel from '../components/IndiaCarousel';

const { height } = Dimensions.get("window");

export default function mapPage() {
  const calculatedHeight = height - 80; 
    const cities = [
        {id:1, name: "Delhi", x: "0%", y: "0%", position: "top-[10%] left-[50%]" },
        {id:2, name: "Bangalore", x: "-10%", y: "-20%", position: "top-[60%] left-[45%]" },
        {id:3, name: "Chennai", x: "-20%", y: "-30%", position: "top-[78%] left-[45%]" },
      ];

    const selectedIndex = useSharedValue(-1); 
    const [activeId, setActiveId] = useState(1);
    const [showCards, setShowCards] = useState(false);
      const [activeCity, setActiveCity] = useState(null);
      const [currentCityIndex, setCurrentCityIndex] = useState(0);

    const x = useSharedValue(cities[0].x);
    const y = useSharedValue(cities[0].y);
    const scale = useSharedValue(0);
const opacity = useSharedValue(0);
    const currentIndex = useSharedValue(0);
    const buttonsRef = useRef([]);
    const cardRef = useRef([]);
    const spansRef = useRef([]);
    const mapRef = useRef(null);
     const router = useRouter();
    // const buttonsData = [
    //     { id: 1, name: "India Fleet" },
    //     { id: 2, name: "Supply Chain" },
    //     { id: 3, name: "Our Presence" },
    //     { id: 4, name: "Our people" },
    //     { id: 5, name: "Our Customers" },
    //   ];
    // const buttonsData = mapData.[activeId].
  // console.log("mapdata",mapData);
  // console.log("mapdataimage",mapaImages);
  console.log("currentCityIndex",currentCityIndex);
useDerivedValue(() => {
  runOnJS(setCurrentCityIndex)(currentIndex.value);
}, [currentIndex]);
  const animatedCityStyle = useAnimatedStyle(() => ({
  transform: [{ scale: scale.value }],
  opacity: opacity.value,
}));
      
    const handleClose = () => {
 
       router.push({
      pathname: "/home",
      params: { 
        targetIndex: 4,
      }
    });
      }
      const handleClick = (index) => {
        selectedIndex.value = index; 
      };

    
const handleCityClick = (city) => {
  const isSameCity = activeCity?.id === city.id;

  if (isSameCity) {
    // Animate out before removing
    scale.value = withTiming(0, { duration: 150 });   
    opacity.value = withTiming(0, { duration: 150 }, () => {
      runOnJS(setActiveCity)(null);
    });
  } else {
    // Just replace city — animation handled in useEffect
    setActiveCity(city);
  }
};
 useEffect(() => {
  if (activeCity) {
    scale.value = 0;
    opacity.value = 0;

    // Animate in only when new city is mounted
    scale.value = withSpring(1, { damping: 14, stiffness: 110 });
    opacity.value = withTiming(1, { duration: 300 });
  }
}, [activeCity]);


      const handlePrevClick = () => {
        if(currentIndex.value === 0) return;
        const newIndex = currentIndex.value === 0 ? cities.length - 1 : currentIndex.value - 1;
        currentIndex.value = newIndex;
        x.value = withSpring(cities[newIndex].x, { damping: 15, stiffness: 90 });
        y.value = withSpring(cities[newIndex].y, { damping: 15, stiffness: 90 });
      };
    
      // Move to next city
      const handleNextClick = () => {
        if(currentIndex.value === cities.length - 1 ) return;
        console.log("clickedd---");
        const newIndex = currentIndex.value === cities.length - 1 ? 4 : currentIndex.value + 1;
        currentIndex.value = newIndex;
        console.log(`Next Click: currentIndex = ${currentIndex.value}`);
        x.value = withSpring(cities[newIndex].x, { damping: 20, stiffness: 90 });
        y.value = withSpring(cities[newIndex].y, { damping: 20, stiffness: 90 });
    
      };

      const mapAnimatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: x.value }, { translateY: y.value }],
      }));
      
const handleButtonPress = (button) => {
    setActiveId(button.id);

    if (button.id === 1) {
    setShowCards(false); 
    } else if (button.id === 2) {
      const fletData = mapData[1]?.exploreData
      // Navigate on second button click
     router.push({
      pathname: '/hundred-years/yearEngineDetails',
      params: { 
        // year: year, 
        isFleetData:true,
        mapData:JSON.stringify(fletData)
      }
      
    });
    } else if (button.id === 3 || button.id === 4) {
      setActiveCity(null);
        setShowCards(true);
         x.value = withSpring("0%", { damping: 20, stiffness: 90 });
    y.value = withSpring("0%", { damping: 20, stiffness: 90 });
    }
     
  };

  return (
    <SafeAreaView className="w-screen h-screen bg-white">
         <View className="h-[80px] flex-row justify-between items-center w-[94%] m-auto  border-b border-black/5">
           <View className='flex flex-row justify-center items-center gap-8 relative z-[9999]'>
  
          {/* <CustomCloseButton onPress={handleClose} type={3}  /> */}
 
          <Text className='text-[1.6rem]  font-ObjektivMk1Bold  leading-[43px]'>Pratt & Whitney in India</Text>
         </View>
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

     <View className=""  style={{ height: calculatedHeight }}>
     <LinearGradient
        colors={["rgba(0, 0, 0, 0.4)", "rgba(255, 255, 255, 0.4)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
       className="absolute top-0 left-0 w-[50%] h-[1px] z-30"
      />
     <View className="w-[560px] absolute z-40 left-0 ">
          <ClippedView width={400} height={550} backgroundColor="white" clipPathId="slidecardFirst1" slug="variant11" />
      {/* Blur Background */}
     
      {/* <View className="absolute -top-[26%] left-0 w-full ">
    
        <Image source={homeImages.curveLogo} className="w-full" resizeMode='contain'/>
      </View> */}

      <View className="w-[70%] mx-auto mt-[60px] relative pl-[10px]">
        <View className="">
          <Text className=" text-[2.2rem] font-ObjektivMk1Bold">70 years </Text>
        <Text className="text-[2.2rem] font-ObjektivMk1Bold">
  of <Text className="text-[#D91027]">Powering</Text>
</Text>
          <Text className=" text-[2.2rem] font-ObjektivMk1Bold">Indian Aviation</Text>

          {/* <Text className="text-[#D91027] text-[2.8rem] leading-[72px]  font-ObjektivMk1Bold">
            Indian Aviation
          </Text> */}
        </View>
      
        {/* Buttons */}
        <View
          className=" pl-[30px] flex flex-col justify-center gap-4 mt-5 pt-6 b"
        >
            <LinearGradient
        colors={["#eae8ea", "rgba(255, 255, 255, 0.4)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
       className="absolute top-0 left-0 w-[90%] h-[1px] z-30"
      />
          {mapData.map((button, index) => { 

            return  (
       
                   <MapTextBtn

                    key={button.id}
                            className={"w-[120px] h-[25px] mt-[2px] relative"}

                            num="0"
                            title= {button.name}
                            textClass={"text-[0.8rem] tracking-widest font-frutigerReg  "}
                            arrowClass="absolute left-0"
                            mapClass="w-max left-0"
                             onPress={() => handleButtonPress(button)}
                            // onPress={() => setActiveId(button.id)}
                            isActive={activeId === button.id}
                          />
       
    
          ) })}
        </View>
      </View>

      {/* SVG Dots */}
      <View className="absolute top-0 left-[52px]">
        <View className="absolute top-0 -translate-x-1/2 -translate-y-1/2 z-10">
          <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <Circle cx="9" cy="9" r="9" fill="#000" fillOpacity="0.1" />
            <Circle cx="9" cy="9" r="5" fill="#B1B1B1" />
          </Svg>
        </View>

        <View className="absolute bottom-0 -translate-x-1/2 translate-y-1/2 z-10">
          <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <Circle cx="9" cy="9" r="9" fill="#000" fillOpacity="0.1" />
            <Circle cx="9" cy="9" r="5" fill="#D91027" />
          </Svg>
        </View>

        <View className="w-[1px] h-[80px] bg-[#00000066]" />
      </View>

    </View>
    
    <View className='overflow-hidden w-full  h-full bg-[#f5f5f5]'>
      <View className="absolute w-full h-full bg-[#c6bebe2c] z-10" />
    <Image source={homeImages.frameMap} className="absolute top-0 left-0 w-full h-full" />
<Animated.View ref={mapRef} className='relative w-full max-w-[1000px] max-h-[90vh] aspect-[16/9] ml-auto overflow-hidden  z-30' style={[mapAnimatedStyle]}>
  {/* <MapSvg /> */}
  <Image source={mapaImages.image.mapIndia} className="w-full h-full" resizeMode='contain' />
{/* <img src={indiaSvg} alt="" className='w-[100%] ' /> */}
{/* <MapCard  cardclass="absolute top-[50%] left-[40%]" /> */}
{/* {activeId === 1 && mapData?.[0]?.cities?.[currentCityIndex]?.data?.map((city, index) => (
        
      <MapCard
          key={city.id}
          cityData={city}
          cardclass={`absolute ${mapData?.[0]?.cities?.[currentCityIndex].position}`}
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
          cardRef={(el) => (cardRef.current[index] = el)}
          index={index}
            cityIndex={currentCityIndex} 
           currentIndex={currentIndex}
           totalCities={city.length}
        />
   
        
      ))} */}

      {activeId === 1 && mapData[0]?.cities?.[currentCityIndex] && (
  <MapCard
    key={mapData[0]?.cities[currentCityIndex].id}
    cityData={mapData[0]?.cities[currentCityIndex]} // ✅ pass full city
    cityIndex={currentCityIndex}
    currentIndex={currentIndex}
    handlePrevClick={handlePrevClick}
    handleNextClick={handleNextClick}
    cardRef={(el) => (cardRef.current[currentCityIndex] = el)}
    totalCities={cities.length}
    cardclass={`absolute ${mapData[0]?.cities[currentCityIndex].position}`}
  />
)}

  {showCards && (
  <>
    {mapData[activeId - 1]?.cities?.map((city, index) => (
      <TouchableOpacity key={city.id}  onPress={() => handleCityClick(city)} className={`flex  items-center justify-center absolute gap-2  ${city.cityPosition} cursor-pointer`}>
        <RedDotSvg width={20} height={20} className=" " />
        <Text className="text-[0.96rem] font-ObjektivMk1Bold ">
          {city.name}
        </Text>
      </TouchableOpacity>
    ))}
  </>
)}
{
  activeId === 1 && (
    <>
    {mapData[activeId - 1]?.cities?.map((city, index) => (
      <TouchableOpacity key={city.id}   className={`flex  items-center justify-center absolute gap-2  ${city.cityPosition} cursor-pointer`}>
        <RedDotSvg width={20} height={20} className=" " />
        <Text className="text-[0.96rem] font-ObjektivMk1Bold ">
          {city.name}
        </Text>
      </TouchableOpacity>
    ))}</>
  )
}

{
  activeCity && (
     <Animated.View className={`absolute p-4 flex-row gap-4 w-[380px] ${activeCity.position}`} style={animatedCityStyle}  onLayout={(event) => {
    const { width, height } = event.nativeEvent.layout;
    setLayout({ width, height });
    console.log("Width:", width, "Height:", height);
  }}>
      <Image
        source={ activeCity.data.img }
        alt={activeCity.title}
        className="w-[80px] h-[80px] rounded-full"
        resizeMode="cover"
      />

      <View>
        {activeCity.data.items?.map((item,index) => (
          <View key={index} className="mb-2">
            <Text className="text-[0.7rem] text-[#D91027]   font-ObjektivMk2Black">{item.title}</Text>

            {item.desc && (
              <Text className="text-[0.6rem] pt-[1px] text-gray-700">{item.desc}</Text>
            )}

            {item.descList && (
              <View className="pt-[1px] space-y-1">
                {item.descList.map((point, idx) => (
                  <Text key={idx} className="text-[0.6rem] text-gray-700 leading-[10px]">
                    {point}
                  </Text>
                ))}
              </View>
            )}
          </View>
        ))}
      </View>
    </Animated.View>
  )
}

</Animated.View>


{/* {
  activeId=== 3 && (

      <View className='absolute bottom-0 left-1/2 -translate-x-1/2 z-[9999]'>
         <View className="w-[90%] mt-[60px] pl-[30px]">
                   
                    <View style={{ width: 110, height: 42 }} className="relative ">
                      <Text className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white z-40">Gallery</Text>
    
                      <Svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        width="110"
                        height="42"
                        viewBox="0 0 110 42"
                        preserveAspectRatio="none"
                      >
                        <Path
                          fill="#242021"
                          stroke="#D91027"
                          d="M.5 11.457 11.457.5H109v30.043L98.043 41.5H.5z"
                        ></Path>
                      </Svg>
                      <Svg
                        style={{ position: 'absolute', top: 20, right: -86 }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="88"
                        height="19"
                        fill="none"
                        viewBox="0 0 88 19"
                      >
                        <Path stroke="#D91027" d="M.5 1.25h75.75L87.5 18.5"></Path>
                        <Path
                          fill="#D91026"
                          d="M48.5 1.25h27.75L83 11l-3-.75-4.5-6.75H50.75z"
                        ></Path>
                      </Svg>
                    </View>
                  </View>
      <View className="slider-section w-[90%] m-auto mt-8  bg-orange-400" >
                { <IndiaCarousel  />}
              </View>
      </View>
  )
} */}

{showCards && (
    <>
      <SlidingCard direction="left" show={showCards}   cardData={mapData[activeId - 1]?.leftCardData} activeId={activeId} />

      <SlidingCard direction="right" show={showCards}   cardData={mapData[activeId - 1]?.rightCardData} activeId={activeId} />

    </>
  )}
    </View>
     </View>

     {/* <View className="flex flex-row absolute bottom-10 right-10 ">
     <TouchableOpacity onPress={()=> router.push("/home")}>
     <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="74"
    height="40"
    fill="none"
    viewBox="0 0 104 40"
  >
    <Path fill="#000" fillOpacity="0.3" d="M0 0h103.5v40H10L0 31z"></Path>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="m23 28-8-8 8-8 2 2-6 6 6 6z"
      clipRule="evenodd"
    ></Path>
    <Path
      fill="#fff"
      d="M36.39 14.328h2.118q1.14 0 1.703.07.562.063 1 .235a2.76 2.76 0 0 1 1.406 1.101q.525.774.524 1.782 0 .672-.235 1.25a2.93 2.93 0 0 1-1.664 1.656 4.6 4.6 0 0 1-1.015.234q-.602.07-1.47.07h-.843V25h-1.523zm1.524 1.313v3.789h.828q1.227 0 2-.399.774-.406.774-1.515 0-.531-.243-.93a1.63 1.63 0 0 0-.703-.633q-.453-.234-1.11-.281-.507-.031-1.546-.031m6.703 1.539h1.344l.07 1.39q.353-.735.914-1.11.57-.382 1.32-.382.391 0 .79.102v1.328a2.1 2.1 0 0 0-.688-.133q-.757 0-1.258.445a2.5 2.5 0 0 0-.726 1.125 4.5 4.5 0 0 0-.227 1.422V25H44.72v-4.766q0-1.156-.102-3.054m6.727 4.28q.156 1.166.851 1.845.704.672 1.758.672.625 0 1.219-.18t1.226-.555v1.39a7.3 7.3 0 0 1-1.289.446 5.4 5.4 0 0 1-1.218.133 4.4 4.4 0 0 1-1.649-.297 3.5 3.5 0 0 1-1.265-.852 3.8 3.8 0 0 1-.805-1.335A5.1 5.1 0 0 1 49.89 21q0-1.195.453-2.11.453-.913 1.297-1.413.85-.508 1.93-.508 1.265 0 2.015.625.758.616 1.07 1.633.32 1.015.32 2.234zm.015-1.132h4.164a3.9 3.9 0 0 0-.296-1.125 1.85 1.85 0 0 0-.649-.789q-.43-.297-1.055-.297-.86 0-1.437.594-.57.586-.727 1.617m13.72-3.148L62.265 25h-1.664l-2.883-7.82h1.57l1.602 4.508q.14.421.25.734.117.304.195.594.086.281.133.625a7 7 0 0 1 .336-1.25l1.836-5.211zm2.702-3.477v1.602h-1.586v-1.602zm-.031 3.477V25h-1.46v-7.82zm9.75 3.93q0 1.187-.516 2.124a3.63 3.63 0 0 1-1.437 1.461q-.922.516-2.078.516-1.14 0-2.047-.523A3.77 3.77 0 0 1 70 23.21a4.34 4.34 0 0 1-.516-2.102q0-.906.29-1.656.296-.758.835-1.312a3.8 3.8 0 0 1 1.282-.868 4.2 4.2 0 0 1 1.593-.304q.86 0 1.602.297t1.289.859.836 1.328q.29.766.289 1.656m-1.54.03q0-.64-.187-1.21a2.8 2.8 0 0 0-.515-.97q-.329-.405-.781-.624a2.2 2.2 0 0 0-.977-.219q-1.07 0-1.781.844-.703.843-.703 2.133 0 .851.312 1.531.32.68.883 1.055.57.375 1.289.375.695 0 1.258-.367.563-.376.883-1.047a3.44 3.44 0 0 0 .32-1.5m10.009-3.945v4.922q0 .64.11 2.883h-1.345l-.062-1.219a3.15 3.15 0 0 1-1.14 1 3.34 3.34 0 0 1-1.5.328q-1.634 0-2.266-1.015-.633-1.016-.633-2.758v-4.14h1.453v3.624q0 .43.016.89.023.462.062.72t.117.476q.21.516.602.79.398.264.937.265.5 0 .907-.195a2 2 0 0 0 .695-.578q.29-.375.445-.899t.156-1.148v-3.946zm6.32.172-.11 1.219a3.5 3.5 0 0 0-1.585-.383q-.602 0-.961.274a.84.84 0 0 0-.352.703q0 .453.352.695.35.242 1.25.695.906.445 1.375.922t.469 1.266q0 .531-.204.976-.194.438-.578.758-.382.313-.922.485-.53.164-1.148.164a4.74 4.74 0 0 1-2.031-.446v-1.297q.563.274.992.399a3.2 3.2 0 0 0 .844.117q.43 0 .773-.133.344-.132.54-.367a.8.8 0 0 0 .195-.523.79.79 0 0 0-.376-.696q-.367-.25-1.257-.71-.883-.462-1.344-.938-.46-.484-.461-1.227 0-.68.336-1.195.336-.516.953-.797.625-.28 1.43-.281.867 0 1.82.32"
    ></Path>
  </Svg>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=> router.push("/home")}><Svg
    xmlns="http://www.w3.org/2000/Svg"
    width="62"
    height="40"
    fill="none"
    viewBox="0 0 88 40"
  >
    <Path fill="#D91027" d="M88 40H0V0h78l10 9z"></Path>
    <Path
      fill="#fff"
      d="M13 28V17.5l7-5.288 7 5.288V28h-5.192v-6.384h-3.616V28zM45.586 16.328V27h-1.523v-4.898h-5.165V27h-1.523V16.328h1.523v4.477h5.164v-4.477zm10.023 6.781q0 1.188-.515 2.125a3.63 3.63 0 0 1-1.438 1.461q-.921.516-2.078.516-1.14 0-2.047-.523a3.77 3.77 0 0 1-1.422-1.477 4.34 4.34 0 0 1-.515-2.102q0-.906.289-1.656.296-.758.836-1.312A3.8 3.8 0 0 1 50 19.273a4.2 4.2 0 0 1 1.594-.304q.859 0 1.601.297t1.29.859.835 1.328.29 1.656m-1.539.032q0-.64-.187-1.211a2.8 2.8 0 0 0-.516-.97q-.328-.405-.781-.624a2.2 2.2 0 0 0-.977-.219q-1.07 0-1.78.844-.705.843-.704 2.133 0 .851.313 1.531.32.68.882 1.055.57.375 1.29.375.694 0 1.257-.367.563-.376.883-1.047.32-.672.32-1.5m4.61-3.961.086 1.258q.21-.43.57-.743.36-.312.836-.476a3.1 3.1 0 0 1 1.055-.172q.883 0 1.468.406.594.399.836 1.164.781-1.57 2.578-1.57.836 0 1.368.32.531.321.796.852.275.523.36 1.187.094.657.094 1.485V27h-1.454v-3.82q0-.758-.03-1.172a3 3 0 0 0-.095-.656q-.304-1.07-1.343-1.07a1.669 1.669 0 0 0-1.14.438 2.3 2.3 0 0 0-.423.514q-.18.297-.281.664a3 3 0 0 0-.117.649q-.024.375-.024 1.14V27h-1.46v-4.016q0-.812-.024-1.109a2.4 2.4 0 0 0-.086-.54q-.148-.498-.492-.773a1.2 1.2 0 0 0-.805-.28q-.586 0-1.062.35-.47.345-.735.962a3.5 3.5 0 0 0-.265 1.39V27h-1.453v-4.398q0-2.087-.102-3.422zm13.148 4.28q.156 1.166.852 1.845.702.672 1.757.672.625 0 1.22-.18.593-.18 1.226-.555v1.39a7.3 7.3 0 0 1-1.29.446 5.4 5.4 0 0 1-1.218.133 4.4 4.4 0 0 1-1.648-.297 3.5 3.5 0 0 1-1.266-.852 3.8 3.8 0 0 1-.805-1.335A5.1 5.1 0 0 1 70.375 23q0-1.195.453-2.11.453-.913 1.297-1.413.851-.508 1.93-.508 1.265 0 2.015.625.758.616 1.07 1.633.32 1.015.32 2.234zm.016-1.132h4.164a3.9 3.9 0 0 0-.297-1.125 1.85 1.85 0 0 0-.648-.789q-.43-.297-1.055-.297-.86 0-1.438.594-.57.586-.726 1.617"
    ></Path>
  </Svg></TouchableOpacity>
     </View> */}
         </SafeAreaView>
  )
}