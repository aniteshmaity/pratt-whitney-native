import { View, Text, Image, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import CloseButton from './CloseButton ';

import Swiper from "react-native-swiper";
import PrevNextButton from './PrevNextButton';
import yearSlideData from '../constants/yearSlideData'
import CloneItem from './CloneItem';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import yearSlidedata from '../constants/yearSlideData';
import InnerCarousel from './InnerCarousel';
import { useRouter } from 'expo-router';
export default function YearTimelineCarousel({Year, animateAirplanes,handleChangeYearFlag,setImagePosition}) {
   const router = useRouter();
  const goToYearExplore = () => {
    // Navigate to another screen or action
    router.push('/hundred-years/yearEngineDetails')
  };

  // Function to trigger animation on button click
console.log("year-----", Year);
    const getInitialSlideIndex = () => {
        const index = yearSlideData.findIndex((slide) => slide.year === Year);
        return index !== -1 ? index : 0; // Default to 0 if Year doesn't match
      };
    const swiperRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currrentSlideStatus ,setCurrentSlideStatus] = useState(false);
    const [prevContentClones, setPrevContentClones] = useState([]);
    const [nextContentClones, setNextContentClones] = useState([]);
    const [currentInnerSlide, setCurrentInnerSlide] = useState(0);
    const [innerSlideStatus, setInnerSlideStatus] = useState(false);
    const [slideDataIndex, setSlideDataIndex] = useState(getInitialSlideIndex);
    const [activeId, setActiveId] = useState(null);
    const [activeNextId, setActiveNextId] = useState(null);
    const [animationTrigger, setAnimationTrigger] = useState(0);
    const [direction, setDirection] = useState("next");
const [navigationDirection,setNavigationDirection] = useState("next");
    const [isAnimating, setIsAnimating] = useState(false);
  
    const opacity = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  console.log("isanimate",isAnimating);
  // Function to trigger animation
  const animateSlide = (x,y) => {

        translateX.value = x;
        translateY.value = y;

        
        // Then animate to 0% with timing
        setTimeout(() => {
          translateX.value = withTiming(0, { duration: 800 });
          translateY.value = withTiming(0, { duration: 800 });
        }, 0);
    
  };

  // Set initial state on mount
//   useEffect(() => {
//     animateSlide(true); // Ensure it starts at (0,0)
//   }, []);
    console.log("prevcontentclones",prevContentClones);
    console.log("nextcontentclones",nextContentClones);
    console.log("currentstatus",currrentSlideStatus);
    console.log("navigatedirec",navigationDirection);
      const handleClose = ()=> {
        console.log("cl");
      }
const handleNextClick = () => {
  console.log("yearlength",yearSlidedata.length);
  if(currentSlide === yearSlidedata.length -1) return;
  setNavigationDirection("next");
  setDirection("next");
  setPrevContentClones([]);
  setNextContentClones([]);
  setAnimationTrigger(0)
setCurrentInnerSlide(0);
animateAirplanes(currentSlide + 2, "next");
// setCurrentSlideStatus(false);
  setSlideDataIndex((prev) => prev + 1);
  setImagePosition((prev) => prev + 50);
    if (swiperRef.current && currentSlide < yearSlideData.length - 1) {
        swiperRef.current.scrollBy(1);
      }
    //   console.log("clicked," , swiperRef.current);
   
}
const handlePrevClick = () => {
  if(slideDataIndex === 0 || currentSlide === 0) return;
  setNavigationDirection("prev");
  setPrevContentClones([]);
  setDirection("prev");
  animateAirplanes(currentSlide + 1, "prev");
  setImagePosition((prev) => prev - 50);
  const previousIndex = currentSlide - 1;
  const specificSlide = yearSlidedata[previousIndex];

  setCurrentInnerSlide(specificSlide?.innerSlidesData?.length - 1 || 0);
  setSlideDataIndex((prev) => prev - 1);
    if (swiperRef.current && currentSlide > 0) {
        swiperRef.current.scrollBy(-1);
      }
}
const handleInnerPrev = () => {
    console.log("ok");
    setAnimationTrigger((prev) => prev + 1); 
    animateInnerSlide("prev");
    setDirection("prev");
    animateSlide(-90,150);
}
const handleInnerNext = ()=> {
    console.log("ok-2");
    setAnimationTrigger((prev) => prev + 1); 
    animateInnerSlide("next");
     animateSlide(90,150); // Move from -50 to 0
     setDirection("next");

}
const animateInnerSlide = (direction) => {
    const specificSlide = yearSlideData[slideDataIndex];
    
    if (direction === "next") {
      
      const firstCloneIndex = prevContentClones[0]?.name;
        const currentClone = {
            ...specificSlide.innerSlidesData[currentInnerSlide], // Use the current slide's data
            name: `nextContentClone-${currentInnerSlide}`,
            id: currentInnerSlide,
            x: "0%", // Start position for the clone
            y: "0%",
            height: "100%",
            width: "100%",
            maxWidth: "100%",
            opacity: 1,
            scale: 1,
          };
    
          // Append the new clone to the existing array of NextContentClones
          setNextContentClones((prevClones) => {
            const isDuplicate = prevClones.some((clone) => clone.id === currentInnerSlide);
            if (!isDuplicate) {
              return [...prevClones, currentClone];
            }
            return prevClones; // Return unchanged if duplicate found
          });
      
          setActiveNextId(currentInnerSlide);
          setCurrentInnerSlide((prevSlide) => {
            const maxIndex = yearSlideData[slideDataIndex].innerSlidesData.length - 1;
            setActiveNextId(prevSlide + 1); // Update active ID
            return prevSlide < maxIndex ? prevSlide + 1 : prevSlide;
          });
            // Remove the first clone from the array without altering others
 setTimeout(() => {
  setPrevContentClones((prev) => {
    return prev.filter((clone) => clone.name !== firstCloneIndex);
  });
 }, 1000);
         
    }
    if (direction === "prev") {
       // Create a new clone for the prev animation
       const currentClone = {
        ...specificSlide.innerSlidesData[currentInnerSlide],
        name: `prevContentClone-${currentInnerSlide}`,
        id: currentInnerSlide,
        x: "0%",
        y: "0%",
        height: "100%",
        width: "100%",
        maxWidth: "100%",
        opacity: 0,
        scale: 1,
      };
   setTimeout(() => {
    setNextContentClones((prev) => prev.slice(0, prev.length - 1));
   }, 1000);

      setPrevContentClones((prevClones) => [currentClone, ...prevClones]);
      setActiveId(currentInnerSlide);
      setCurrentInnerSlide((prevSlide) => {
        const maxIndex = yearSlideData[slideDataIndex].innerSlidesData.length - 1;
        setActiveId(prevSlide - 1);
        return prevSlide > 0 ? prevSlide - 1 : maxIndex; // Loop back if at the start
      });

      // setCurrentSlideStatus(false);
    }


}
const data = [
    { id: 1, text: 'Hello Swiper' },
    { id: 2, text: 'Beautiful' },
    { id: 3, text: 'And simple' },
    { id: 4, text: 'Another Slide' }, // Example additional data
  ];

  const generatePrevClones = (slideIndex) => {
    const specificSlide = yearSlideData[slideIndex];

    if (specificSlide?.innerSlidesData) {
      return specificSlide.innerSlidesData
        .slice(1)
        .map((innerSlide, index) => ({
          ...innerSlide,
          name: `prevContentClone-${index + 1}`,
          id: index + 1,
          x: `${150 + index * 30}%`,
          y: "100%",
          scale: 0.9,
          opacity: 1,
          isActive: false,
        }));
    }
    return [];
  };
  const generateNextClones = (slideIndex) => {
    const specificSlide = yearSlideData[slideIndex];

    if (specificSlide?.innerSlidesData) {
      return specificSlide.innerSlidesData
      .slice(0, -1)
      .map((innerSlide, index) => ({
        ...innerSlide,
        name: `nextContentClone-${index}`,
        id: index,
        x: `${-180 + index * 30}%`, 
        y: "100%", 
        height: "80px", 
        width: "200px", 
        scale: 0.9, 
        opacity: 1,
      }));

    }
    return [];
  };


  useEffect(() => {
    const initialPrevClones = generatePrevClones(slideDataIndex);
    const initialNextClones = generateNextClones(slideDataIndex);
   if(navigationDirection === "next"){

    setPrevContentClones(initialPrevClones);
   }else{
    setNextContentClones(initialNextClones);
   }
    setInnerSlideStatus(true);
  }, [slideDataIndex,navigationDirection]);

  // useEffect(()=> {
  //   if(currentInnerSlide ===  yearSlideData[slideDataIndex]?.innerSlidesData?.length - 1  ){
    
  //     setCurrentSlideStatus(true);
  //   }
  // },[currentInnerSlide])

  useEffect(() => {
    animateAirplanes(currentSlide + 1, "next"); // Pass 'initial' to distinguish page load animation
    setImagePosition((prev) => prev + 50);
  }, [currentSlide]);


  const mainSlideStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [
      { translateX: translateX.value + "%"  },
      { translateY: translateY.value + "%" },
    ],
  }));
  

  return (
    <View className="relative w-full h-full">
    {/* Custom Buttons */}
     <View className="flex-row mt-5 justify-between w-[98%] absolute left-1/2 transform -translate-x-1/2  top-[20%] z-50">
       
           <View>
           <PrevNextButton
           isColor="grey"
           isIcon='prev'
           isPolygon="first"
           onPress={ nextContentClones?.length > 0 ? handleInnerPrev : handlePrevClick }
                 />
   
           </View>
           <View>
           <PrevNextButton
                   isColor="red"
                   isIcon='next'
                   onPress={ prevContentClones?.length > 0 ? handleInnerNext : handleNextClick}
                 />
   
           </View>
         
         </View>
    {/* Swiper Slider */}
 {/* Apply Tailwind styles to the container */}
      <Swiper onIndexChanged={(index) =>{ setCurrentSlide(index)}}  showsPagination={false} loop={false} ref={swiperRef} className="!overflow-y-visible">
      {yearSlideData.map((slide, index) => (
          <View
          key={index}
     
          className=" flex-1 slider-item w-full h-full "
        >
          <View className="relative w-[430px] m-auto ">
               
              
           
            <View className="w-[16px] h-[180px] absolute bg-[#E11C37] top-0 -left-[16px]" />
            <View className="main_box drop-shadow-2xl h-[350px] ">
              <Animated.View className="main_box2 card_clip py-[30px] pl-[20px] pr-[30px] h-full bg-transparent" style={[ mainSlideStyle ]}>
              <View
                id="app_closse_2"
                // onClick={handleBackYears}
                style={
                    {
                        clipPath:
                          "polygon(50% 0%, 100% 0%, 100% 100%, 21% 100%, 0% 78%, 0% 0%)",
                      }
                }
                className="cursor-pointer absolute right-1 top-0 z-20  w-[44px] h-[32px] bg-[#716e6e2e] hover:bg-[#918F8F]  transition-all flex justify-center items-center text-white font-bold"
              >
                 <CloseButton
               
               onPress={handleClose}
              />
              </View>
                <View className="relative w-full flex flex-row items-center">
                  <Image
                      style={{ width: 160, height: 100, resizeMode: 'contain' }}
                    source={
                      innerSlideStatus
                        ? slide?.innerSlidesData[currentInnerSlide]?.image
                        : slide?.image
                    }
                    alt="Slide Image"
                  />
                  <View className="" style={{ flex: 1 }}>
              
                      <Text className="year font-[800] text-[1.5rem] text-red-600 font-objektiv">
                        {innerSlideStatus
                          ? slide?.innerSlidesData[currentInnerSlide]?.year
                          : slide?.year}
                      </Text>
              
                    <Text className="font-[900] text-[1.15rem] leading-tight font-objektiv">
                      {innerSlideStatus
                        ? slide?.innerSlidesData[currentInnerSlide]?.title
                        : slide.title}
                    </Text>
                  </View>
                </View>
                <View className=" pt-3">
                    <InnerCarousel
                      images={
                        slide?.innerSlidesData[currentInnerSlide].slideImages ?? []
                      }
                    />

                  </View>
                <View className="w-full pt-5">
                  <Text className="text-[20px] font-[900] pb-2">
                    <Text className="font-[600] text-[0.8rem] font-objektiv">
                      {innerSlideStatus
                        ? slide?.innerSlidesData[currentInnerSlide]?.subtitle
                        : slide?.subtitle}
                    </Text>
                  </Text>
                  <Text className=" text-[0.64rem] pb-5 font-[600]  leading-tight">
                    {innerSlideStatus
                      ? slide?.innerSlidesData[currentInnerSlide]?.description
                      : slide?.description}
                  </Text>
                </View>

                <View className="flex flex-row z-50">
              
                  <TouchableOpacity onPress={goToYearExplore} className="bg-[#393637] clipped-button-2 flex gap-2 justify-center items-center w-[100px]  px-4 p-2 text-[0.65rem] tracking-[0.6px] hover:bg-neutral-500 transition-all">
                 <Text className="text-white text-[0.7rem]">   Gallery</Text>
                  
                  </TouchableOpacity>
               
              
                    <TouchableOpacity onPress={goToYearExplore} className="bg-[#D91027] clipped-button-2 flex justify-center items-center gap-2 w-[100px]  px-4 p-2 ml-4 text-[0.8rem] tracking-[0.6px] hover:bg-red-900 transition-all">
                  <Text className="text-white text-[0.7rem]">    Explore</Text>
                    </TouchableOpacity>
                
                </View>
              </Animated.View>

              {prevContentClones &&
  prevContentClones.map((clone, index) => (
    <CloneItem 
      key={clone.id}
      clone={clone}
      index={index}
      activeId={activeId}
      isPrev={true}
      slide={slide}
      animationTrigger={animationTrigger}
      direction={direction}
currentInnerSlide={currentInnerSlide ?? 0} 
    //   redDot={redDot}
    //   activeRedDot={activeRedDot}
    />
  ))}

{nextContentClones &&
  nextContentClones.map((clone, index) => (
    <CloneItem 
      key={clone.id}
      clone={clone}
      index={index}
      activeId={activeNextId}
      isPrev={false}
      slide={slide}
      animationTrigger={animationTrigger}
      currentInnerSlide={currentInnerSlide ?? 0} 
      direction={direction}
    //   redDot={redDot}
    //   activeRedDot={activeRedDot}
    />
  ))}
           
            </View>
          </View>

          {/* Timeline Content */}
          <View className="h-[3px] w-full absolute bg-[#00000014] top-1/2 -translate-y-1/2   -z-10">
            {slide.timeline.map((timeline, i) => (
              <View
                key={i}
                className={`w-[3px] absolute h-[260px] ${i === 0 ? "left-[7%]" : "right-[7%]"} bg-[#00000014] bottom-0`}
              >
                <View className="bg-[#B7B7B7] w-2.5 h-2.5 rounded-full absolute bottom-0 left-1/2 trasform -translate-x-1/2"></View>
                <View className="w-[95px] h-[95px] bg-white  rounded-full p-2  left-1/2 transform -translate-x-1/2 shadow-[0px_3px_5px_5px_#dddddd80]">
                  <View className=" rounded-full w-full h-full  bg-white flex justify-center items-center shadow-[0px_3px_6px_3px_#f5f2f2c2]">
                    <View className="p-1">
                      <Text className="text-red-400 font-[700] text-[20px] text-center">
                        {timeline.year}
                      </Text>
                      <Text className="text-[0.5rem] text-center">
                        {timeline.text}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>

        </View>
      ))}
    </Swiper>
    </View>

  )
}

