import { View, Text, Image, TouchableOpacity,Dimensions,StyleSheet, Button,FlatList, ActivityIndicator, InteractionManager } from "react-native";
import React, {useState, useRef, useCallback, useEffect  } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import yearImages from "../../constants/yearImages";
import CloseButton from "../../components/CloseButton ";
import PrevNextButton from "../../components/buttons/PrevNextButton"
import { useLocalSearchParams, useRouter } from "expo-router";
import Carousel from "react-native-reanimated-carousel";
import boxShadow from "../../constants/boxShadow";

// import React, { useState, useRef, useCallback } from 'react';

import Animated, { withSpring, useAnimatedStyle, useSharedValue,withTiming, Easing, useAnimatedScrollHandler, interpolate, runOnJS } from 'react-native-reanimated';
import YearTimelineCarousel from "../../components/YearTimelineCarousel";
import ClippedView from "../../components/ClippedView";
import CustomCloseButton from "../../components/buttons/CustomCloseButton";
import MyTextBtn from "../../components/buttons/MyTextBtn";
import CustomTextButton from "../../components/buttons/CustomTextButton";
import CustomDialog from "../../components/CustomDialog";
import TimelineSkeleton from "../../components/TimelineSkeleton";
const { width,height } = Dimensions.get('window');
const ITEM_WIDTH = width / 5; // Calculate width for 5 visible cards
const adjustedHeight = height - 80;

const years = [
  null,
  null,
  {
      year: "1920s",
      name: "1920",
      subTitle: "Pioneering the Future of Flight",
      description: "Pratt & Whitney Aircraft Company is founded by Frederick B. Rentschler, pioneer of the air-cooled radial engine design",
    },
    {
      year: "1930s",
      name: "1930",
      subTitle: "Advancing Innovations",
      description: "Pratt & Whitney continues advancing innovations with Wasp engine across commercial and military aviation",
    },
    {
      year: "1940s",
      name: "1940",
      subTitle: "Powering the War Effort",
      description: "Pratt & Whitney produced over 300,000 engines during wartime ",
    },
    {
      year: "1950s",
      name: "1950",
      subTitle: "Ushering in the Jet Age",
      description: "From fuel cells for Apollo 11, and most popular general aviation engine – to the world’s fastest military aircraft 1960s were a defining decade",
    },
    {
      year: "1960s",
      name: "1960",
      subTitle: "Innovating Fast, and Reliable Propulsion",
      description: "From fuel cells for Apollo 11, and most popular general aviation engine – to the world’s fastest military aircraft 1960s were a defining decade",
    },
    {
      year: "1970s",
      name: "1970",
      subTitle: "Commercial Aviation Leadership",
      description: "The 70s saw the iconic 747 take to the skies with the JT9D and the F100, one of the most versatile and dependable military engines, power the F-15s and F-16s  ",
    },
    {
      year: "1980s",
      name: "1980",
      subTitle: "FADEC, V2500 nand PW100",
      description: "During the 1980s, Pratt & Whitney further expanded its military and commercial offerings – and reinvented the regional aviation segment",
    },
    {
      year: "1990s",
      name: "1990",
      subTitle: "PW4000 and PW500 become clean leaders",
      description: "The 90s allowed PW to build not only the world’s first 5th Gen engine, but also  develop quieter engines that addressed growing concerns over aircraft noise pollution. ",
    },
    {
      year: "2000s",
      name: "2000",
      subTitle: "Innovation and new frontiers",
      description: "In the 2000s, Pratt & Whitney adapted with further innovation and next-generation thinking that helped the industry begin a new ascent toward even greater accessibility and sustainability efforts",
    },
    {
      year: "2010s",
      name: "2010",
      subTitle: "Decade of expansion",
      description: "Pratt & Whitney Aircraft Company is founded by Frederick B. Rentschler, pioneer of the air-cooled radial engine design",
    },
    {
      year: "2020s",
      name: "2020",
      subTitle: "Focus on the future",
      description: "The 2020s have emphasized the importance of future sustainability, and ongoing research has been devoted to hybrid-electric, alternative fuel and adaptive engine technologies.",
    },
  null,
  null
];



const Card = ({ index, middleIndex ,item, currentIndex,handleStateUp,scrollX,flatListRef}) => {
    const router = useRouter();
  const fadeAnim = useSharedValue(0); // Shared value for opacity
const translateY = useSharedValue(10); // Shared value for slide effect
const handleExplore = () => {
  console.log("clickedd-----------");
   handleStateUp();
}


 // Animation logic for fade and slide
 const textanimatedStyle = useAnimatedStyle(() => {
  fadeAnim.value = middleIndex === index ? withTiming(1, { duration: 300 }) : withTiming(0, { duration: 300 });
  translateY.value = middleIndex === index ? withTiming(0, { duration: 300 }) : withTiming(10, { duration: 300 });

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
      <TouchableOpacity onPress={() => (index === middleIndex ? handleExplore() :  null)} style={{  ...boxShadow("#6b6464", 3, 7, 0.2, 10, 10), width: ITEM_WIDTH, height:ITEM_WIDTH }} className="rounded-full bg-white overflow-hidden   z-40 p-[15px] transition-transform duration-300 ease-in-out relative">
      { middleIndex === index && (<Image source={yearImages.redStrap} className="absolute -left-[0px]  top-[10px] -z-10 w-[80px] h-[90px]"   />)}
<View style={{ ...boxShadow("#b9b7b7", 1, 0, 0.3, 11, 8)}} className={`flex  justify-center items-center rounded-full w-full h-full  bg-white `}>
                    <Text className="text-[2.6rem] text-[#D91027] font-objectiveBlk">
                    {item.year}
                  </Text>
                  <Text className="text-[1.2rem] p-2  text-center font-ObjektivMk1Bold">
                    {item.subTitle}
                  </Text>
                  </View>
      </TouchableOpacity>
      {middleIndex === index && (
         <Animated.View className="text-center mt-6" style={[textanimatedStyle]}>
         <Text className="text-[0.7rem] leading-tight font-[700] text-center font-frutigerBold">
               {item.description}
         </Text>
         {/* <TouchableOpacity onPress={handleExplore} className="mt-6 mx-auto clipped-button-2 px-6 py-2   w-[98px] flex flex-row gap-2 justify-center items-center">
         <ClippedView width={98} height={25} backgroundColor="#D91027" clipPathId="EngineYclip1" slug="variant8"  />
           <Text className="text-[0.58rem] text-white font-frutigerBold">   Explore</Text>
           <Image source={yearImages.tringleArrow} className="w-[10px] h-[10px]" resizeMode="contain" />
         </TouchableOpacity> */}
       <View className=" m-auto">
       <CustomTextButton onPress={handleExplore}  className={"w-[98px] h-[26px]  mt-8 ml-4"}
                                        title={"Explore"}
                                        textClass={" font-[700] text-[0.65rem] font-objektiv tracking-widest "}
                                        boxLeftClass={"w-[13px] h-[13px] -left-[6.5px]  -top-[6.5px] bg-[#f5f5f5]"}
              boxRightClass={"w-[13px] h-[13px] -right-[6.5px] -bottom-[6.5px] bg-[#f5f5f5]"} />
       </View>
      
       </Animated.View>
      )}
     
      {/* <Text className="text-white text-lg">Card {item}</Text> */}
    </Animated.View>
    
  );
};
const yearCarousal = () => {
const router = useRouter();
const { yearParam} = useLocalSearchParams();
  const [currentIndex, setCurrentIndex] = useState(0);  // Initial current index
  const [middleIndex, setMiddleIndex] = useState(2);   // Initial middle index (3rd card)
  const [prevActiveIndex, setPrevActiveIndex] = useState([]);
  const [childSlideId, setChildSlideId] = useState(0);
  const [yearDetails, setYearDetails] = useState("");
    const [imagePosition, setImagePosition] = useState(0);
    const [showTimeline, setShowTimeline] = useState(false);

    const [dialogImages, setDialogImages] = useState([]);
    const [direction, setDirection] = useState("next"); 
  const flatListRef = useRef(null);
  const airplaneRefs = useRef([]);
  const scrollX = useSharedValue(0.5); 
  const animatedX = useSharedValue(0);
// console.log("currentindex",currentIndex);
// console.log("imageposition",imagePosition);
// console.log("direction",direction);
// console.log("yearDetails----",yearDetails);
// console.log("yearParam----",yearParam);
// console.log("middleIndex",middleIndex);
// At the top of your component
const [savedPosition, setSavedPosition] = useState(null);
const [isDialogOpen, setIsDialogOpen] = useState(false);
const [startIndex, setStartIndex] = useState(0);

useEffect(()=> {if(yearParam){
  handleStateUp();
}

},[yearParam])

const handleImageClick = useCallback((index,img) => {
  // console.log("images------",img);
  setDialogImages(img);
  setStartIndex(index);
  setIsDialogOpen(true);
  // console.log("handleclick");
}, []);
const isRestoringPosition = useRef(false); 
// Before switching to YearTimelineCarousel
const handleStateUp = () => {
  

 
    setYearDetails("view");
    setShowTimeline(false);      // immediately hide heavy component

    setTimeout(() => {
      setShowTimeline(true);     // show it after delay
    }, 900);
};




   const handleChangeYearFlag = (curr) => {
    // console.log("curr---", curr);
    if (curr === null) return;
    
    setYearDetails(""); // Reset to carousel view
    // scrollToIndex(childSlideId)
    // Ensure the carousel is properly centered on return
    // if (savedPosition) {
    //   isRestoringPosition.current = true;
    //   setTimeout(() => {
    //     setCurrentIndex(savedPosition.currentIndex);
    //     setMiddleIndex(savedPosition.middleIndex);
    //     scrollX.value = savedPosition.scrollPosition;
    //     scrollToIndex(savedPosition.currentIndex);
    //   }, 100);
    // }
    // if(flatListRef.current){
    //   scrollToIndex(childSlideId)
    // }
    animateAirplanes(childSlideId,"next");
    
  };
 
  
  // useEffect(() => {
  //   if (yearDetails === "" && flatListRef.current) {
  //     // When returning to carousel view, ensure proper centering
  //     scrollToIndex(currentIndex);
  //   }
  // }, [yearDetails]);
  
  // Modify scrollToIndex function for better accuracy

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
    const newIndex = Math.round(event.contentOffset.x / ITEM_WIDTH)+ 2;
  
 // Only update indices if we're not restoring position
 if (!isRestoringPosition.current) {
  const newIndex = Math.round(event.contentOffset.x / ITEM_WIDTH);
  // console.log("newindex",newIndex);
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
  const handleTimeClose = () => {
    handleChangeYearFlag();
  
    // handleSliderMove(childSlideId);
    // animateAirplanes(childSlideId + 1, false);
  
  }

// console.log("year-lenght ",years.length);
  const airplaneImages = [
    yearImages.aero1,
    yearImages.aero2,
    yearImages.aero3,
    yearImages.aero4,
    yearImages.aero5,
    yearImages.aero6,
    yearImages.aero7,
    yearImages.aero8,
    yearImages.aero9,
    yearImages.aero10,
    yearImages.aero11,

  ];

  // console.log("names",years[middleIndex]);
  const positions = airplaneImages.map(() => useSharedValue(-130)); // Initial positions
  const opacities = airplaneImages.map(() => useSharedValue(0)); // Initial opacities
  
  // Animate the airplanes based on activeIndex and direction
  const animateAirplanes = (index,direction) => {
    console.log("index-clicked", `${index}-${direction}`);
    airplaneRefs.current.forEach((el, idx) => {
      if (idx <= index) {
        positions[idx].value = withTiming(0, { duration: 600 });
        opacities[idx].value = withTiming(1, { duration: 600 });
      }
      // Hide all airplanes after current index
      else {
        positions[idx].value = withTiming(-130, { duration: 600 });
        opacities[idx].value = withTiming(0, { duration: 600 });
      }  if (direction === "prev") {
        // If going back from index 5 to 3, hide index 4 and 5
        if (idx >= index) {
          positions[idx].value = withTiming(-130, { duration: 600 });
          opacities[idx].value = withTiming(0, { duration: 600 });
        }
      }
    });    
  };

  

// Create animated styles for each airplane
const animatedStyles = (idx) => {
  return useAnimatedStyle(() => ({
    transform: [{ translateX: positions[idx].value }],
    opacity:   opacities[idx].value,
  }));
};

const handleDataFromChild = (data) => {
  console.log("dataa-",data);
  setChildSlideId(data); 
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
const scrollToIndex = (index) => {
  console.log("index--", index);
  // console.warn("flatListRef.current",flatListRef.current);
  if (
    flatListRef.current &&
    index !== undefined &&
  index >= 0 
  ) {
    flatListRef.current.scrollToIndex({
      index,
      animated: true,
    });

    // Manually update states
    setCurrentIndex(index);
    setMiddleIndex(index + 2);
  } else {
    console.warn("Invalid index passed to scrollToIndex:", index);
  }
};
useEffect(() => {
  const task = InteractionManager.runAfterInteractions(() => {
    if (flatListRef.current && childSlideId != null) {
      console.log("Scrolling now because flatListRef is ready");
      flatListRef.current.scrollToIndex({
        index: childSlideId,
        animated: true,
      });
    } else {
      console.log("flatListRef.current is null, waiting for mount...");
    }
  });

  return () => task.cancel();
}, [childSlideId, years, yearDetails]); 

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
           
                <CustomCloseButton onPress={yearDetails === "" ? handleClose : handleTimeClose} />


          </View>
        </View>
        {/* main */}
        <View className="flex-row justify-center items-center relative bg-[#f5f5f5]">
          <Image
            source={yearImages.logo100}
         
            className={`h-[76px] w-[320px] ${yearDetails ==="view" ? "absolute top-[30px] z-40" : 'mt-[30px]'}`}
            resizeMode="cover"
          />
        </View>

        {yearDetails === "" ? (
          <View className="flex justify-center items-center relative bg-[#f5f5f5]" style={{height:adjustedHeight - 106}}>
             <View className="absolute top-[30%] h-[2px] w-full bg-[#c1c0c066] "  />
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
          <Card index={index} item={item} middleIndex={middleIndex} currentIndex={currentIndex} scrollX={scrollX} handleStateUp = {handleStateUp} flatListRef={flatListRef}  />
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
       ) :  
 !showTimeline ? (
  <View className="flex justify-center items-center h-screen bg-[#f5f5f5]">
  <TimelineSkeleton />
      </View>
      
    ) : (
      <View className="flex items-center bg-[#f5f5f5]" style={{height:adjustedHeight,    opacity: showTimeline ? 1 : 0,    position: 'relative',
        zIndex: showTimeline ? 0 : -1,}}  >
          {/* <Text className="text-red-500">Hello by this is come first:------------</Text> */}
        <YearTimelineCarousel Year={years[middleIndex]?.name} animateAirplanes={animateAirplanes} setImagePosition={setImagePosition} animatedX={animatedX} handleChangeYearFlag={handleChangeYearFlag} onImageClick={handleImageClick} handleDataFromChild={handleDataFromChild} yearParam={yearParam} />
    </View>
    )

       }

        {/* Footer */}
      <View className="w-screen absolute bottom-0 left-0">
  <Animated.Image
    style={[{ width: '120%' }, moveImgAnimatedStyle]}
    className="h-[80px] " 
    source={yearImages.moveCity}
    alt="terrain"
    resizeMode="cover"
  />
  <View className="absolute flex-row w-[93%] left-[50%] bottom-[90px] gap-[50px]" style={{ transform: [{ translateX: -0.5 * 93 + "%" }] }}>
    {airplaneImages.map((airplane, index) => {
      const animatedStyle = animatedStyles(index);
      return (
        <Animated.Image
          key={index}
          ref={(el) => (airplaneRefs.current[index] = el)}
          source={airplane}
          className="w-[80px]"
          style={[animatedStyle, { width: 60, height: 25 }]}
          resizeMode="contain"
        />
      );
    })}
  </View>
  <View className="absolute bottom-0 w-full px-3">
  {/* <Image
    source={yearImages.bracket}
    className="w-full h-[140px]"
    resizeMode="cover"
  /> */}
</View>
</View>
      </View>

      {isDialogOpen && (
        <CustomDialog
        images={dialogImages}
        startIndex={startIndex}
          onClose={() => setIsDialogOpen(false)}
        />
      )}
     
    </SafeAreaView>
  );
};

export default yearCarousal;


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
