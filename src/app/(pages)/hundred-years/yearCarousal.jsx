import { View, Text, Image, TouchableOpacity,Dimensions,StyleSheet, Button,FlatList } from "react-native";
import React, {useState, useRef, useCallback, useEffect  } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import yearImages from "../../constants/yearImages";
import CloseButton from "../../components/CloseButton ";
import PrevNextButton from "../../components/buttons/PrevNextButton"
import { useRouter } from "expo-router";
import Carousel from "react-native-reanimated-carousel";
import boxShadow from "../../constants/boxShadow";

// import React, { useState, useRef, useCallback } from 'react';

import Animated, { withSpring, useAnimatedStyle, useSharedValue,withTiming, Easing, useAnimatedScrollHandler, interpolate, runOnJS } from 'react-native-reanimated';
import YearTimelineCarousel from "../../components/YearTimelineCarousel";
import ClippedView from "../../components/ClippedView";
import CustomCloseButton from "../../components/buttons/CustomCloseButton";
import MyTextBtn from "../../components/buttons/MyTextBtn";
const { width } = Dimensions.get('window');
const ITEM_WIDTH = width / 5; // Calculate width for 5 visible cards

const years = [
  null,
  null,
  { year: "1920s", name: "1920", description: "Pioneering propulsion" },
  { year: "1930s", name: "1930", description: "Advancing aviation" },
  { year: "1940s", name: "1940", description: "Defending freedom" },
  { year: "1950s", name: "1950", description: "Ushering in the jet age" },
  { year: "1960s", name: "1960", description: "Higher, faster, further" },
  { year: "1970s", name: "1970", description: "Powerful, agile, dependable" },
  { year: "1980s", name: "1980", description: "Innovating advancements" },
  { year: "1990s", name: "1990", description: "Lorem Ipsum" },
  null,
  null
];


const Card = ({ index, middleIndex ,item, currentIndex,handleStateUp,scrollX}) => {
    const router = useRouter();
  const fadeAnim = useSharedValue(0); // Shared value for opacity
const translateY = useSharedValue(10); // Shared value for slide effect
const handleExplore = () => {
  console.log("click");
  handleStateUp();
}


 // Animation logic for fade and slide
 const textanimatedStyle = useAnimatedStyle(() => {
  fadeAnim.value = middleIndex === index ? withTiming(1, { duration: 500 }) : withTiming(0, { duration: 300 });
  translateY.value = middleIndex === index ? withTiming(0, { duration: 500 }) : withTiming(10, { duration: 300 });

  return {
    opacity: fadeAnim.value,
    transform: [{ translateY: translateY.value }],
  };
});
  // console.log("itemss", item);

  if (!item) {
    return <View style={{ width: ITEM_WIDTH, height: ITEM_WIDTH }} />;
  }
  const validIndex = years.map((item, index) => (item ? index : null)).filter(i => i !== null).indexOf(index);

 
  // Update the scale of the card based on whether it's the middle card
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollX.value,
      [
        (validIndex - 2) * ITEM_WIDTH, // Far left
        (validIndex - 1) * ITEM_WIDTH, // Left
        validIndex * ITEM_WIDTH,       // Center
        (validIndex + 1) * ITEM_WIDTH, // Right
        (validIndex + 2) * ITEM_WIDTH  // Far right
      ],
      [0.5, 0.5, 1, 0.5, 0.5], // Scaling effect
      "clamp"
    );

    return {
      transform: [{ scale }],
    };
  });

  



  return (
    <Animated.View
      style={[{ width: ITEM_WIDTH, height:ITEM_WIDTH }, animatedStyle]}
      className={`item-${index} ${ middleIndex === index ? 'active' : ''} ${middleIndex > index  ? 'left' : 'right'}`}
    >
      <View  style={{  ...boxShadow("#6b6464", 3, 7, 0.2, 10, 10), width: ITEM_WIDTH, height:ITEM_WIDTH }} className="rounded-full bg-white overflow-hidden   z-40 p-[15px] transition-transform duration-300 ease-in-out relative">
      { middleIndex === index && (<View className="absolute bg-[#E11C37] -left-[26px]  top-[4px] -z-10"      style={{ width: ITEM_WIDTH/3, height:ITEM_WIDTH/2 }} />)}
<View style={{ ...boxShadow("#b9b7b7", 1, 0, 0.3, 11, 8)}} className={`flex  justify-center items-center rounded-full w-full h-full transition-all duration-300  ease-in-out bg-white ${
                    middleIndex === index
                      ? "opacity-100"
                      : "bg-white text-black opacity-80"
                  }`}>
                    <Text className="text-[2.6rem] text-[#D91027] font-objectiveBlk">
                    {item.year}
                  </Text>
                  <Text className="text-[1.2rem] p-2  text-center font-ObjektivMk1Bold">
                    {item.description}
                  </Text>
                  </View>
      </View>
      {middleIndex === index && (
         <Animated.View className="text-center mt-6" style={[textanimatedStyle]}>
         <Text className="text-[0.7rem] leading-tight font-[700] text-center font-frutigerBold">
           With the war over, a new golden age of progress begins. Prat & Whitney’s JT3D powers USA’s first commercial Jetliner, The Boeing 707.
         </Text>
         {/* <TouchableOpacity onPress={handleExplore} className="mt-6 mx-auto clipped-button-2 px-6 py-2   w-[98px] flex flex-row gap-2 justify-center items-center">
         <ClippedView width={98} height={25} backgroundColor="#D91027" clipPathId="EngineYclip1" slug="variant8"  />
           <Text className="text-[0.58rem] text-white font-frutigerBold">   Explore</Text>
           <Image source={yearImages.tringleArrow} className="w-[10px] h-[10px]" resizeMode="contain" />
         </TouchableOpacity> */}
       <View className=" m-auto">
       <MyTextBtn onPress={handleExplore}  className={"w-[98px] h-[26px]  mt-8 ml-4"}
                                        title={"Explore"}
                                        textClass={" font-[700] text-[0.65rem] font-objektiv tracking-widest "} />
       </View>
      
       </Animated.View>
      )}
     
      {/* <Text className="text-white text-lg">Card {item}</Text> */}
    </Animated.View>
    
  );
};
const yearCarousal = () => {
const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);  // Initial current index
  const [middleIndex, setMiddleIndex] = useState(2);   // Initial middle index (3rd card)
  const [prevActiveIndex, setPrevActiveIndex] = useState([]);
  
  const [yearDetails, setYearDetails] = useState("");
    const [imagePosition, setImagePosition] = useState(0);
    const [direction, setDirection] = useState("next"); 
  const flatListRef = useRef(null);
  const airplaneRefs = useRef([]);
  const scrollX = useSharedValue(0.5); 
  const animatedX = useSharedValue(0);
console.log("currentindex",currentIndex);
console.log("imageposition",imagePosition);
console.log("direction",direction);
// At the top of your component
const [savedPosition, setSavedPosition] = useState(null);
const isRestoringPosition = useRef(false); 
// Before switching to YearTimelineCarousel
const handleStateUp = () => {
  setSavedPosition({
    currentIndex,
    middleIndex,
    scrollPosition: scrollX.value
  });
  setYearDetails("view");
};


   const handleChangeYearFlag = (curr) => {
    console.log("curr---", curr);
    if (curr === null) return;
    
    setYearDetails(""); // Reset to carousel view
    
    // Ensure the carousel is properly centered on return
    if (savedPosition) {
      isRestoringPosition.current = true;
      setTimeout(() => {
        setCurrentIndex(savedPosition.currentIndex);
        setMiddleIndex(savedPosition.middleIndex);
        scrollX.value = savedPosition.scrollPosition;
        scrollToIndex(savedPosition.currentIndex);
      }, 100);
    }
  };
 
  
  // useEffect(() => {
  //   if (yearDetails === "" && flatListRef.current) {
  //     // When returning to carousel view, ensure proper centering
  //     scrollToIndex(currentIndex);
  //   }
  // }, [yearDetails]);
  
  // Modify scrollToIndex function for better accuracy
  const scrollToIndex = (index) => {
    console.log("index--", index);
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ 
        animated: true, 
        index,

      });
      
      // Update states to maintain consistency
      setCurrentIndex(index);
      setMiddleIndex(index + 2);
    }
  };
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
    const newIndex = Math.round(event.contentOffset.x / ITEM_WIDTH)+ 2;
  
 // Only update indices if we're not restoring position
 if (!isRestoringPosition.current) {
  const newIndex = Math.round(event.contentOffset.x / ITEM_WIDTH);
  console.log("newindex",newIndex);
  runOnJS(setDirection)(newIndex > currentIndex ? "next" : "prev" );
  runOnJS(setCurrentIndex)(newIndex);

  runOnJS(setMiddleIndex)(newIndex + 2);
}
    // runOnJS(setImagePosition)((prev) => prev + 50);
  });
  // const handleScroll = useCallback((event) => {
  //   const contentOffsetX = event.nativeEvent.contentOffset.x;
  //   // console.log("contentoffset",contentOffsetX);
  //   const newIndex = Math.round(contentOffsetX / ITEM_WIDTH + 2); // Round to nearest index
  //   console.log("go", newIndex);

  //   // Only update middleIndex if the new index is different from the current middle index
  //   if (newIndex !== middleIndex) {
  //     setMiddleIndex(newIndex);
  //   }
  // }, [middleIndex]);
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setMiddleIndex(middleIndex - 1);
      scrollToIndex(currentIndex - 1);
      setImagePosition((prev) => prev - 50);
      setDirection("prev");
      setPrevActiveIndex((prev) => prev.slice(0, prev.length - 1));
    }
  };

  const handleNext = () => {

    if (currentIndex < years.length - 5) {
      setCurrentIndex(currentIndex + 1);
      setMiddleIndex(middleIndex + 1);
      scrollToIndex(currentIndex + 1);
      setImagePosition((prev) => prev + 50);
      setDirection("next");
      setPrevActiveIndex((prev) => [...prev, currentIndex]);
    }
  };
  


  const handleClose = () => {
    // Navigate to another screen or action
    router.push("/hundred-years");
  };

console.log("year-lenght ",years.length);
  const airplaneImages = [
    yearImages.aero1,
    yearImages.aero2,
    yearImages.aero3,
    yearImages.aero4,
    yearImages.aero1,
    yearImages.aero2,
    yearImages.aero3,
    yearImages.aero1,
    yearImages.aero2,
  ];

  // console.log("names",years[middleIndex]);
  const positions = airplaneImages.map(() => useSharedValue(-130)); // Initial positions
  const opacities = airplaneImages.map(() => useSharedValue(0)); // Initial opacities
  
  // Animate the airplanes based on activeIndex and direction
  const animateAirplanes = (index,direction) => {
    console.log("index-clicked", index);
    airplaneRefs.current.forEach((el, idx) => {
      if (idx === index) {
        if(direction ==="next"){
          positions[idx].value = withTiming(0, { duration: 600 });
          opacities[idx].value = withTiming(1, { duration: 600 });
        }else{
          positions[idx].value = withTiming(-130, { duration: 600 });
          opacities[idx].value = withTiming(0, { duration: 600 });
        }
      } else if ( prevActiveIndex.includes(idx)) {
        positions[idx].value = withTiming(0, { duration: 600 });
        opacities[idx].value = withTiming(1, { duration: 600 });
      }
    });    
  };
    // airplaneImages.forEach((_, idx) => {
    //   // Reset positions and opacity before animating
    //   opacityValues.value[idx] = withTiming(idx === currentIndex ? 1 : 0, { duration: 600 });
    //   translateXValues.value[idx] = withTiming(
    //     idx === currentIndex ? 0 : (idx === currentIndex + 1 ? -130 : 130), 
    //     { duration: 600 }
    //   );
    // });
  

// Create animated styles for each airplane
const animatedStyles = (idx) => {
  return useAnimatedStyle(() => ({
    transform: [{ translateX: positions[idx].value }],
    opacity:   opacities[idx].value,
  }));
};


useEffect(() => {
  if(direction ==="prev"){
   animateAirplanes(currentIndex + 1,direction);
  }
  else{
   animateAirplanes(currentIndex,direction);
  }
 }, [currentIndex]);
//  useEffect(() => {
//   // Smooth transition using `withTiming`
//   animatedX.value = withTiming(-imagePosition, {
//     duration: 500, // 0.5s duration
//     easing: Easing.inOut(Easing.ease), // Smooth effect
//   });
// }, [imagePosition]);

// Define animated styles
const moveImgAnimatedStyle = useAnimatedStyle(() => ({
  transform: [{ translateX: animatedX.value }],
}));


  return (
    <SafeAreaView className="bg-white">
         <View className=" w-full h-screen overflow-hidden relative">
        {/* Header */}
        <View className="h-[80px] flex flex-row justify-between items-center  px-12">
          <Image
            source={yearImages.pwLogo}
            alt="homeLogo"
            className="max-w-[180px] max-h-[50px]"
            resizeMode="contain"
          />
          <View className=" flex flex-row justify-center items-center gap-4 z-40">
           
                <CustomCloseButton onPress={handleClose} />


          </View>
        </View>
        {/* main */}
        <View className="flex-row justify-center items-center relative bg-[#f5f5f5]">
          <Image
            source={yearImages.logo100}
         
            className={`h-[76px] w-[320px] ${yearDetails ==="view" ? "absolute top-[30px]" : 'mt-[30px]'}`}
            resizeMode="cover"
          />
        </View>

        {yearDetails === "" ? (
          <View className="flex justify-center items-center h-[calc(100vh-316px)] bg-[#f5f5f5]">
            <View className="flex  justify-center items-center h-full w-full">
              <View className="slider-container-100years  flex  h-[80%] w-full relative  z-[999999]">
       
              <View className="flex-1  transform">
       <Animated.FlatList
        ref={flatListRef}
        data={years}
        horizontal
        showsHorizontalScrollIndicator={false}
        initialScrollIndex={currentIndex} // Add this
        maintainVisibleContentPosition={{ // Add this
          minIndexForVisible: 0,
          autoscrollToTopThreshold: 10,
        }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Card index={index} item={item} middleIndex={middleIndex} currentIndex={currentIndex} scrollX={scrollX} handleStateUp = {handleStateUp}  />
        )}
        snapToInterval={ITEM_WIDTH}
        decelerationRate="fast"
        getItemLayout={(data, index) => ({
          length: ITEM_WIDTH,
          offset: ITEM_WIDTH * index,
          index,
        })}
        onScroll={scrollHandler} // Listen to scroll events
        scrollEventThrottle={16} // Update the scroll position frequently
        onMomentumScrollEnd={() => {
          // Reset flag after scroll momentum ends
          isRestoringPosition.current = false;
        }}
      />
        <View className="h-[2.1px] w-full bg-gray-100 absolute -z-50  " style={{top:ITEM_WIDTH/2}} />
        {/* <View className="h-60 w-screen bg-slate-500 absolute left-1/2 transform -translate-x-1/2  top-[20%] "></View> */}
     

      <View className="absolute left-4 " style={{top:ITEM_WIDTH/2,transform: [{ translateY: "-50%" }]}}>
   <PrevNextButton
        isColor={currentIndex === 0 ? "grey" : "red"} 
        isIcon='prev'
        isPolygon="first"
                onPress={handlePrev}
              />
   </View>

   
      
   <View className="absolute right-4  " style={{top:ITEM_WIDTH/2, transform: [{ translateY: "-50%" }]}}>
   <PrevNextButton
           isColor={currentIndex === years.length - 5  ? "grey" : "red"}
           isIcon='next'
           onPress={handleNext}
         />

   </View>
 



    </View>
 


              </View>
            </View>
          </View>
       ) : (
        <View className="h-[calc(100vh-80px)] flex items-center bg-[#f5f5f5]">
        <YearTimelineCarousel Year={years[middleIndex]?.name} animateAirplanes={animateAirplanes} setImagePosition={setImagePosition} animatedX={animatedX} handleChangeYearFlag={handleChangeYearFlag} />
    </View>
      )}

        {/* Footer */}
      <View className="w-screen absolute bottom-0 left-0">
  <Animated.Image
    style={[{ width: '120%' }, moveImgAnimatedStyle]}
    className="h-[80px] " 
    source={yearImages.moveCity}
    alt="terrain"
    resizeMode="cover"
  />
  <View className="absolute flex-row w-[93%] left-[50%] bottom-[50px] gap-[80px]" style={{ transform: [{ translateX: -0.5 * 93 + "%" }] }}>
    {airplaneImages.map((airplane, index) => {
      const animatedStyle = animatedStyles(index);
      return (
        <Animated.Image
          key={index}
          ref={(el) => (airplaneRefs.current[index] = el)}
          source={airplane}
          className="w-[80px]"
          style={[animatedStyle, { width: 70, height: 25 }]}
          resizeMode="contain"
        />
      );
    })}
  </View>
  <View className="absolute bottom-0 w-full px-3">
  <Image
    source={yearImages.bracket}
    className="w-full h-[140px]"
    resizeMode="cover"
  />
</View>
</View>
      </View>
     
    </SafeAreaView>
  );
};

export default yearCarousal;

// import React, { useState, useRef, useCallback } from 'react';
// import { FlatList, View, Text, TouchableOpacity, Dimensions } from 'react-native';
// import Animated, { withSpring, useAnimatedStyle, useSharedValue,withTiming } from 'react-native-reanimated';


// const { width } = Dimensions.get('window');
// const ITEM_WIDTH = width / 5; // Calculate width for 5 visible cards


// const handleExplore = () => {
//   console.log("click");
// }


// const years = [
//   null,
//   null,
//   { year: "1920s", name: "1920", description: "Pioneering propulsion" },
//   { year: "1930s", name: "1930", description: "Advancing aviation" },
//   { year: "1940s", name: "1940", description: "Defending freedom" },
//   { year: "1950s", name: "1950", description: "Ushering in the jet age" },
//   { year: "1960s", name: "1960", description: "Higher, faster, further" },
//   { year: "1970s", name: "1970", description: "Powerful, agile, dependable" },
//   { year: "1980s", name: "1980", description: "Innovating advancements" },
//   { year: "1990s", name: "1990", description: "Lorem Ipsum" },
//   null,
//   null
// ];


// const Card = ({ index, middleIndex ,item, currentIndex}) => {
//   const fadeAnim = useSharedValue(0); // Shared value for opacity
// const translateY = useSharedValue(10); // Shared value for slide effect
//  // Animation logic for fade and slide
//  const textanimatedStyle = useAnimatedStyle(() => {
//   fadeAnim.value = middleIndex === index ? withTiming(1, { duration: 500 }) : withTiming(0, { duration: 300 });
//   translateY.value = middleIndex === index ? withTiming(0, { duration: 500 }) : withTiming(10, { duration: 300 });

//   return {
//     opacity: fadeAnim.value,
//     transform: [{ translateY: translateY.value }],
//   };
// });
//   console.log("itemss", item);

//   const scale = useSharedValue(0.5); // Initialize scale to 0.5
  
//   // let translateValue = 0;

//   // if (middleIndex === index) {
//   //   translateValue = 0; // Active card
//   // }
//   // else if (middleIndex +1 === index || middleIndex -1 === index) {
//   //   translateValue = 0;
//   // } else if (middleIndex > index) {
//   //   translateValue = 50 * index; // Left card
//   // } else if (middleIndex < index) {
//   //   translateValue = -50 * index; // Right card
//   // }
//   // Update the scale of the card based on whether it's the middle card
//   const animatedStyle = useAnimatedStyle(() => {
//     scale.value = withSpring(index === middleIndex ? 1 : 0.5, { damping: 20, stiffness: 100 });
//     return {
//       transform: [{ scale: scale.value }],
//     };
//   });

//   if (item === null) {
//     // Render an empty placeholder for null items
//     return <View style={{ width: ITEM_WIDTH }} />;
//   }

//   return (
//     <Animated.View
//       style={[{ width: ITEM_WIDTH, height:ITEM_WIDTH }, animatedStyle]}
//       className={`item-${index} ${ middleIndex === index ? 'active' : ''} ${middleIndex > index  ? 'left' : 'right'}`}
//     >
//       <View  style={{ width: ITEM_WIDTH, height:ITEM_WIDTH }} className="rounded-full bg-white overflow-hidden  shadow-[3px_7px_20px_10px_#6b646426] z-40 p-[13px] transition-transform duration-300 ease-in-out relative">
// <View  className={`flex  justify-center items-center rounded-full w-full h-full transition-all duration-300 shadow-[1px_0px_11px_8px_#b9b7b730] ease-in-out bg-white ${
//                     middleIndex === index
//                       ? "opacity-100"
//                       : "bg-white text-black opacity-80"
//                   }`}>
//                     <Text className="text-[2.6rem] font-[800] text-[#D91027] font-objektiv">
//                     {item.year}
//                   </Text>
//                   <Text className="text-[0.9rem] p-2 font-bold text-center font-objektiv">
//                     {item.description}
//                   </Text>
//                   </View>
//       </View>
//       {middleIndex === index && (
//          <Animated.View className="text-center mt-6" style={[textanimatedStyle]}>
//          <Text className="text-[0.5rem] leading-tight font-[600] text-center">
//            With the war over, a new golden age of progress begins. Prat & Whitney’s JT3D powers USA’s first commercial Jetliner, The Boeing 707.
//          </Text>
//          <TouchableOpacity onPress={handleExplore} className="mt-6 mx-auto clipped-button-2 px-6 py-2 explore_arrow_clip-Path bg-[#D91027] w-[80px] flex gap-2 justify-center items-center">
//            <Text className="text-[0.5rem]  text-white">   Explore</Text>
//          </TouchableOpacity>
      
//        </Animated.View>
//       )}
     
//       {/* <Text className="text-white text-lg">Card {item}</Text> */}
//     </Animated.View>
//   );
// };

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);  // Initial current index
//   const [middleIndex, setMiddleIndex] = useState(2);   // Initial middle index (3rd card)
//   const flatListRef = useRef(null);
 

//   const scrollToIndex = (index) => {
//     flatListRef.current.scrollToIndex({ animated: true, index });
//   };
//   const handleScroll = useCallback((event) => {
//     const contentOffsetX = event.nativeEvent.contentOffset.x;
//     console.log("contentoffset",contentOffsetX);
//     const newIndex = Math.round(contentOffsetX / ITEM_WIDTH + 2); // Round to nearest index
//     console.log("go", newIndex);

//     // Only update middleIndex if the new index is different from the current middle index
//     if (newIndex !== middleIndex) {
//       setMiddleIndex(newIndex);
//     }
//   }, [middleIndex]);
//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//       setMiddleIndex(middleIndex - 1);
//       scrollToIndex(currentIndex - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentIndex < years.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//       setMiddleIndex(middleIndex + 1);
//       scrollToIndex(currentIndex + 1);
//     }
//   };

//   return (
//     <View className="flex-1 transform">
//       <FlatList
//         ref={flatListRef}
//         data={years}
//         horizontal
//         showsHorizontalScrollIndicator={false}
 
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item, index }) => (
//           <Card index={index} item={item} middleIndex={middleIndex} currentIndex={currentIndex} />
//         )}
//         snapToInterval={ITEM_WIDTH}
//         decelerationRate="fast"
//         getItemLayout={(data, index) => ({
//           length: ITEM_WIDTH,
//           offset: ITEM_WIDTH * index,
//           index,
//         })}
//         onScroll={handleScroll} // Listen to scroll events
//         scrollEventThrottle={16} // Update the scroll position frequently
       
//       />
//       <View className="flex-row mt-5 justify-between w-[90%] absolute left-1/2 transform -translate-x-1/2">
//         <TouchableOpacity
//           className="px-4 py-2 bg-indigo-600 rounded-md"
//           onPress={handlePrev}
//         >
//           <Text className="text-white text-lg">Prev</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           className="px-4 py-2 bg-indigo-600 rounded-md"
//           onPress={handleNext}
//         >
//           <Text className="text-white text-lg">Next</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default Carousel;
